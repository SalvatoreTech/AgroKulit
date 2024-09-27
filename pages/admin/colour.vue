<template>
    <div class="bg-white text-white">
        <div class="white"></div>
        <!-- Navbar -->
        <Sidebar />

        <div class="Colours bg-white text-black paddingXY">
            <div class="flex justify-between items-center">
                <div class="Titl_colour flex gap-2">
                    <img src="@/assets/icon/Arrows.svg" alt="" class="w-3">
                    <p class="font-lora text-[2rem]">
                        List of Colours ({{ colours?.length }})
                    </p>
                </div>
                <div class="Filter flex gap-2">
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchColour" @input="refresh" type="search"
                            class="block w-xl w-[230px] p-1 ps-8 text-xs text-gray-950 border border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search for an item and colour" required />
                    </div>
                    <div class="add">
                        <div class="AddColour font-lora flex gap-1 border border-black rounded-md w-fit px-1 cursor-pointer"
                            @click="toggleModal">
                            <img src="@/assets/icon/PlusRounded.svg" alt="">
                            Add Colour
                        </div>
                        <div class="absolute bg-[#EBEDEC] p-5 lg:left-[40%] rounded-md shadow-lg"
                            :class="{ 'scale-0': isOpen }">
                            <div class="Titl flex justify-between">
                                <p class="text-lg font-bold">Add Colour</p>
                                <img src="@/assets/icon/Close.svg" alt="Close Modal" @click="toggleModal"
                                    class="cursor-pointer w-5">
                            </div>
                            <div class="modal-action">
                                <form @submit.prevent="addColour" class="flex gap-3 flex-col font-lora">
                                    <div class="stagg relative z-0 mb-5 group w-[400px]">
                                        <input v-model.trim="nama" type="text" name="floating_text"
                                            class="block py-2.5 ps-2 px-0 w-full text-sm text-black bg-transparent border rounded-md border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                            placeholder=" " required />
                                        <label for="floating_text"
                                            class="peer-focus:font-medium absolute text-sm ms-2 text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div class="stagg relative z-0 mb-5 group w-[400px]">
                                        <textarea v-model="keterangan" name="floating_ket"
                                            class="block py-2.5 ps-2 px-0 w-full text-sm text-black bg-transparent border rounded-md border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                            placeholder=" " />
                                        <label for="floating_ket"
                                            class="peer-focus:font-medium absolute text-sm ms-2 text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Keterangan</label>
                                    </div>
                                    <input type="submit" value="Add"
                                        class="bg-transparent border border-black w-fit px-5 rounded-md cursor-pointer hover:bg-[#D6D6D6]">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ListColours font-lora">
                <div class="HeadList flex  font-medium border-b border-gray-800">
                    <p class="lg:w-5/12">Name</p>
                    <p class="w-7/12">
                        Description
                    </p>
                    <span class="w-5"></span>
                </div>
                <div class="mt-2">
                    <div v-for="colour in colours" :key="colour.id"
                        class="Colour flex w-full py-2 mt-1 bg-[#EBEDEC] hover:bg-[#D6D6D6] rounded-md">
                        <p class="lg:w-5/12">{{ colour.nama }}</p>
                        <p class="w-7/12">{{ colour.keterangan }}</p>
                        <button class="btnw-5 cursor-pointer bg-[#E9E9E9] hover:bg-red-500 rounded-md"
                            @click="deleteColour(colour.id)">
                            <img src="@/assets/icon/trash.svg" alt="Rubbish bin" class="max-w-5">
                        </button>

                        <!-- <div class="absolute bg-[#EBEDEC] p-5 lg:left-[40%]" :class="{ 'scale-0': isOpen }">
                            <h3 class="text-lg font-bold">Delete!</h3>
                            <p class="py-4">Are you sure to delete this product?</p>
                            <div class="modal-action">
                                <form class="flex gap-3">
                                    <button @click="openModal" class="btn">No</button>
                                    <button class="btn bg-red-500">Yes</button>
                                </form>
                            </div>
                        </div> -->
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

const nama = ref('')
const keterangan = ref('')
const searchColour = ref('')

const isOpen = ref(true)

function toggleModal() {
    isOpen.value = !isOpen.value;
}

const { data: colours, refresh } = useAsyncData('colours', async () => {
    let query = supabase.from('warna').select('*')
    if (searchColour.value) {
        query = query.ilike("nama", `%${searchColour.value}%`)
    }
    const { data, error } = await query
    if (error) throw error
    return data
})

const { execute: addColour } = useAsyncData('addColour', async () => {
    const { error } = await supabase.from('warna').insert({
        nama: nama.value,
        keterangan: keterangan.value
    })
        .select('*')
    if (error) throw error
    else {
        toggleModal()
        refresh()
    }
}, {
    immediate: false
})

const deleteColour = async (id) => {
    console.log(id)
    const { error } = await supabase.from('warna').delete().eq('id', id)
    if (error) throw error
    else refresh()
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