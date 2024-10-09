<script setup>
import { fetchGameById } from "@/services/gameService";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FastAverageColor } from "fast-average-color";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { toast } from "vue3-toastify";
import GameDetailsCards from "./GameDetailsCards.vue";
import VueMarkdown from "vue-markdown-render";
import { API } from "@/utilities/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IconSwitcher from "./IconSwitcher.vue";

let game = ref();
let loading = ref(true);
let gameId = Number(useRoute().params.id);

const getGame = async () => {
	const data = await fetchGameById(gameId);
	if (data) {
		game.value = data;
	} else {
		console.error("Failed to fetch game of id: " + gameId);
		toast("Failed to get game, try again later server might be down.");
	}
};

const setupColor = async () => {
	const fac = new FastAverageColor();
	const color = await fac.getColorAsync(
		`${API}/proxy-image?imageUrl=${encodeURIComponent(game.value.artwork)}`
	);
	document.querySelector("body").style = `background-color:${
		color.rgba || "#111"
	}`;
};

onMounted(async () => {
	await getGame();
	await setupColor();
	loading.value = false;
});

onUnmounted(() => {
	document.querySelector("body").style = `background-color: #111`;
});
</script>

<template>
	<section v-if="game && !loading" class="flex flex-col">
		<img
			:src="game.artwork"
			class="banner absolute left-0 top-0 w-full h-[600px] object-cover object-center -z-10 filter blur-[2px] brightness-[50%]"
		/>
		<div class="container mx-auto my-12">
			<h1 class="text-6xl text-white font-bold my-12">
				{{ game.title }}
			</h1>
			<p class="text-xl text-gray-200 mb-12">{{ game.description }}</p>
			<Tabs default-value="information" class="w-[100%]">
				<TabsList class="bg-black/25 text-white">
					<TabsTrigger value="information"> Information </TabsTrigger>
					<TabsTrigger value="comments"> Comments </TabsTrigger>
					<TabsTrigger value="links"> Links </TabsTrigger>
				</TabsList>
				<TabsContent value="information">
					<div class="grid grid-cols-3 gap-4 mt-12">
						<div class="col-span-2">
							<div
								class="markdown bg-black/35 text-white px-6 pb-6 rounded-lg border border-white"
							>
								<vue-markdown :source="game.details" />
							</div>
						</div>
						<div class="col-span-1">
							<GameDetailsCards :game="game" />
						</div>
					</div>
				</TabsContent>
				<TabsContent value="comments">
					<p>Comments not yet implemented.</p>
				</TabsContent>
				<TabsContent value="links">
					<ul class="flex pt-6 gap-8">
						<li
							v-for="link of game.websiteLinks"
							class="text-white"
							:key="link"
						>
							<a target="_blank" :href="link.websiteLink"
								><IconSwitcher :name="link.websiteName"
							/></a>
						</li>
					</ul>
				</TabsContent>
			</Tabs>
		</div>
	</section>
	<div v-else class="w-full h-full flex justify-center items-center">
		<pulse-loader :loading="loading" color="#8B5CF6"></pulse-loader>
	</div>
</template>

<style>
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4 {
	font-size: 1.875rem;
	font-weight: 600;
	padding-bottom: 5px;
	margin-bottom: 10px;
	margin-top: 10px;
	border-bottom: 1px solid;
}

.markdown h2 {
	font-size: 1.5rem;
}

pre {
	white-space: pre-wrap; /* Forces wrapping inside <pre> */
	word-wrap: break-word; /* Allows breaking words */
	overflow-wrap: break-word; /* Breaks long words if needed */
}

code {
	white-space: pre-wrap; /* Ensures code text wraps */
	word-wrap: break-word; /* Allows breaking words */
	overflow-wrap: break-word; /* Breaks long words if needed */
}
</style>
