<template>
  <div class="bg-white h-screen flex flex-col justify-between">
      <!-- Navbar -->
      <Header />

      <!-- Content -->
      <div class="bg-white text-black pt-20 pb-3">
          <div class="paddingX">
              <NuxtLink to="/" class="w-20">
                  <img src="@/assets/icon/LeftArrow.svg" alt="LeftArrow">
              </NuxtLink>
              <div class="flex justify-evenly">
                  <div class="rounded-box lg:w-96 border-4 border-[#ebedec] shadow-md bg-[#ebedec]"
                      data-carousel="slide">
                      <div class="">
                          <img :src="getJacketMen?.foto" class="xzoom w-full" alt="Tailwind CSS Carousel component"
                              @mouseover="mouseEnterPhoto" @mouseout="mouseLeavePhoto" />
                      </div>
                  </div>
                  <div class="ProfuctInfo font-lora max-w-lg flex flex-col justify-evenly">
                      <div class="Tilt leading-[15px] ps-3">
                          <p class="text-[24px] font-bold">{{ getJacketMen?.warna?.nama }} {{
                              getJacketMen?.kategoriJaket?.nama }} for Man</p>
                          <p class="text-[11px]">{{ getJacketMen?.nama }}</p>
                      </div>
                      <div class="Price w-fit px-5">
                          <p>{{ rupiah(getJacketMen?.harga) }}</p>
                      </div>
                      <div class="General">
                          <p>Colour : {{ getJacketMen?.warna?.nama }}</p>
                          <p>Size : {{ getJacketMen?.ukuranJaket?.nama }}</p>
                          <p>Stock : {{ getJacketMen?.stok}}</p>
                          <p>{{ getJacketMen?.deskription }}</p>
                      </div>
                      <div class="OrderLink w-fit font-lora ps-3">
                          <p class="text-[11px] ">Shipping, Exchanges, and Returns</p>
                          <a :href="whatsappLink"
                              target="_blank" rel="noopener noreferrer"
                              class="flex py-1 px-3 gap-1 border border-black rounded-md hover:bg-[#1C3D32] hover:text-white">
                              <p>Order now via WhatsApp</p>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Footer -->
      </div>
      <Footer />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
const supabase = useSupabaseClient()

const { id } = useRoute().params

const { data: getJacketMen } = useAsyncData('getJacketMen', async () => {
  const { error, data } = await supabase.from('jaketMen').select(`*, kategoriJaket(*), ukuranJaket(*), warna(*)`).eq('id', id).maybeSingle()
  if (error) throw error
  if (data) {
      const { data: url } = supabase.storage.from('fotoProduk').getPublicUrl(data.foto)
      return data
  }
})

const phone = '6285294148997'
const message = `Saya ingin memesan produk jaket ${getJacketMen.nama}, warna `
const whatsappLink = `https://wa.me/${phone}?text=${message}`

function mouseEnterPhoto() {
  gsap.to(".xzoom", {
      scale: 1.15,
      duration: 0.3,
      ease: 'power2.inOut',
  })
}
function mouseLeavePhoto() {
  gsap.to(".xzoom", {
      scale: 1,
      duration: 0.3,
      ease: 'power2.inOut',
  })
}
</script>

<style scoped></style>