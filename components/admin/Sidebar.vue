<template>
  <div>
    <nav class="Sidebar z-10 bg-white text-black shadow-2xl shadow-red-950 rounded-md fixed p-1 m-2">
      <span @click="menu"
        class="flex items-center gap-2 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">
        <img src="@/assets/icon/hamburger.svg" alt="hamburger" />
        <p class="font-bodoni">menu</p>
      </span>
      <div id="navbar-toggle"
        class="fixed h-[100vh] w-40 flex flex-col navbar-toggle left-0 top-0 overflow-hidden bg-white rounded-r-2xl shadow-2xl duration-700"
        :class="{ 'left-[-50%]': isHidden }" ref="hamburger">
        <div class="flex">
          <div class="close p-1 m-2">
            <span @click="menu"
              class="flex items-center gap-3 cursor-pointer relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">
              <img src="@/assets/icon/Close.svg" alt="close" class="" />
              <p class="font-bodoni">close</p>
            </span>
          </div>
        </div>
        <div class="flex flex-col items-center h-[100vh] gap-5 paddingY justify-between">
          <div class="flex flex-col items-center gap-10 px-5">
            <img src="@/assets/img/logo.png" alt="logo" class="w-20" />
            <ul class="NavList font-bodoni flex flex-col gap-2">
              <li v-for="(navLink , i) in navLinks" :key="i"
                class="">
                <NuxtLink :to="navLink.path ">
                  <p class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">{{ navLink.title }}</p>
                </NuxtLink>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" @click="dropdown()"
                  class="flex items-center justify-between w-full relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black text-black md:hover:bg-transparent md:border-0">
                  Products
                  <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div id="dropdownNavbar"
                  class="z-10 font-bodoni divide-y divide-black dark:bg-transparant dark:divide-black"
                  :class="{ hidden: isInvisble }">
                  <ul class="flex flex-col gap-2 pt-2"
                    aria-labelledby="dropdownLargeButton">
                    <li class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">
                      <NuxtLink to="/admin/men/">
                        Men</NuxtLink>
                    </li>
                    <li class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">
                      <NuxtLink to="/admin/women">
                        Women</NuxtLink>
                    </li>
                    <li class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hover:text-black">
                      <NuxtLink to="/admin/accessories/">
                        Accessories</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <img src="@/assets/icon/AdminLogout.svg" alt="Logout" class="w-7 cursor-pointer" @click="logout" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const navLinks = ref([
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'Dashboard',
    path: '/admin/'
  },
  {
    title: 'Categories of Jackets',
    path: '/admin/categories/'
  },
  {
    title: 'Colours',
    path: '/admin/colours/'
  },
  {
    title: 'Types of Accessories',
    path: '/admin/types/'
  },
])

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const isHidden = ref(true);
const isInvisble = ref(true);

function menu() {
  isHidden.value = !isHidden.value;
}

function dropdown() {
  isInvisble.value = !isInvisble.value;
}

const { execute: logout, status, error } = useAsyncData('logout', async () => {
  const { error } = await supabase.auth.signOut({ scope: 'local' })
  if (error) throw 'Logout gagal'
  else {
    navigateTo('/login')
  }
}, {
  immediate: false
})
</script>

<style scoped></style>