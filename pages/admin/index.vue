<template>
    <div class="bg-white text-black">
        <nav
            class="Sidebar bg-white shadow-2xl shadow-red-950 rounded-md fixed p-1 m-2">
            <span @click="menu"
                class="flex items-center gap-2 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <img src="../../assets/icon/hamburger.svg" alt="hamburger" />
                <p class="font-bodoni">menu</p>
            </span>
            <div id="navbar-toggle"
                class="fixed h-[100vh] w-40 flex flex-col navbar-toggle left-0 top-0 overflow-hidden bg-white rounded-r-2xl shadow-2xl duration-700"
                :class="{ 'left-[-50%]' : isHidden }" ref="hamburger">
                <div class="flex">
                    <div class="close p-1 m-2">
                        <span @click="menu"
                            class="flex items-center gap-3 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                            <img src="../../assets/icon/Close.svg" alt="close" class="" />
                            <p class="font-bodoni ">close</p>
                        </span>
                    </div>
                </div>
                <div class="flex flex-col items-center h-[100vh] gap-5 paddingY justify-between">
                    <div class="flex flex-col items-center">
                        <img src="../../assets/img/logo.png" alt="logo" class="w-20">
                        <ul class="NavList font-bodoni flex flex-col gap-2">
                            <NuxtLink>
                                <li>
                                    <p>Dashboard</p>
                                </li>
                            </NuxtLink>
                            <NuxtLink>
                                <li>
                                    <p>Colour</p>
                                </li>
                            </NuxtLink>
                            <NuxtLink>
                                <li>
                                    <p>Category</p>
                                </li>
                            </NuxtLink>
                            <li>
                                <select name="product"
                                    class="block w-28 mb-6 text-gray-900 bg-transparent dark:bg-transparent">
                                    <option class="hover:bg-slate-600 hover:text-white" value="" selected disabled>
                                        <NuxtLink>
                                            Product
                                        </NuxtLink>
                                    </option>
                                    <option class="hover:bg-slate-600 hover:text-white" value="men">
                                        <NuxtLink>
                                            Men
                                        </NuxtLink>
                                    </option>
                                    <option class="hover:bg-slate-600 hover:text-white" value="women">
                                        <NuxtLink>
                                            Women
                                        </NuxtLink>
                                    </option>
                                    <option class="hover:bg-slate-600 hover:text-white" value="accessories">
                                        <NuxtLink>
                                            Accessories
                                        </NuxtLink>
                                    </option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <img src="../../assets/icon/AdminLogout.svg" alt="Logout" class="w-7">
                </div>
            </div>
        </nav>

        <div class="Container_dashboard paddingX">
            <p class="font-bodoni text-[2.5rem]">
                Dashboard
            </p>
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