<template>
  <div>
    <nav class="Navbar bg-white text-black fixed w-[100%] z-50 flex justify-between items-center paddingX font-bodoni">
      <div class="Contact">
        <NuxtLink to="/contact"
          class="flex gap-1 items-center relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <img src="@/assets/icon/PlusRounded.svg" alt="plus rounded" class="w-4" />
          <p>contact us</p>
        </NuxtLink>
      </div>
      <NuxtLink to="/">
        <img src="@/assets/img/logo.png" alt="logo" class="w-12" />
      </NuxtLink>
      <div>
        <span @click="menu"
          class="flex items-center gap-2 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <img src="@/assets/icon/hamburger.svg" alt="hamburger" />
          <p class="font-bodoni">menu</p>
        </span>
        <div id="navbar-toggle"
          class="fixed navbar-toggle w-[100%] paddingX left-0 top-0 overflow-hidden bg-white rounded-b-2xl shadow-2xl duration-700"
          :class="{ 'h-0': isHidden }" ref="hamburger">
          <div class="flex justify-between items-center">
            <img src="@/assets/img/logo.png" alt="logo" class="w-12" />
            <div class="close">
              <span @click="menu"
                class="flex items-center gap-3 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <img src="@/assets/icon/Close.svg" alt="close" class="" />
                <p class="font-bodoni ">close</p>
              </span>
            </div>
          </div>
          <div class="MenuList flex justify-between py-5">
            <ul class="font-bodoni flex flex-col gap-2">
              <li v-for="(link, i) in links" :key="i" class="stagg">
                <NuxtLink :to="link.path"
                  class=" relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
            <NuxtLink to="/login" class="flex items-end">
              <button
                class="stagg bg-[#1C3D32] text-white flex rounded-md p-1 mb-5 focus:outline-none focus:ring focus:ring-green-900">
                <img src="@/assets/icon/AdminLogin.svg" alt="iconAdmin" class="hover:" />
                <p class="font-bodoni">Admin</p>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

const links = ref([
  {
    title: "Home",
    path: '/',
  },
  {
    title: "About",
    path: '/about',
  },
  {
    title: "Men",
    path: '/men/',
  },
  {
    title: "Women",
    path: '/women/',
  },
  {
    title: "Accessories",
    path: '/accessories/',
  },
  {
    title: "Contact us",
    path: '/contact',
  }
])
const isHidden = ref(true);

function menu() {
  isHidden.value = !isHidden.value;
  gsap.from('.stagg', {
    opacity: 0,
    stagger: 0.025,
  })
}
</script>

<style scoped></style>