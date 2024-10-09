<script setup>
import Hero from "./Hero.vue";
import HotPicks from "./HotPicks.vue";
import RecentlyAdded from "./RecentlyAdded.vue";
import RecentlyReleased from "./RecentlyReleased.vue";
</script>

<template>
	<Hero />
	<HotPicks />
	<section class="flex gap-6">
		<div class="w-full">
			<RecentlyAdded />
		</div>
		<div class="w-full">
			<RecentlyReleased />
		</div>
	</section>
</template>
