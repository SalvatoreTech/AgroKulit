<template>
    <div class="bg-white text-black">
        <figure class="relative pt-12 flex justify-center items-start">
        <img src="../../assets/img/BGAccessories.jpg" alt="bgMenProduct" />
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
                placeholder="Search for an item and colour"
                required
                />
            </div>
            <select
                id="category"
                class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
            >
                <option
                class="hover:bg-slate-600 hover:text-white"
                selected
                disabled
                >
                Categoty
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="US">
                Bomber Jacket
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="CA">
                Biker Jacket
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="FR">
                Café Racer
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Blazer
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Coat
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Vest
                </option>
            </select>
            <select
                id="category"
                class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
            >
                <option
                class="hover:bg-slate-600 hover:text-white"
                selected
                disabled
                >
                Size
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="US">
                M
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="CA">
                L
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="FR">
                XL
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                XXL
                </option>
            </select>
            <select
                id="category"
                class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
            >
                <option
                class="hover:bg-slate-600 hover:text-white"
                selected
                disabled
                >
                Categoty
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="US">
                Bomber Jacket
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="CA">
                Biker Jacket
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="FR">
                Café Racer
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Blazer
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Coat
                </option>
                <option class="hover:bg-slate-600 hover:text-white" value="DE">
                Vest
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
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
                src="../../assets/img/FrontProduct.jpg"
                alt="Product"
                class="hover:content-[url('../../assets/img/BackProduct.jpg')]"
            />
            </figure>
            <div class="card-body flex flex-row items-center">
            <div class="text">
                <p class="card-title font-lora text-[16px]">
                Café Racer Man Leather Jacket
                </p>
                <p class="font-lora text-[11px]">1.000.000 IDR</p>
            </div>
            <div class="card-actions justify-end">
                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
            </div>
            </div>
        </div>
        </div>
        <footer class="bg-[#1C3D32] max-w-full mt-5 text-white py-3">
        <div class="flex justify-between paddingX items-center">
            <div class="Profile text-center leading-tight">
            <p class="font-bodoni text-[38px]">Agro Leather</p>
            <p class="font-lora text-[11px]">
                Free shipping in Indonesia, Malaysia and World Wide.
            </p>
            <div class="Hyper_link flex gap-2 justify-center">
                <NuxtLink>
                <img src="../../assets/icon/FB.svg" alt="Facebook" />
                </NuxtLink>
                <NuxtLink>
                <img src="../../assets/icon/IG.svg" alt="Instagram" />
                </NuxtLink>
                <NuxtLink>
                <img src="../../assets/icon/TW.svg" alt="Twitter" />
                </NuxtLink>
            </div>
            </div>
            <div class="Linked flex justify-between w-6/12">
            <NuxtLink>
                <p
                class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer"
                >
                Our Story
                </p>
            </NuxtLink>
            <NuxtLink>
                <p
                class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer"
                >
                Men
                </p>
            </NuxtLink>
            <NuxtLink>
                <p
                class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer"
                >
                Women
                </p>
            </NuxtLink>
            <NuxtLink>
                <p
                class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer"
                >
                Accessories
                </p>
            </NuxtLink>
            <NuxtLink>
                <p
                class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer"
                >
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
</template>

<script setup>
onMounted(() => {});
</script>

<style scoped>
</style>