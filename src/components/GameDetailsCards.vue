<script setup lang="ts">
import type { Game } from "@/interfaces/Game";
import GameDetailsCard from "@/components/GameDetailsCard.vue";

defineProps<{ game: Game }>();
</script>

<template>
	<section class="flex flex-col gap-5 text-white">
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
