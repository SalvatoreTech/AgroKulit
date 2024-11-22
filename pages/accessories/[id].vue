<template>
    <div class="bg-white h-screen flex flex-col justify-between">
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="bg-white text-black pt-20 pb-3">
            <div class="paddingX">
                <div class="w-fit">
                    <NuxtLink to="/accessories" class="w-20">
                        <img src="../../assets/icon/LeftArrow.svg" alt="LeftArrow">
                    </NuxtLink>
                </div>
                <div class="flex justify-evenly">
                    <div class="rounded-box lg:w-96 border-4 border-[#ebedec] shadow-md bg-[#ebedec]" data-carousel="slide">
                        <div class="">
                            <img :src="getAccessory?.foto" class="xzoom w-full" alt="Tailwind CSS Carousel component"/>
                        </div>
                    </div>
                    <div class="ProfuctInfo font-lora max-w-lg flex flex-col justify-center gap-7">
                        <div class="Tilt leading-[15px] ps-3">
                            <p class="text-[24px] font-bold">{{ getAccessory?.warna?.nama }} {{
                                getAccessory?.itemAksesoris?.nama }} for Man</p>
                            <p class="text-[11px]">{{ getAccessory?.nama }}</p>
                        </div>
                        <div class="Price w-fit px-5">
                            <p>{{ rupiah(getAccessory?.harga) }}</p>
                        </div>
                        <div class="General">
                            <p>Colour : {{ getAccessory?.warna?.nama }}</p>
                            <p>Gender : {{ getAccessory?.gender?.nama }}</p>
                            <p>Stock : {{ getAccessory?.stok }}</p>
                            <p>{{ getAccessory?.deskription }}</p>
                        </div>
                        <div class="OrderLink w-fit font-lora ps-3">
                            <p class="text-[11px] ">Shipping, Exchanges, and Returns</p>
                            <a :href="whatsappLink"
                                class="flex py-1 px-3 gap-1 border border-black rounded-md hover:bg-[#1C3D32] hover:border-[#1C3D32] hover:text-white">
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

const phone = '6285294148997'
const message = `Saya ingin memesan produk jaket `
const whatsappLink = `https://wa.me/${phone}?text=${message}`

const { data: getAccessory, error } = useAsyncData('getAccessory', async () => {
    const { error, data } = await supabase.from('aksesoris').select(`*, itemAksesoris(*), gender(*), warna(*)`).eq('id', id).maybeSingle()
    if (error) throw error
    if (data) {
        const { data: url } = supabase.storage.from('fotoProduk').getPublicUrl(data.foto)
        return data
    }
})
</script>

<style scoped></style>