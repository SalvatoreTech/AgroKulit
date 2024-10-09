<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="bg-white text-black">
            <figure class="relative pt-12 flex justify-center items-start">
                <img src="../../assets/img/BGWomen's.jpg" alt="bgMenProduct" class="w-full" />
                <figcaption class="absolute text-center max-w-xs mt-28">
                    <p class="font-bodoni text-[38px] font-bold">Women Leather Jackets</p>
                    <div class="font-lora text-[11px]">Find your style.</div>
                </figcaption>
            </figure>
            <div class="Filter flex justify-between paddingX mt-1">
                <div class="hyper_link">
                    <p class="font-lora">
                        <NuxtLink to="/"> Home </NuxtLink>
                        / Women
                    </p>
                </div>
                <div class="flex gap-3 font-lora">
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchJacket" @input="refresh" type="search"
                            class="block w-xl w-[300px] p-1 ps-8 text-xs text-gray-950 border outline-none border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search by name or number (ex. Agro 25)" required />
                    </div>
                    <select v-model="category" @change="refresh"
                        class="block w-full p-1 mb-6 text-xs text-gray-900 border outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Category
                        </option>
                        <option v-for="category in categories" :key="category.id" :value="category.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ category.nama }}</option>
                    </select>
                    <select v-model="size" @change="refresh"
                        class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Size
                        </option>
                        <option v-for="size in sizes" :key="size.id" :value="size.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ size.nama }}</option>
                    </select>
                    <select v-model="colour" @change="refresh"
                        class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Colour
                        </option>
                        <option v-for="colour in colours" :key="colour.id" :value="colour.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}</option>
                    </select>
                </div>
            </div>
            <div class="Product flex flex-wrap gap-2 justify-between paddingX">
                <div v-for="womenJacket in womenJackets" :key="womenJacket.id"
                    class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md">
                    <NuxtLink :to="`/women/${womenJacket.id}`">
                        <figure ref="photo" class="mx-2 mt-1">
                            <img :src="womenJacket.foto" alt="Product"
                                class="h-[300px] object-contain hover:scale-110 transition-all duration-200" />
                        </figure>
                        <div class="card-body flex flex-row items-center justify-between">
                            <div class="text">
                                <p class="card-title font-lora text-[16px]">
                                    {{ womenJacket.warna?.nama }} {{ womenJacket.kategoriJaket?.nama }}
                                </p>
                                <p class="font-lora text-[11px]"> {{ womenJacket.nama }}</p>
                                <p class="font-lora text-[11px]">{{ womenJacket.harga }} IDR</p>
                            </div>
                            <div class="card-actions justify-end w-5">
                                <img src="../../assets/icon/heart-like.svg" class="" alt="heart" />
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

const supabase = useSupabaseClient()
const searchJacket = ref('')
const category = ref(null)
const size = ref(null)
const colour = ref(null)

const { data: womenJackets, status, error, refresh } = useLazyAsyncData('womenJackets', async () => {
    let query = supabase.from('jaketWomen').select(`*, kategoriJaket(*), warna(*)`)
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
    const { data, error } = await supabase.from('ukuranJaket').select()
    if (error) throw error
    return data
})

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

onMounted(() => {

});
</script>

<style scoped></style>