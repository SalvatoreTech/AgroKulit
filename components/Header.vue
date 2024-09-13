import { NuxtLink } from '../.nuxt/components';
<template>
    <nav
    class="bg-white text-black fixed w-[100%] z-50 flex justify-between items-center paddingX font-bodoni"
    >
    <div class="Contact hover:underline hover:decoration-wavy active:font-medium">
        <NuxtLink to="/contact" class="flex gap-1 items-center">
            <img
            src="../assets/icon/PlusRounded.svg"
            alt="plus rounded"
            class="w-4"
            />
            <p>contact us</p>
        </NuxtLink>
    </div>
    <NuxtLink>
        <img src="../assets/img/logo.png" alt="logo" class="w-12" />
    </NuxtLink>
    <div>
        <span
        @click="menu"
        class="flex items-center cursor-pointer hover:underline hover:decoration-wavy active:font-medium"
        >
        <img src="../assets/icon/hamburger.svg" alt="hamburger" class="m-2" />
        <p class="font-bodoni">menu</p>
        </span>
        <div id="navbar-toggle"
        class="fixed navbar-toggle w-[100%] paddingX left-0 top-0 overflow-hidden bg-white rounded-b-2xl shadow-2xl duration-200"
        :class="{ 'h-0': isHidden }"
        ref="hamburger"
        >
        <div class="flex justify-between">
            <img src="../assets/img/logo.png" alt="logo" class="w-12" />
            <span
            @click="menu"
            class="flex items-center gap-3 cursor-pointer hover:underline hover:decoration-wavy active:font-medium"
            >
            <img src="../assets/icon/Close.svg" alt="close" class="" />
            <p class="font-bodoni">close</p>
            </span>
        </div>
        <div class="MenuList flex justify-between py-5">
            <ul class="font-bodoni flex flex-col gap-2">
            <li>
                <NuxtLink
                to="/"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                to="/about"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >About
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                to="/product/men"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >Men
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                to="/product/women"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >Women
                </NuxtLink>
            </li>
            <li>
                <NuxtLink
                to="/product/accessories"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >
                Accessories</NuxtLink
                >
            </li>
            <li>
                <NuxtLink
                to="/"
                class="hover:underline hover:decoration-wavy active:font-medium"
                >
                Contact us</NuxtLink
                >
            </li>
            </ul>
            <NuxtLink class="flex items-end">
            <button
                class="bg-[#1C3D32] text-white flex rounded-md p-1 mb-5 focus:outline-none focus:ring focus:ring-green-900"
            >
                <img
                src="../assets/icon/AdminLogin.svg"
                alt="iconAdmin"
                class="hover:"
                />
                <p class="font-bodoni">Admin</p>
            </button>
            </NuxtLink>
        </div>
        </div>
    </div>
    </nav>
</template>

<script setup>
const hamburger = ref();
const isHidden = ref(true);

function menu() {
    isHidden.value = !isHidden.value;
}
</script>

<style scoped></style>