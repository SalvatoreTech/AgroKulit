<template>
    <!-- Navbar -->
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
    <NuxtLink to="/">
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
            <NuxtLink to="/admin/login" class="flex items-end">
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

    <!-- Content -->
    <div class="bg-white text-black h-[100vh] pt-32 flex flex-col justify-between">
        <div class="flex justify-evenly paddingX">
        <div class="FormLayer max-w-full">
            <p class="font-bodoni text-[38px]">Contact</p>
            <form class="max-w-full mx-auto">
                <div class="relative z-0 mb-5 group">
                            <input type="text" name="floating_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_name"
                                class="peer-focus:font-medium absolute text-sm ms-2  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-700 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div class="relative z-0 mb-5 group w-[400px]">
                            <input type="email" name="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm ms-2  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-700 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                        </div>
                        <div class="relative z-0 mb-5 group w-[400px]">
                            <textarea name="floating_message"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_message"
                                class="peer-focus:font-medium absolute text-sm ms-2  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-700 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
            <input
                type="submit" value="Send"
                class=" float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            </form>
        </div>
        <div
            class="Location w-[520px] border-l border-black ps-10 font-lora flex flex-col gap-2"
        >
            <p class="text-[24px]">Our Locations</p>
            <p>Tasikmalaya</p>
            <ul class="list-disc ps-5">
            <li>
                Jln Martadinata, No. 18, Jl. Ahmad Yani No.1, Empangsari, Kec.
                Tawang, Kab. Tasikmalaya, Jawa Barat 46134
            </li>
            <li>
                Jl. R.E. Martadinata No.18, Panglayungan, Kec. Cipedes, Kab.
                Tasikmalaya, Jawa Barat 46196
            </li>
            </ul>
            <p>Ciamis</p>
            <ul class="list-disc ps-5">
            <li>
                Jl. Mr. Iwa Kusuma Sumantri, Kertasari, Kec. Ciamis, Kabupaten
                Ciamis, Jawa Barat 46213
            </li>
            </ul>
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
                    </NuxtLink to="/product/men">
                    <NuxtLink>
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
</template>

<script setup>
const isHidden = ref(true);

function menu() {
    isHidden.value = !isHidden.value;
}
</script>

<style scoped>
</style>