<template>
    <div>
    <!-- Navbar -->
    <nav
    class="bg-white text-black fixed w-[100%] z-50 flex justify-between items-center paddingX font-bodoni"
    >
    <div class="Contact hover:underline hover:decoration-wavy active:font-medium">
        <NuxtLink to="/contact" class="flex gap-1 items-center">
            <img
            src="../../assets/icon/PlusRounded.svg"
            alt="plus rounded"
            class="w-4"
            />
            <p>contact us</p>
        </NuxtLink>
    </div>
    <NuxtLink to="/">
        <img src="../../assets/img/logo.png" alt="logo" class="w-12" />
    </NuxtLink>
    <div>
        <span
        @click="menu"
        class="flex items-center cursor-pointer hover:underline hover:decoration-wavy active:font-medium"
        >
        <img src="../../assets/icon/hamburger.svg" alt="hamburger" class="m-2" />
        <p class="font-bodoni">menu</p>
        </span>
        <div id="navbar-toggle"
        class="fixed navbar-toggle w-[100%] paddingX left-0 top-0 overflow-hidden bg-white rounded-b-2xl shadow-2xl duration-200"
        :class="{ 'h-0': isHidden }"
        ref="hamburger"
        >
        <div class="flex justify-between">
            <img src="../../assets/img/logo.png" alt="logo" class="w-12" />
            <span
            @click="menu"
            class="flex items-center gap-3 cursor-pointer hover:underline hover:decoration-wavy active:font-medium"
            >
            <img src="../../assets/icon/Close.svg" alt="close" class="" />
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
            <NuxtLink to="admin/login" class="flex items-end">
            <button
                class="bg-[#1C3D32] text-white flex rounded-md p-1 mb-5 focus:outline-none focus:ring focus:ring-green-900"
            >
                <img
                src="../../assets/icon/AdminLogin.svg"
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

    <!-- Content -->
    <div class="bg-white text-black">
        <figure class="relative pt-12 flex justify-center items-start">
        <img src="../../assets/img/BGAccessories.jpg" alt="bgMenProduct" class="w-full"/>
        <figcaption class="absolute text-center max-w-xs pt-5">
            <div class=" flex justify-between font-bodoni text-[16px]">
                <p>Men</p>
                <p>Women</p>
            </div>
            <p class="font-bodoni text-[38px] font-bold">Accessories</p>
        </figcaption>
        </figure>
        <div class="Filter flex justify-between paddingX mt-1">
        <div class="hyper_link">
            <p class="font-lora text-gray-500">
            <NuxtLink to="/"> Home </NuxtLink>
            / Accessories
            </p>
        </div>
        <div class="search">
            <form class="max-w-full mx-auto flex gap-2">
            <div class="relative">
                <div
                class="absolute pt-1 start-0 flex items-center ps-3 pointer-events-none"
                >
                <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                </div>
                <input
                type="search"
                class="block w-xl w-[230px] p-1 ps-8 text-xs text-gray-950 border border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                placeholder="Search for an name"
                required
                />
            </div>
            <select
                id="items"
                class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
            >
                <option
                class="hover:bg-slate-600 hover:text-white"
                selected
                disabled
                >
                Items
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="US">
                Belts
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="CA">
                Hanbags
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="FR">
                Wallets
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Footwear
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Key Chain
                </option>
            </select>
            <select
                id="colour"
                class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
            >
                <option
                class="hover:bg-slate-600 hover:text-white"
                selected
                disabled
                >
                Colour
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="US">
                Black
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="CA">
                Brown
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="FR">
                Red
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Cream
                </option>
            </select>
            </form>
        </div>
        </div>
        <div class="Product flex flex-wrap gap-2 justify-between paddingX">
        <div
            class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md"
        >
            <figure ref="photo" class="m-1">
            <img
                src="../../assets/img/Access.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/AccessHover.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                    Casual Bonded Belt for Man
                </p>
                <p class="font-lora text-[11px]">450.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        <div
            class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md"
        >
            <figure ref="photo" class="m-1">
            <img
                src="../../assets/img/Access.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/AccessHover.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                    Casual Bonded Belt for Man
                </p>
                <p class="font-lora text-[11px]">450.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        <div
            class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md"
        >
            <figure ref="photo" class="m-1">
            <img
                src="../../assets/img/Access.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/AccessHover.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                    Casual Bonded Belt for Man
                </p>
                <p class="font-lora text-[11px]">450.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        <div
            class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md"
        >
            <figure ref="photo" class="m-1">
            <img
                src="../../assets/img/Access.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/AccessHover.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                    Casual Bonded Belt for Man
                </p>
                <p class="font-lora text-[11px]">450.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        <div
            class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md"
        >
            <figure ref="photo" class="m-1">
            <img
                src="../../assets/img/Access.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/AccessHover.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                    Casual Bonded Belt for Man
                </p>
                <p class="font-lora text-[11px]">450.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        </div>

        <!-- Footer -->
        <footer class="bg-[#1C3D32] max-w-full mt-5 text-white py-3">
            <div class="flex justify-between paddingX items-center">
                <div class="Profile text-center leading-tight">
                    <p class="font-bodoni text-[38px]">
                        Agro Leather
                    </p>
                    <p class="font-lora text-[11px]">
                        Free shipping in Indonesia, Malaysia and World Wide.
                    </p>
                    <div class="Hyper_link flex gap-2 justify-center">
                        <NuxtLink>
                            <img src="../assets/icon/FB.svg" alt="Facebook">
                        </NuxtLink>
                        <NuxtLink>
                            <img src="../assets/icon/IG.svg" alt="Instagram">
                        </NuxtLink>
                        <NuxtLink>
                            <img src="../assets/icon/TW.svg" alt="Twitter">
                        </NuxtLink>
                    </div>
                </div>
                <div class="Linked flex justify-between w-6/12">
                    <NuxtLink to="/about">
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Our Story
                        </p>
                    </NuxtLink>
                    <NuxtLink to="/product/men">
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Men
                        </p>
                    </NuxtLink>
                    <NuxtLink to="/product/women">
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Women
                        </p>
                    </NuxtLink>
                    <NuxtLink to="/product/accessories">
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Accessories
                        </p>
                    </NuxtLink>
                    <NuxtLink to="/contact">
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Contact us
                        </p>
                    </NuxtLink>
                </div>
            </div>
            <div class="text-center font-lora">
                <p class="text-slate-100/50 text-[10px]">Salvatore © Copyright 2024</p>
            </div>
        </footer>
    </div>
    </div>
</template>

<script setup>
const isHidden = ref(true);

function menu() {
    isHidden.value = !isHidden.value;
}
onMounted(() => {});
</script>

<style scoped>
</style>