<template>
    <div>
    <!-- Navbar -->
    <nav class="bg-white text-black fixed w-[100%] z-50 flex justify-between items-center paddingX font-bodoni">
        <div class="Contact hover:underline hover:decoration-wavy active:font-medium">
            <NuxtLink to="/contact" class="flex gap-1 items-center">
                <img src="../../assets/icon/PlusRounded.svg" alt="plus rounded" class="w-4" />
                <p>contact us</p>
            </NuxtLink>
        </div>
        <NuxtLink to="/">
            <img src="../../assets/img/logo.png" alt="logo" class="w-12" />
        </NuxtLink>
        <div>
            <span @click="menu"
                class="flex items-center cursor-pointer hover:underline hover:decoration-wavy active:font-medium">
                <img src="../../assets/icon/hamburger.svg" alt="hamburger" class="m-2" />
                <p class="font-bodoni">menu</p>
            </span>
            <div id="navbar-toggle"
                class="fixed navbar-toggle w-[100%] paddingX left-0 top-0 overflow-hidden bg-white rounded-b-2xl shadow-2xl duration-200"
                :class="{ 'h-0': isHidden }" ref="hamburger">
                <div class="flex justify-between">
                    <img src="../../assets/img/logo.png" alt="logo" class="w-12" />
                    <span @click="menu"
                        class="flex items-center gap-3 cursor-pointer hover:underline hover:decoration-wavy active:font-medium">
                        <img src="../../assets/icon/Close.svg" alt="close" class="" />
                        <p class="font-bodoni">close</p>
                    </span>
                </div>
                <div class="MenuList flex justify-between py-5">
                    <ul class="font-bodoni flex flex-col gap-2">
                        <li>
                            <NuxtLink to="/" class="hover:underline hover:decoration-wavy active:font-medium">Home
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="hover:underline hover:decoration-wavy active:font-medium">About
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/product/men"
                                class="hover:underline hover:decoration-wavy active:font-medium">Men
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/product/women"
                                class="hover:underline hover:decoration-wavy active:font-medium">Women
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/product/accessories"
                                class="hover:underline hover:decoration-wavy active:font-medium">
                                Accessories</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="hover:underline hover:decoration-wavy active:font-medium">
                                Contact us</NuxtLink>
                        </li>
                    </ul>
                    <NuxtLink to="/admin/login" class="flex items-end">
                        <button
                            class="bg-[#1C3D32] text-white flex rounded-md p-1 mb-5 focus:outline-none focus:ring focus:ring-green-900">
                            <img src="../../assets/icon/AdminLogin.svg" alt="iconAdmin" class="hover:" />
                            <p class="font-bodoni">Admin</p>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <div class="bg-white text-black pt-20">
        <div class="paddingX">
            <NuxtLink to="/product/women">
                <img src="../../assets/icon/LeftArrow.svg" alt="LeftArrow">
            </NuxtLink>
            <div class="flex justify-evenly">
                <div class="carousel rounded-box w-96" data-carousel="slide">
                    <div class="carousel-item w-full" data-carousel-item="active">
                        <img src="../../assets/img/FrontProduct.jpg" class="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                    <div class="carousel-item w-full" data-carousel-item>
                        <img src="../../assets/img/BackProduct.jpg" class="w-full"
                            alt="Tailwind CSS Carousel component" />
                    </div>
                </div>
                <div class="ProfuctInfo font-lora max-w-lg flex flex-col justify-evenly">
                    <div class="Tilt leading-[15px] ps-3">
                        <p class="text-[24px] font-bold">Café Racer Man Leather Jacket</p>
                        <p class="text-[11px]">Agro 01</p>
                    </div>
                    <div class="General">
                        <p>1.000.000 IDR</p>
                        <p>Colour : Black</p>
                        <p>Size : L</p>
                        <p>Stock : 10</p>
                        <p>Cafe Racer Jacket. Cafe racer jackets typically have a simple, minimalist design with a clean
                            and tailored silhouette.</p>
                    </div>
                    <div class="OrderLink font-lora ps-3">
                        <p class="text-[11px] ">Shipping, Exchanges, and Returns</p>
                        <button class="flex py-1 px-3 gap-1 border border-black rounded-md hover:bg-[#1C3D32] hover:text-white">
                            <p>Order now</p>
                            <img src="../../assets/icon/WABlack.svg" alt="WhatsApp">
                        </button>
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
                            <img src="../../assets/icon/FB.svg" alt="Facebook">
                        </NuxtLink>
                        <NuxtLink>
                            <img src="../../assets/icon/IG.svg" alt="Instagram">
                        </NuxtLink>
                        <NuxtLink>
                            <img src="../../assets/icon/TW.svg" alt="Twitter">
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
</script>

<style scoped></style>