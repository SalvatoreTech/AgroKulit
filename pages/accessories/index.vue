<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="bg-white text-black">
            <figure class="relative pt-12 flex justify-center items-start">
                <img src="../../assets/img/BGAccessories.jpg" alt="bgMenProduct" class="w-full" />
                <figcaption class="absolute text-center max-w-xs pt-5">
                    <div class=" flex justify-between font-bodoni text-[16px]">
                        <p>Men</p>
                        <p>Women</p>
                    </div>
                    <p class="font-bodoni text-[38px] font-bold">Accessories</p>
                </figcaption>
            </figure>
            <div class="Filter flex justify-between paddingX mt-1">
                <div class="hyper_link">
                    <p class="font-lora text-gray-500">
                        <NuxtLink to="/"> Home </NuxtLink>
                        / Accessories
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
                        <input v-model="searchAccessory" @input="refresh" type="search"
                            class="block w-xl w-[230px] p-1 ps-8 text-xs text-gray-950 border outline-none border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search by colour" required />
                    </div>
                    <select v-model="item" @change="refresh"
                        class="block w-full p-1 mb-6 text-xs text-gray-900 border outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Item
                        </option>
                        <option v-for="item in items" :key="item.id" :value="item.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ item.nama }}</option>
                    </select>
                    <select v-model="gender" @change="refresh"
                        class="block w-full p-1 mb-6 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Gender
                        </option>
                        <option v-for="gender in genders" :key="gender.id" :value="gender.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ gender.nama }}</option>
                    </select>
                </div>
            </div>

            <div class="Product flex flex-wrap gap-5 justify-between paddingX mb-5">
                <div v-for="accessory in accessories" :key="accessory.id"
                    class="card card-compact rounded-none bg-[#E9ECEB] w-60 drop-shadow-md">
                    <NuxtLink to="/accessories/detail_accessories">
                        <figure ref="photo" class="mx-2 mt-1">
                            <img src="../../assets/img/Access.jpg" alt="Product"
                                class="hover:content-[url('../../assets/img/AccessHover.jpg')]" />
                        </figure>
                        <div class="card-body flex flex-row items-center">
                            <div class="text">
                                <p class="card-title font-lora text-[16px]">
                                    {{ accessory.warna?.nama }} {{ accessory.itemAksesoris?.nama }} {{
                                        accessory.nama }} for {{ accessory.gender.nama }}
                                </p>
                                <p class="font-lora text-[11px]">{{ accessory.harga }} IDR</p>
                            </div>
                            <div class="card-actions justify-end">
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
const searchAccessory = ref('')
const item = ref(null)
const gender = ref(null)

const { data: accessories, status, error, refresh } = useLazyAsyncData('accessories', async () => {
    let query = supabase.from('aksesoris').select(`*, itemAksesoris!inner(*), warna!inner(*), gender(*)`)
    if (searchAccessory.value) query = query.ilike('warna.nama', `%${searchAccessory.value}%`)
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


onMounted(() => { });
</script>

<style scoped></style>