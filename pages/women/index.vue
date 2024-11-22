<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="bg-white text-black">
            <figure class="relative pt-12 flex justify-center items-start overflow-hidden">
                <img src="../../assets/img/BGWomen.jpg" alt="bgWomen" class="bgWomen w-full"
                    style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" />
                <figcaption class="absolute text-center max-w-xs lg:mt-28 mt-5 overflow-hidden">
                    <p class="font-bodoni lg:text-[38px] text-[1.2rem] Tilt_women font-bold"
                        style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)">Women Leather Jackets</p>
                    <div class="font-lora text-[11px] Sub_women">Find your style.</div>
                </figcaption>
            </figure>
            <div class="Filter flex justify-between paddingX mt-1 lg:flex-row flex-col">
                <div class="flex justify-between mb-2 w-full me-2">
                    <div class="hyper_link">
                        <p class="font-lora">
                            <NuxtLink to="/"> Home </NuxtLink>
                            / Men
                        </p>
                    </div>
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" @click="showInput" >
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchJacket" @input="refresh" type="search"
                            class="block search lg:w-[300px] w-[42px] p-1 ps-8 text-xs text-gray-950 border outline-none border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search by name or number (ex. Agro 25)" :class="{ 'w-[300px]' : isShow }" required />
                    </div>
                </div>
                <div class="flex gap-3 font-lora lg:flex-nowrap mb-3 flex-wrap">
                    <select v-model="category" @change="refresh"
                        class="block w-full p-1 text-xs text-gray-900 border cursor-pointer outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Category
                        </option>
                        <option v-for="category in categories" :key="category.id" :value="category.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ category.nama }}</option>
                    </select>
                    <div class="flex w-full gap-3">
                        <select v-model="size" @change="refresh"
                            class="block w-full p-1 text-xs text-gray-900 border cursor-pointer border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                            <option :value="null" selected>
                                Size
                            </option>
                            <option v-for="size in sizes" :key="size.id" :value="size.nama"
                                class="text-black hover:bg-slate-600 hover:text-white">{{ size.nama }}</option>
                        </select>
                        <select v-model="colour" @change="refresh"
                            class="block w-full p-1 text-xs text-gray-900 border cursor-pointer border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                            <option :value="null" selected>
                                Colour
                            </option>
                            <option v-for="colour in colours" :key="colour.id" :value="colour.nama"
                                class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="Product flex flex-wrap gap-5 justify-between paddingX mb-5">
                <div v-if="womenJackets == 0" class="No_product text-medium font-lora">Sorry, Product is not found.</div>
                <div v-else v-for="womenJacket in womenJackets" :key="womenJacket.id"
                    class="card card-compact rounded-none bg-[#E9ECEB] lg:w-60 w-40 drop-shadow-md">
                    <NuxtLink :to="`/women/${womenJacket.id}`">
                        <figure ref="photo" class="mx-2 mt-1">
                            <img :src="womenJacket.foto" alt="Product"
                                class="lg:h-[300px] h-[150px] object-contain hover:scale-110 transition-all duration-200" />
                        </figure>
                        <div class="card-body flex flex-row items-center justify-between">
                            <div class="text">
                                <div class="flex justify-between w-full">
                                    <p class="card-title font-lora text-[16px] w-40">
                                        {{ womenJacket.warna?.nama }} {{ womenJacket.kategoriJaket?.nama }} for Man
                                    </p>
                                    <p class="font-lora text-[11px]">{{ womenJacket.nama }}</p>
                                </div>
                                <p class="font-lora text-[16px]">{{ rupiah(womenJacket.harga) }}</p>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis'
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger)

const supabase = useSupabaseClient()
const searchJacket = ref('')
const category = ref(null)
const size = ref(null)
const colour = ref(null)
const isShow = ref(false)

const { data: womenJackets, status, error, refresh } = useLazyAsyncData('womenJackets', async () => {
    let query = supabase.from('jaketWomen').select(`*, kategoriJaket(*), warna(*)`).order('id')
    if (searchJacket.value) query = query.ilike('nama', `%${searchJacket.value}%`)
    if (category.value) query = query.eq('kategori', category.value)
    if (size.value) query = query.eq('ukuran', size.value)
    if (colour.value) query = query.eq('warna', colour.value)

    const { data, error } = await query
    if (error) throw error
    if (data) {
        womenJackets.value = data;
        data.forEach(jacket => {
            const { data } = supabase.storage.from('fotoProduk').getPublicUrl(jacket.foto)
        })
    }
    return data
})

const { data: categories } = useAsyncData('kategoriJaket', async () => {
    const { data, error } = await supabase.from('kategoriJaket').select()
    if (error) throw error
    return data
})

const { data: sizes } = useAsyncData('sizes', async () => {
    const { data, error } = await supabase.from('ukuranJaket').select().range(0, 4)
    if (error) throw error
    return data
})

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

function showInput() {
    isShow.value = !isShow.value
    gsap.to('.search', {
        ease: 'power4.inOut',
        duration: 1,
    })
}

onMounted(() => {
    const tl = gsap.timeline()
    const text = new SplitType('.Tilt_women')
    const st = gsap.timeline({
        scrollTrigger: {
            start: '10% center',
            end: '70% center',
        }
    })

    tl.from('.bgWomen', {
        scale: 1.2,
        duration: 1.5,
        ease: 'power4.inOut'
    }).from('.char', {
        y: 150,
        stagger: 0.08,
        ease: 'power4.inOut'
    }).from('.Sub_women', {
        opacity: 0,
        scale: 0.8,
        ease: 'power4.inOut',
        duration: 1
    }, 2)

    st.from('.card', {
        opacity: 0,
        stagger: 0.1
    })
    //SmoothScrollLenis
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
});
</script>

<style scoped></style>