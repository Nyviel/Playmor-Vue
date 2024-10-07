<script setup lang="ts">
import type { Game } from "@/interfaces/Game";
import { defineProps } from "vue";
import GameDetailsCard from "@/components/GameDetailsCard.vue";

defineProps<{ game: Game }>();
</script>

<template>
	<section class="grid grid-cols-3 grid-rows-2 gap-5 mt-12 text-white">
		<GameDetailsCard title="Publishers" :content="game.publisher" />
		<GameDetailsCard title="Developers" :content="game.developer" />
		<GameDetailsCard title="Platforms" :content="game.platforms" />
		<GameDetailsCard title="Genres" :content="game.genres" />
		<GameDetailsCard title="Modes" :content="game.modes" />
		<GameDetailsCard
			title="Releases"
			:content="
				game.releaseDates.map((date) => {
					return `${date.platform} - ${new Date(
						date.date
					).toDateString()}`;
				})
			"
		/>
	</section>
</template>
