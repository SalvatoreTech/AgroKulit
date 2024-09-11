<template>
    <div class="bg-white text-black pt-7">
        <div class="paddingX">
            <div class="Hero_container flex justify-between items-center">
                <div class="Hero_text max-w-2xl">
                    <p class="font-bodoni lg:text-[81px] text-[51px]">
                        Express Yourself with Leather
                    </p>
                    <p class="max-w-sm font-lora">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                        turpis molestie, dictum est a, mattis tellus. Sed dignissim,.
                    </p>
                    <div class="collection_btn flex gap-5 mt-12 font-lora">
                        <NuxtLink class="bg-[#1C3D32] rounded-md text-white py-2 px-3">
                            <p>Men's Collection</p>
                        </NuxtLink>
                        <NuxtLink class="bg-[#1C3D32] rounded-md text-white py-2 px-3">
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
                    <img src="../assets/icon/BestSellerVector.svg" alt="BestSellerVector" />
                    <p class="font-bodoni text-[35px] font-bold">Best Sellers</p>
                </div>
                <div class="BestSeller_product">
                    <div class="BestSeller_jacket carousel">
                        <div id="slide1" class="carousel-item relative w-full flex gap-5">
                            <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group" data-carousel-item>
                                <img src="../assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-3">
                                            <p class="lg:text-xl md:text-lg sm:text-md text-sm font-lora">
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
                                                class="flex items-center gap-1 bg-white shadow-sm rounded-full px-1">
                                                <p class="font-lora text-[16px] text-black">
                                                    Order now
                                                </p>
                                                <img src="../assets/icon/Plus.svg" alt="" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group" data-carousel-item>
                                <img src="../assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-3">
                                            <p class="lg:text-xl md:text-lg sm:text-md text-sm font-lora">
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
                                                class="flex items-center gap-1 bg-white shadow-sm rounded-full px-1">
                                                <p class="font-lora text-[16px] text-black">
                                                    Order now
                                                </p>
                                                <img src="../assets/icon/Plus.svg" alt="" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group" data-carousel-item>
                                <img src="../assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-3">
                                            <p class="lg:text-xl md:text-lg sm:text-md text-sm font-lora">
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
                                                class="flex items-center gap-1 bg-white shadow-sm rounded-full px-1">
                                                <p class="font-lora text-[16px] text-black">
                                                    Order now
                                                </p>
                                                <img src="../assets/icon/Plus.svg" alt="" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <!-- <div
                                class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2">
                                    <img src="../assets/icon/arrow.svg" alt="left">
                                </a>
                                <a href="#slide2">
                                    <img src="../assets/icon/arrow.svg" alt="right" class="transform rotate-180">
                                </a>
                            </div> -->
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <div class="lg:w-80 md:w-48 sm:w-38 w-28 relative group" data-carousel-item>
                                <img src="../assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-3">
                                            <p class="lg:text-xl md:text-lg sm:text-md text-sm font-lora">
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
                                                class="flex items-center gap-1 bg-white shadow-sm rounded-full px-1">
                                                <p class="font-lora text-[16px] text-black">
                                                    Order now
                                                </p>
                                                <img src="../assets/icon/Plus.svg" alt="" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <!-- <div
                                class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1">
                                    <img src="../assets/icon/arrow.svg" alt="left">
                                </a>
                                <a href="#slide1">
                                    <img src="../assets/icon/arrow.svg" alt="right" class="transform rotate-180">
                                </a>
                            </div> -->
                        </div>
                    </div>
                    <div class="BestSeller_accessories flex justify-between pt-5">
                        <figure
                            class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <a href="#">
                                <img class="rounded-lg" src="../assets/img/ExAccsProduct.jpg" alt="imageAccessoriesProduct">
                            </a>
                            <figcaption class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full">
                                <div class="flex justify-between items-start">
                                    <div class="ProductInfo flex flex-col leading-3">
                                        <p class="lg:text-xl md:text-lg sm:text-md text-sm font-lora">
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
                                        <button class="flex items-center gap-1 bg-white shadow-sm rounded-full px-1">
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
        <div class="Explore px-10">
            <div class="DiscoverJacket img">
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>