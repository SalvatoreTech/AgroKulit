<template>
    <div class="bg-white text-white">
        <div class="white"></div>
        <!-- Sidebar -->
        <Sidebar />

        <div class="Accessories bg-white text-black paddingXY">
            <div class="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-2">
                <div class="Titl_accessories flex gap-2 items-center">
                    <NuxtLink to="/admin">
                        <img src="@/assets/icon/Arrows.svg" alt="" class="w-3">
                    </NuxtLink>
                    <p class="font-lora lg:text-[2rem] text-[1.5rem]">
                        List of Accessories ({{ accessories?.length }})
                    </p>
                </div>
                <div class="Filter flex gap-2 w-fit flex-wrap">
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
                            placeholder="Search (e.g Agro 25)" required />
                    </div>
                    <select v-model="type" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Type
                        </option>
                        <option v-for="type in types" :key="type.id" :value="type.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ type.nama }}</option>
                    </select>
                    <select v-model="gender" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border outline-none border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Gender
                        </option>
                        <option v-for="gender in genders" :key="gender.id" :value="gender.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ gender.nama }}</option>
                    </select>
                    <select v-model="colour" @change="refresh"
                        class=" p-1 text-xs text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-700">
                        <option :value="null" selected>
                            Colour
                        </option>
                        <option v-for="colour in colours" :key="colour.id" :value="colour.id"
                            class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}</option>
                    </select>
                    <NuxtLink to="/admin/accessories/addAccessories"
                        class="addtype font-lora flex gap-1 border border-black rounded-md px-1 cursor-pointer">
                        <img src="@/assets/icon/PlusRounded.svg" alt="" class="w-4">
                        <p>Accessory</p>
                    </NuxtLink>
                </div>
            </div>
            <div v-if="submittedDelete" role="alert" class="alert alert-success text-white">
                <svg xmlns="http://www.w3.org/4000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="white"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The type {{ selectedAccessory.nama }} was successfully deleted.</span>
            </div>
            <div class="Listtype font-lora">
                <div class="HeadList flex p-1 font-medium border-b border-gray-800">
                    <p class="w-5/12">Product</p>
                    <p class="w-3/12">Price</p>
                    <p class="w-3/12">Stock</p>
                    <p class="w-4/12">Colour</p>
                    <p class="w-2/12">Gender</p>
                    <span class="w-24"></span>
                </div>
                <div v-if="isFetching" class="flex justify-center items-center h-64">
                    <p class="font-lora">Load data...</p>
                </div>
                <div v-else class="mt-2">
                    <div v-for="accessory in accessories" :key="accessory.id"
                        class="accessory flex p-1 w-full items-center content-center mt-1 bg-[#EBEDEC] hover:bg-[#D6D6D6] rounded-md  lg:text-[16px] text-[12px]">
                        <div class="w-5/12 flex lg:flex-row flex-col">
                            <img :src="accessory.foto" alt="" class="lg:w-10 lg:h-10 w-8 h-8 mx-1">
                            <p class=""> {{ accessory.itemAksesoris?.nama }} {{ accessory.nama }}</p>
                        </div>
                        <p class="w-3/12">{{ rupiah(accessory.harga) }}</p>
                        <p class="w-3/12">{{ accessory.stok }}</p>
                        <p class="w-4/12">{{ accessory.warna?.nama }}</p>
                        <p class="w-2/12">{{ accessory.gender?.nama }}</p>
                        <div class="flex gap-2 w-20">
                            <NuxtLink :to="`/admin/accessories/${accessory.id}`"
                                class="btn w-5 cursor-pointer bg-[#E9E9E9] hover:bg-[#2bb371] rounded-md">
                                <img src="@/assets/icon/edit.svg" alt="Rubbish bin" class="max-w-5">
                            </NuxtLink>
                            <div class="DeletedProduct">
                                <input type="checkbox" id="deletetype" class="modal-toggle" v-model="showDeleteModal" />
                                <label for="deletetype" class="modal" @click="showDeleteModal = false">
                                    <label class="modal-box relative font-lora bg-[#ebedec]" @click.stop>
                                        <p class="font-lora text-red-500">Delete!</p>
                                        <p class="font-lora">Are you sure to delete this {{
                                            selectedAccessory.warna?.nama }}
                                            {{
                                                selectedAccessory.kategoriJaket?.nama }} {{ selectedAccessory.nama }}</p>
                                        <div class="modal-action">
                                            <label for="deletetype"
                                                class="btn bg-[#d6d6d6] text-black hover:text-white">No</label>
                                            <label for="deletetype" @click="deleteProduct(selectedAccessory.id)"
                                                class="btn btn-error ">Yes</label>
                                        </div>
                                    </label>
                                </label>
                                <button @click="toggleDelete(accessory)"
                                    class="btn w-5 cursor-pointer bg-[#E9E9E9] hover:bg-red-500 rounded-md">
                                    <img src="@/assets/icon/trash.svg" alt="Rubbish bin" class="max-w-5">
                                </button>
                            </div>
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

const searchAccessory = ref('')
const type = ref(null)
const colour = ref(null)
const gender = ref(null)

const showDeleteModal = ref(false)
const selectedAccessory = ref({})
const submittedDelete = ref(false)


const toggleDelete = (accessory) => {
    selectedAccessory.value = accessory;
    showDeleteModal.value = true;
}

const { data: accessories, isFetching, refresh } = useLazyAsyncData('accessories', async () => {
    let query = supabase.from('aksesoris').select(`*, itemAksesoris(*), warna(*), gender(*)`).order('created', { ascending: false })
    if (searchAccessory.value) query = query.ilike('nama', `%${searchAccessory.value}%`)
    if (type.value) query = query.eq('item', type.value)
    if (gender.value) query = query.eq('gender', gender.value)
    if (colour.value) query = query.eq('warna', colour.value)
    const { data, error } = await query
    if (error) throw error
    return data
})

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

const { data: genders } = useAsyncData('genders', async () => {
    const { data, error } = await supabase.from('gender').select()
    if (error) throw error
    return data
})

const { data: types } = useAsyncData('types', async () => {
    const { data, error } = await supabase.from('itemAksesoris').select()
    if (error) throw error
    return data
})

const deleteProduct = async (id) => {
    const { error } = await supabase.from('aksesoris').delete().eq('id', id)
    if (error) throw error
    else
        showDeleteModal.value = false
    refresh()
    submittedDelete.value = true
    setTimeout(() => {
        submittedDelete.value = false
    }, 3000)
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