import { Style } from '../.nuxt/components';
<template>
    <div class="bg-white text-black pt-8">
        <div class="paddingX">
        <div class="Hero_container flex justify-between items-center">
            <div class="Hero_text max-w-2xl">
            <p class="font-bodoni lg:text-[71px] text-[51px]">
                Express Yourself with Leather
            </p>
            <p class="max-w-sm font-lora">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                turpis molestie, dictum est a, mattis tellus. Sed dignissim,.
            </p>
            <div class="collection_btn flex gap-5 mt-12 font-lora">
                <NuxtLink to="/product/men" class="bg-[#1C3D32] rounded-md text-white py-2 px-3 border-2 border-[#1C3D32] hover:bg-transparent hover:text-black hover:border-2 hover:border-[#1C3D32]">
                <p>Men's Collection</p>
                </NuxtLink>
                <NuxtLink class="bg-[#1C3D32] rounded-md text-white py-2 px-3 border-2 border-[#1C3D32] hover:bg-transparent hover:text-black hover:border-2 hover:border-[#1C3D32]">
                <p>Women's Collection</p>
                </NuxtLink>
            </div>
            </div>
            <div class="Hero_photo">
            <img src="../assets/img/ManModel.svg" alt="ManModel" />
            </div>
        </div>
        <div class="BestSeller_container">
            <div class="BestSeller_text flex">
            <img
                src="../assets/icon/BestSellerVector.svg"
                alt="BestSellerVector"
            />
            <p class="font-bodoni text-[35px] font-medium">Most Liked</p>
            </div>
            <div class="BestSeller_product">
            <div class="BestSeller_jacket flex justify-between">
                <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                <img
                    src="../assets/img/ExProduct.jpg"
                    class="rounded-md group-hover:scale-95 duration-300"
                />
                <div
                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70"
                >
                    <div class="flex justify-between px-3 items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Black Texture Leather
                        </p>
                        <p class="font-lora text-[16px]">1.000.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end me-5">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img
                            src="../assets/icon/Plus.svg"
                            alt=""
                            class="transform hover:rotate-90 transition duration-100"
                        />
                        </button>
                    </NuxtLink>
                    </div>
                </div>
                </div>
                <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                <img
                    src="../assets/img/ExProduct.jpg"
                    class="rounded-md group-hover:scale-95 duration-300"
                />
                <div
                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70"
                >
                    <div class="flex justify-between px-3 items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Black Texture Leather
                        </p>
                        <p class="font-lora text-[16px]">1.000.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end me-5">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img
                            src="../assets/icon/Plus.svg"
                            alt=""
                            class="transform hover:rotate-90 transition duration-100"
                        />
                        </button>
                    </NuxtLink>
                    </div>
                </div>
                </div>
                <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                <img
                    src="../assets/img/ExProduct.jpg"
                    class="rounded-md group-hover:scale-95 duration-300"
                />
                <div
                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70"
                >
                    <div class="flex justify-between px-3 items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Black Texture Leather
                        </p>
                        <p class="font-lora text-[16px]">1.000.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end me-5">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img
                            src="../assets/icon/Plus.svg"
                            alt=""
                            class="transform hover:rotate-90 transition duration-100"
                        />
                        </button>
                    </NuxtLink>
                    </div>
                </div>
                </div>
            </div>
            <div class="BestSeller_accessories flex justify-between gap-1 pt-5">
                <figure
                class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                >
                <a href="#">
                    <img
                    class="rounded-lg"
                    src="../assets/img/ExAccsProduct.jpg"
                    alt="imageAccessoriesProduct"
                    />
                </a>
                <figcaption
                    class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full"
                >
                    <div class="flex justify-between items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Green Forest Wallet
                        </p>
                        <p class="font-lora text-[16px]">400.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img src="../assets/icon/Plus.svg" alt="" />
                        </button>
                    </NuxtLink>
                    </div>
                </figcaption>
                </figure>
                <figure
                class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                >
                <a href="#">
                    <img
                    class="rounded-lg"
                    src="../assets/img/ExAccsProduct.jpg"
                    alt="imageAccessoriesProduct"
                    />
                </a>
                <figcaption
                    class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full"
                >
                    <div class="flex justify-between items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Green Forest Wallet
                        </p>
                        <p class="font-lora text-[16px]">400.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img src="../assets/icon/Plus.svg" alt="" />
                        </button>
                    </NuxtLink>
                    </div>
                </figcaption>
                </figure>
                <figure
                class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                >
                <a href="#">
                    <img
                    class="rounded-lg"
                    src="../assets/img/ExAccsProduct.jpg"
                    alt="imageAccessoriesProduct"
                    />
                </a>
                <figcaption
                    class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full"
                >
                    <div class="flex justify-between items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Green Forest Wallet
                        </p>
                        <p class="font-lora text-[16px]">400.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img src="../assets/icon/Plus.svg" alt="" />
                        </button>
                    </NuxtLink>
                    </div>
                </figcaption>
                </figure>
                <figure
                class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                >
                <a href="#">
                    <img
                    class="rounded-lg"
                    src="../assets/img/ExAccsProduct.jpg"
                    alt="imageAccessoriesProduct"
                    />
                </a>
                <figcaption
                    class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full"
                >
                    <div class="flex justify-between items-start">
                    <div class="ProductInfo flex flex-col leading-3">
                        <p
                        class="lg:text-xl md:text-lg sm:text-md text-sm font-lora"
                        >
                        Green Forest Wallet
                        </p>
                        <p class="font-lora text-[16px]">400.000 IDR</p>
                    </div>
                    <div class="GenderProduct">
                        <p class="font-lora text-[16px]">Men</p>
                    </div>
                    </div>
                    <div class="Order_btn flex justify-end">
                    <NuxtLink>
                        <button
                        class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150"
                        >
                        <p class="font-lora text-[16px] text-black">Order now</p>
                        <img src="../assets/icon/Plus.svg" alt="" />
                        </button>
                    </NuxtLink>
                    </div>
                </figcaption>
                </figure>
            </div>
            </div>
        </div>
        </div>
        <div class="Explore px-2 py-5">
        <figure class="DiscoverJacket relative max-w-full overflow-hidden">
            <img src="../assets/img/BGDiscover.jpg" />
            <figcaption
            class="absolute px-4 text-lg text-white top-0 flex flex-col justify-center gap-20 items-center pb-5 w-full h-full"
            >
            <div class="Titl flex flex-col items-center gap-3">
                <p class="font-lora font-bold text-[54px] drop-shadow-2xl">
                Explore the Beauty of Genuine Leather
                </p>
                <p class="font-lora">
                For a range of high quality leather jackets, high quality leather
                goods, look no further.
                </p>
            </div>
            <div class="Linked flex justify-between w-6/12 font-lora">
                <NuxtLink
                to=""
                class="flex items-center content-center gap-2 cursor-pointer hover:underline hover:decoration-wavy"
                >
                <p>Men</p>
                <img src="../assets/icon/RightArrow.svg" alt="" />
                </NuxtLink>
                <NuxtLink
                to=""
                class="flex items-center content-center gap-2 cursor-pointer hover:underline hover:decoration-wavy"
                >
                <p>Women</p>
                <img src="../assets/icon/RightArrow.svg" alt="" />
                </NuxtLink>
            </div>
            </figcaption>
        </figure>
        <figure class="DiscoverJacket relative max-w-full pt-5 overflow-hidden">
            <img src="../assets/img/AccessBG.jpg" />
            <figcaption
            class="absolute px-4 text-lg text-white top-0 flex flex-col justify-center gap-20 items-center pb-5 w-full h-full"
            >
            <div class="Titl flex flex-col items-center gap-3">
                <p class="font-lora font-bold text-[54px] drop-shadow-2xl">
                Accessories
                </p>
                <p class="font-lora">
                Essential Style Come Alive in Bright Colours.
                </p>
            </div>
            <div class="Linked flex justify-center w-6/12 font-lora">
                <NuxtLink
                to=""
                class="flex items-center content-center gap-2 cursor-pointer hover:underline hover:decoration-wavy"
                >
                <p>Discover</p>
                <img src="../assets/icon/RightArrow.svg" alt="" />
                </NuxtLink>
            </div>
            </figcaption>
        </figure>
        </div>
        <div class="Costum bg-[#1C3D32] flex max-w-full">
            <div class="Costum_text text-white paddingX flex h-[100vh] justify-evenly flex-col">
                <div class="text flex flex-col gap-5">
                    <p class="font-bodoni text-[51px]">Costum Your Own</p>
                    <p class="font-lora">
                    Our white-glove bespoke service is where your individuality is our
                    ultimate masterpiece. From bespoke illustrations to the selection of
                    materials, cuts, fabrics, prints, and finishing touches, you become a
                    collaborator with our in-house design consultant team to shape pieces
                    that fit your lifestyle and are unmistakably you.
                    </p>
                </div>
                <div class="flex justify-end gap-2 hover:underline hover:decoration-wavy">
                    <img src="../assets/icon/WA.svg" alt="">
                    <p class="font-lora">WhatsApp</p>
                </div>
            </div>
            <img src="../assets/img/IMGCostum.jpg" alt="ImageCostum" class="w-[50vw]">
        </div>
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
                    <NuxtLink>
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Our Story
                        </p>
                    </NuxtLink>
                    <NuxtLink>
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Men
                        </p>
                    </NuxtLink>
                    <NuxtLink>
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Women
                        </p>
                    </NuxtLink>
                    <NuxtLink>
                        <p class="font-lora hover:underline hover:decoration-wavy active:font-medium cursor-pointer">
                            Accessories
                        </p>
                    </NuxtLink>
                    <NuxtLink>
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
</template>

<script setup>
</script>

<style scoped></style>