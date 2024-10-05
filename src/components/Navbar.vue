<script setup>
import { ref } from "vue";
import { API } from "@/utilities/constants";
import { Divide, LogIn, LogOut, Pencil, Search } from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
const isAuthenticated = ref(false);
const isAdmin = ref(false);
console.log(API);
</script>

<template>
	<header className="w-full flex items-center bg-transparent">
		<RouterLink to="/" id="logo">
			<div class="text-3xl">
				<span className="text-violet-500 font-bold">Play</span>
				<span className="text-white">Mor</span>
			</div>
		</RouterLink>
		<nav className="relative flex-1">
			<ul
				role="list"
				className="hidden md:flex md:flex-row items-center justify-end gap-5 text-white"
			>
				<a href="/explore" className="hover:cursor-pointer">
					Explore <Search class="inline ms-1" />
				</a>
				<Separator orientation="vertical" style="height: 20px" />
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
						Logout <LogOut class="inline ms-1" />
					</a>
				</div>
				<div v-else class="flex gap-5 justify-center items-center">
					<a href="/auth/login" className="hover:cursor-pointer">
						Login <LogIn class="inline ms-1" />
					</a>
					<Separator orientation="vertical" style="height: 20px" />
					<a href="/auth/register" className="hover:cursor-pointer">
						Register <Pencil class="inline ms-1" />
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
