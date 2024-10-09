<script setup>
import { fetchGamesByAddedDate } from "@/services/gameService";
import { API } from "@/utilities/constants";
import { onMounted, ref } from "vue";

let recentGames = ref([]);

const getRecentGames = async () => {
	try {
		const data = await fetchGamesByAddedDate();
		if (data) {
			recentGames.value = data;
		} else {
			// TODO: toastify
		}
	} catch (error) {
		console.error("Failed to fetch recent games");
	}
};

onMounted(async () => {
	await getRecentGames();
});
</script>

<template>
	<section>
		<h2 class="text-3xl mt-12 font-bold text-white">Recently added</h2>

		<div class="flex flex-col gap-12 my-8">
			<article v-for="game in recentGames">
				<RouterLink :to="`/game/${game.id}`">
					<div
						class="border-gray-300 text-white flex gap-3 justify-between items-center bg-[#111] hover:bg-[#222]"
					>
						<div
							class="h-[300px] w-[210px] border border-violet-500 card"
						>
							<img
								:src="`${API}/proxy-image?imageUrl=${encodeURIComponent(
									game.cover
								)}`"
								crossorigin="anonymous"
								alt=""
							/>
						</div>
						<div class="">
							<h3 class="text-2xl">{{ game.title }}</h3>
						</div>
						<div>
							<p class="text-lg pe-4">
								{{
									new Date(
										game.createdAt
									).toLocaleDateString()
								}}
							</p>
						</div>
					</div>
				</RouterLink>
			</article>
		</div>
	</section>
</template>
