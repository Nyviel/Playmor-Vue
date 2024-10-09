<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ title: string; content: Array<any> }>();
</script>

<template>
	<article
		class="bg-black/35 h-fit p-5 rounded-lg text-center border border-white shadow-sm shadow-white"
	>
		<h3 class="font-bold text-xl pb-2">{{ title }}</h3>
		<ul class="flex flex-col gap-1">
			<li v-for="row of content">
				{{ row }}
			</li>
		</ul>
	</article>
</template>
