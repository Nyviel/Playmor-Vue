<script setup>
import { RouterView } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
	<div class="container mx-auto p-10 min-h-screen">
		<Navbar />
		<RouterView />
	</div>
	<Footer />
</template>

<style>
body {
	background-color: #111;
	overflow-x: hidden;
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
	top: 0px;
	right: -200px;
	border-radius: 50%;
	filter: blur(150px);
	opacity: 0.6; /* Slight transparency for softer glow */
	z-index: -1; /* Make sure circles stay behind content */
}
</style>
