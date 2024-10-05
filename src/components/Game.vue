<script setup>
import { fetchGameById } from "@/services/gameService";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { FastAverageColor } from "fast-average-color";

let game = ref({});
let gameId = useRoute().params.id;
let imageAvgColor = ref("#111");

onMounted(async () => {
	const data = await fetchGameById(gameId);
	if (data) game.value = data;
	else {
		// toast error
	}

	const fac = new FastAverageColor();
	fac.getColorAsync(
		`https://localhost:7187/api/proxy-image?imageUrl=${encodeURIComponent(
			game.value.artwork
		)}`
	)
		.then((color) => {
			imageAvgColor.value = color.rgba;
		})
		.catch((e) => {
			console.log(e);
		});
});
</script>

<template>
	<section class="absolute inset-0 flex flex-col pointer-events-none">
		<img
			:src="game.artwork"
			class="banner relative left-0 top-0 w-full pointer-events-none h-[600px] object-cover object-center -z-10 filter blur-sm brightness-[50%]"
		/>
		<div class="absolute top-0 left-0 w-full">
			<div class="container mx-auto my-36 px-10">
				<h1 class="text-6xl text-white font-bold my-12">
					{{ game.title }}
				</h1>
				<p class="text-xl text-gray-200">{{ game.description }}</p>
			</div>
		</div>
		<div class="flex-1" :style="{ backgroundColor: imageAvgColor }"></div>
	</section>
</template>

<style></style>
