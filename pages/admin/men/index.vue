<template>
    <div class="bg-white text-white">
        <div class="white"></div>
        <!-- Navbar -->
        <Sidebar />

        <div class="Men bg-white text-black paddingXY">
            <div class="flex justify-between items-center">
                <div class="Titl_Men flex gap-2 items-center">
                    <NuxtLink to="/admin/">
                        <img src="@/assets/icon/Arrows.svg" alt="" class="w-3">
                    </NuxtLink>
                    <p class="font-lora text-[2rem]">
                        List of Jackets Men ({{ jacketMen?.length }})
                    </p>
                </div>
                <div class="Filter flex gap-2 w-fit">
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchJacket" @input="refresh" type="search"
                            class="block w-xl w-[230px] p-1 ps-8 text-xs text-gray-950 border outline-none border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search (e.g Agro 25)" />
                    </div>
                    <select v-model="category" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Category
                        </option>
                        <option v-for="category in categories" :key="category.id" :value="category.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ category.nama }}</option>
                    </select>
                    <select v-model="size" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Size
                        </option>
                        <option v-for="size in sizes" :key="size.id" :value="size.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ size.nama }}</option>
                    </select>
                    <select v-model="colour" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Colour
                        </option>
                        <option v-for="colour in colours" :key="colour.id" :value="colour.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}</option>
                    </select>
                    <NuxtLink to="/admin/men/addMen"
                        class="addCategory font-lora flex gap-1 border border-black rounded-md px-1 cursor-pointer">
                        <img src="@/assets/icon/PlusRounded.svg" alt="" class="w-4">
                        <p>Jacket</p>
                    </NuxtLink>
                </div>
            </div>
            <div role="alert" class="alert alert-success text-white" v-if="submittedAdd">
                <svg xmlns="http://www.w3.org/4000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="white"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The product {{ selectedMen.nama }} was successfully added.</span>
            </div>
            <div role="alert" class="alert alert-success text-white" v-if="submittedDelete">
                <svg xmlns="http://www.w3.org/4000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="white"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The product {{ selectedMen.nama }} was successfully deleted.</span>
            </div>
            <div class="Listcategory font-lora">
                <div class="HeadList flex p-1 font-medium border-b border-gray-800">
                    <p class="lg:w-5/12">Product</p>
                    <p class="w-2/12">Price</p>
                    <p class="w-2/12">Stock</p>
                    <p class="w-2/12">Size</p>
                    <p class="w-2/12">Category</p>
                    <p class="w-2/12">Created</p>
                    <span class="w-18"></span>
                </div>
                <div v-if="isFetching" class="flex justify-center items-center h-64">
                    <p class="font-lora">Load data...</p>
                </div>
                <div v-else class="mt-2">
                    <div v-for="jacket in jacketMen" :key="jacket.id"
                        class="jacket flex p-1 w-full items-center content-center mt-1 bg-[#EBEDEC] hover:bg-[#D6D6D6] rounded-md">
                        <img :src="jacket.foto" alt="" class="w-10 mx-1">
                        <p class="lg:w-5/12">{{jacket.warna?.nama }} {{ jacket.kategoriJaket?.nama }} {{ jacket.nama }}</p>
                        <p class="w-2/12">Rp.{{ rupiah(jacket.harga) }}</p>
                        <p class="w-2/12">{{ jacket.stok }}</p>
                        <p class="w-2/12">{{ jacket.ukuranJaket?.nama }}</p>
                        <p class="w-2/12">{{ jacket.kategoriJaket?.nama }}</p>
                        <p class="w-2/12">{{ jacket.created_at.split('.')[0].split('T')[0] }}, {{
                            jacket.created_at.split('.')[0].split('T')[1] }}</p>
                        <div class="flex gap-2 w-20">
                            <NuxtLink :to="`/admin/men/${jacket.id}`"
                                class="btn w-5 cursor-pointer bg-[#E9E9E9] hover:bg-[#2bb371] rounded-md">
                                <img src="@/assets/icon/edit.svg" alt="Rubbish bin" class="max-w-5">
                            </NuxtLink>
                            <button @click="toggleDelete(jacket)"
                                class="btn w-5 cursor-pointer bg-[#E9E9E9] hover:bg-red-500 rounded-md">
                                <img src="@/assets/icon/trash.svg" alt="Rubbish bin" class="max-w-5">
                            </button>
                            <input type="checkbox" id="deleteColour" class="modal-toggle" v-model="showDeleteModal" />
                            <label for="deleteColour" class="modal" @click="showDeleteModal = false">
                                <label class="modal-box relative font-lora bg-[#ebedec]" @click.stop>
                                    <p class="font-lora text-red-500">Delete!</p>
                                    <p class="font-lora">Are you sure to delete this {{ selectedMen.warna?.nama }} {{ selectedMen.kategoriJaket?.nama }} {{ selectedMen.nama }}</p>
                                    <div class="modal-action">
                                        <label for="deleteColour"
                                            class="btn bg-[#d6d6d6] text-black hover:text-white">No</label>
                                        <label for="deleteColour" @click="deleteProduct(selectedMen.id)"
                                            class="btn btn-error ">Yes</label>
                                    </div>
                                </label>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"]
})

import Sidebar from '~/components/admin/Sidebar.vue';
const supabase = useSupabaseClient()

const searchJacket = ref('')
const category = ref(null)
const colour = ref(null)
const size = ref(null)

const showDeleteModal = ref(false)
const selectedMen = ref({})
const submittedAdd = ref(false)
const submittedDelete = ref(false)


const toggleDelete = (jacket) => {
    selectedMen.value = jacket;
    showDeleteModal.value = true;
}


const { data: jacketMen, isFetching, refresh } = useLazyAsyncData('jacketMen', async () => {
    let query = supabase.from('jaketMen').select(`*, kategoriJaket(*), warna(*), ukuranJaket(*)`).order('id')
    if (searchJacket.value) query = query.ilike('nama', `%${searchJacket.value}%`)
    if (category.value) query = query.eq('kategori', category.value)
    if (size.value) query = query.eq('ukuran', size.value)
    if (colour.value) query = query.eq('warna', colour.value)
    const { data, error } = await query
    if (error) throw error
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

const deleteProduct = async (id) => {
    console.log(id)
    const { error } = await supabase.from('jaketMen').delete().eq('id', id)
    if (error) throw error
    else
        showDeleteModal.value = false
    refresh()
    submittedDelete.value = true
    setTimeout(() => {
        submittedDelete.value = false
    }, 4000)
}
</script>

<style scoped>
.white {
    background: #ffff;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    background-position: center;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -999;
    height: 100vh;
}
</style>