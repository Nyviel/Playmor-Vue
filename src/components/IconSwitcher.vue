<script setup lang="ts">
defineProps<{ name: string }>();
const iconScale = 3.5;
</script>

<template>
	<div v-if="name.toLowerCase() === 'steam'">
		<v-icon name="fa-steam" :scale="iconScale" />
	</div>
	<div v-else-if="name.toLowerCase() === 'xbox'">
		<v-icon name="fa-xbox" :scale="iconScale" />
	</div>
	<div v-else-if="name.toLowerCase() === 'microsoft'">
		<v-icon name="fa-microsoft" :scale="iconScale" />
	</div>
	<div v-else-if="name.toLowerCase() === 'epicgames'">
		<v-icon name="co-epic-games" :scale="iconScale" />
	</div>
	<div v-else-if="name.toLowerCase() === 'gog'">
		<v-icon name="co-gog-com" :scale="iconScale" />
	</div>
	<div v-else-if="name.toLowerCase() === 'other'">
		<v-icon name="fa-question" :scale="iconScale" />
	</div>
</template>
