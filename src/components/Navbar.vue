<script setup>
import { ref } from "vue";
import { API } from "@/utilities/constants";
const isAuthenticated = ref(false);
const isAdmin = ref(false);
console.log(API);
</script>

<template>
	<header className="w-full flex items-center bg-transparent">
		<a href="/" className="text-3xl" id="logo">
			<span className="text-violet-500 font-bold">Play</span>
			<span className="text-white">Mor</span>
		</a>
		<nav className="relative flex-1">
			<ul
				role="list"
				className="hidden md:flex md:flex-row items-center justify-end gap-5 text-white"
			>
				<a href="/explore" className="hover:cursor-pointer">
					Explore
				</a>
				<a href="/about" className="hover:cursor-pointer"> About </a>
				<a href="/contact" className="hover:cursor-pointer">
					Contact
				</a>
				<div v-if="isAdmin">
					<a href="/dashboard" className="hover:cursor-pointer">
						Dashboard
					</a>
				</div>
				<div v-if="isAuthenticated">
					<a href="/profile" className="hover:cursor-pointer">
						Profile
					</a>
					<a
						href="#"
						@click="
							() => {
								// setIsAuthenticated(false);
								// signOut();
							}
						"
						className="hover:cursor-pointer"
					>
						Logout
					</a>
				</div>
				<div v-else class="flex gap-5">
					<a href="/auth/login" className="hover:cursor-pointer">
						Login
					</a>
					<a href="/auth/register" className="hover:cursor-pointer">
						Register
					</a>
				</div>
			</ul>
		</nav>
	</header>
</template>

<style>
a:hover:not(#logo) {
	color: rgb(139 92 246);
	border-bottom: 1px solid rgb(139 92 246);
	transition: color 0.5s;
}
</style>
