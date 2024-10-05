<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import HotPicks from "./components/HotPicks.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// const notify = () => {
// 	toast("Wow so easy !", {
// 		autoClose: 1000,
// 	});
// };
</script>

<template>
	<div class="container mx-auto p-10 h-screen">
		<Navbar />
		<Hero />
		<HotPicks />
	</div>
</template>

<style>
body {
	background-color: #111;
}

body::after {
	content: "";
	position: absolute;
	width: 500px;
	height: 500px;
	background-color: #5539cc;
	top: -100px;
	left: -100px;
	border-radius: 50%;
	filter: blur(150px);
	opacity: 0.6; /* Slight transparency for softer glow */
	z-index: -1; /* Make sure circles stay behind content */
}

body::before {
	content: "";
	position: absolute;
	width: 600px;
	height: 600px;
	background-color: #0066cd;
	bottom: -200px;
	right: -200px;
	border-radius: 50%;
	filter: blur(150px);
	opacity: 0.6; /* Slight transparency for softer glow */
	z-index: -1; /* Make sure circles stay behind content */
}
</style>
