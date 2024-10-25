<template>
  <div>
    <footer class="Footer bg-[#1C3D32] max-w-full text-white py-3">
      <div class="flex lg:flex-row flex-col justify-between paddingX items-center">
        <div class="Profile text-center leading-tight ">
          <p class="Titl_footer font-bodoni lg:text-[2rem] text-[1.5rem]">
            Agro Leather
          </p>
          <p class="Sub_footer font-lora text-[11px]">
            Free shipping in Indonesia, Malaysia and World Wide.
          </p>
          <div class="flex gap-2 justify-center">
            <NuxtLink>
              <img src="@/assets/icon/FB.svg" alt="Facebook" class="HyperLink_medsos">
            </NuxtLink>
            <NuxtLink>
              <img src="@/assets/icon/IG.svg" alt="Instagram" class="HyperLink_medsos">
            </NuxtLink>
            <NuxtLink>
              <img src="@/assets/icon/TW.svg" alt="Twitter" class="HyperLink_medsos">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-between lg:w-6/12 w-full gap-2 text-sm">
          <NuxtLink v-for="(link, i) in links" :key="i" :to="link.path">
            <p
              class="HyperLink_footer font-lora relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
              {{ link.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="CopyRight text-center font-lora">
        <p class="text-slate-100/50 text-[10px]">Salvatore © Copyright 2024</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const links = ref([
  {
    title: "Home",
    path: '/',
  },
  {
    title: "Our Story",
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

</script>

<style scoped>

</style>