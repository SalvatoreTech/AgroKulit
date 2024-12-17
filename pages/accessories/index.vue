<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="bg-white text-black">
            <figure class="relative pt-12 flex justify-center items-start">
                <img src="../../assets/img/BGAccessories.jpg" alt="bgMenProduct" class="w-full" />
                <figcaption class="absolute text-center max-w-xs lg:pt-5 pt-1">
                    <div class=" flex lg:justify-between justify-center lg:gap-0 gap-5 font-bodoni lg:text-[16px] text-[12px]">
                        <p>Men</p>
                        <p>Women</p>
                    </div>
                    <p class="font-bodoni lg:text-[38px] text-[21px] mix-blend-exclusion font-bold text-white">Accessories</p>
                </figcaption>
            </figure>
            <div class="Filter flex justify-between paddingX mt-1 lg:flex-row flex-col">
                <div class="flex justify-between mb-2 w-full me-2">
                    <div class="hyper_link">
                        <p class="font-lora">
                            <NuxtLink to="/"> Home </NuxtLink>
                            / Accessories
                        </p>
                    </div>
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchAccessory" @input="refresh" type="search"
                            class="block search lg:w-[300px] w-[245px] p-1 ps-8 text-xs text-gray-950 border outline-none border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search by name or number (ex. Agro 25)" />
                    </div>
                </div>
                <div class="flex gap-3 font-lora lg:flex-nowrap mb-3 flex-wrap">
                    <select v-model="item" @change="refresh"
                        class="block w-full p-1 text-xs text-gray-900 border cursor-pointer outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Item
                        </option>
                        <option v-for="item in items" :key="item.id" :value="item.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ item.nama }}</option>
                    </select>
                    <div class="flex w-full gap-3">
                        <select v-model="gender" @change="refresh"
                            class="block w-full p-1 text-xs text-gray-900 border cursor-pointer border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                            <option :value="null" selected>
                                Gender
                            </option>
                            <option v-for="gender in genders" :key="gender.id" :value="gender.nama"
                                class="text-black hover:bg-slate-600 hover:text-white">{{ gender.nama }}</option>
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
                <div v-if="accessories == 0" class="No_product text-medium font-lora h-[50vh]">Sorry, Product {{
                    searchAccessory }} is not found.</div>
                <div v-else v-for="accessory in accessories" :key="accessory.id"
                    class="card card-compact rounded-none bg-[#E9ECEB] lg:w-60 w-40 drop-shadow-md cursor-pointer">
                    <NuxtLink :to="`/accessories/${accessory.id}`">
                        <figure ref="photo" class=" mx-2 mt-1">
                            <img :src="accessory.foto" alt="Product"
                                class="lg:h-[300px] h-[150px] object-contain hover:scale-110 transition-all duration-200" />
                        </figure>
                        <div class="card-body flex flex-row items-center justify-between">
                            <div class="text">
                                <div class="flex justify-between w-full">
                                    <p class="card-title font-lora text-[16px] lg:w-40">
                                        {{ accessory.warna?.nama }} {{ accessory.itemAksesoris?.nama }} for {{ accessory.gender?.nama }}
                                    </p>
                                    <p class="font-lora text-[11px]">{{ accessory.nama }}</p>
                                </div>
                                <p class="font-lora text-[16px]">{{ rupiah(accessory.harga) }}</p>
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
const searchAccessory = ref('')
const item = ref(null)
const gender = ref(null)
const colour = ref(null)

const { data: accessories, refresh } = useLazyAsyncData('accessories', async () => {
    let query = supabase.from('aksesoris').select(`*, itemAksesoris(*), warna(*), gender(*)`)
    if (searchAccessory.value) query = query.ilike('nama', `%${searchAccessory.value}%`)
    if (item.value) query = query.eq('item', item.value)
    if (gender.value) query = query.eq('gender', gender.value)

    const { data, error } = await query
    if (error) throw error
    return data
})

const { data: items } = useAsyncData('kategoriJaket', async () => {
    const { data, error } = await supabase.from('itemAksesoris').select()
    if (error) throw error
    return data
})

const { data: genders } = useAsyncData('genders', async () => {
    const { data, error } = await supabase.from('gender').select()
    if (error) throw error
    return data
})

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

onMounted(() => { });
</script>

<style scoped></style>