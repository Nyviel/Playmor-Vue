<script setup>
import { onMounted, ref } from "vue";
import { fetchHotPicks } from "@/services/gameService.ts";

let hotPicks = ref([{}, {}, {}, {}, {}, {}]);

(async () => {
	try {
		const data = await fetchHotPicks();
		hotPicks.value = data.splice(0, 6);
	} catch (error) {
		console.error(error);
	}
})();

const setUpCardAnimations = () => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const rect = card.getBoundingClientRect();
			const cardWidth = rect.width;
			const cardHeight = rect.height;
			const centerX = rect.left + cardWidth / 2;
			const centerY = rect.top + cardHeight / 2;
			const mouseX = e.clientX - centerX;
			const mouseY = e.clientY - centerY;
			let offsetX = mouseX;
			let offsetY = mouseY;
			if (mouseX < centerX) offsetX *= -1;
			if (mouseX >= centerX && offsetX < 0) offsetX *= -1;

			const rotateX = offsetX / 15;
			const rotateY = offsetY / 15;
			card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		});

		card.addEventListener("mouseleave", () => {
			card.style.transform = "rotateX(0deg) rotateY(0deg)";
		});
	});
};
onMounted(() => {
	setUpCardAnimations();
});
</script>

<template>
	<section>
		<h2 class="text-3xl mt-4 font-bold text-white">Today's hot picks</h2>

		<div class="flex gap-12 flex-wrap my-4">
			<article
				v-for="pick in hotPicks"
				class="h-[650px] w-[450px] border border-violet-500 card"
			>
				<img
					:src="`https://localhost:7187/api/proxy-image?imageUrl=${encodeURIComponent(
						pick.cover
					)}`"
					crossorigin="anonymous"
					alt=""
				/>
			</article>
		</div>
	</section>
</template>
<style>
/* Base card styling */
.card {
	position: relative;
	background-color: #222;
	border-radius: 15px;
	box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1);
	transition: transform 0.1s ease-out, box-shadow 0.2s ease;
	transform-style: preserve-3d;
	perspective: 1000px;
	overflow: hidden;
}

.card::before {
	content: "";
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		45deg,
		rgba(255, 255, 255, 0.1),
		rgba(255, 255, 255, 0.15),
		rgba(255, 255, 255, 0.1)
	);
	opacity: 0;
	pointer-events: none;
}

.card:hover {
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.card:hover::before {
	opacity: 1;
}

.card > img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}
</style>
