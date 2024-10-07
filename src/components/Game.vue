<script setup>
import { fetchGameById } from "@/services/gameService";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FastAverageColor } from "fast-average-color";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { toast } from "vue3-toastify";
import GameDetailsCards from "./GameDetailsCards.vue";
import VueMarkdown from "vue-markdown-render";

let game = ref(null);
let loading = ref(true);
let gameId = useRoute().params.id;

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
		`https://localhost:7187/api/proxy-image?imageUrl=${encodeURIComponent(
			game.value.artwork
		)}`
	);
	document.querySelector("body").style = `background-color:${color.rgba}`;
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
	<section v-if="game && !loading" class="flex flex-col pointer-events-none">
		<img
			:src="game.artwork"
			class="banner absolute left-0 top-0 w-full pointer-events-none h-[600px] object-cover object-center -z-10 filter blur-[2px] brightness-[50%]"
		/>
		<div class="container mx-auto">
			<h1 class="text-6xl text-white font-bold my-12">
				{{ game.title }}
			</h1>
			<p class="text-xl text-gray-200">{{ game.description }}</p>
			<GameDetailsCards :game="game" />
			<div class="markdown bg-black/25 mt-10 text-white p-4 rounded-lg">
				<vue-markdown :source="game.details" />
			</div>
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
</style>
