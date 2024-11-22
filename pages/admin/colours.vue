<template>
    <div class="bg-white text-white">
        <div class="white"></div>
        <!-- Navbar -->
        <Sidebar />

        <div class="colours bg-white text-black paddingXY">
            <div class="flex justify-between items-center">
                <div class="Titl_colour flex gap-2 items-center">
                    <NuxtLink to='/admin/'>
                        <img src="@/assets/icon/Arrows.svg" alt="" class="w-3">
                    </NuxtLink>
                    <p class="font-lora text-[2rem]">
                        List of Colours ({{ colours?.length }})
                    </p>
                </div>
                <div class="Filter flex gap-2">
                    <div class="relative">
                        <div class="absolute pt-1 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/4000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchColour" @input="refresh" type="search"
                            class="block w-xl w-[230px] p-1 ps-8 text-xs text-gray-950 border border-gray-300 rounded-lg bg-transparent dark:border-gray-600 dark:placeholder-gray-700"
                            placeholder="Search by name" required />
                    </div>
                    <div class="add">
                        <div class="addColour font-lora flex gap-1 border border-black rounded-md w-fit px-1 cursor-pointer"
                            @click="toggleAdd">
                            <img src="@/assets/icon/PlusRounded.svg" alt="">
                            Colour
                        </div>
                        <input type="checkbox" id="addColour" class="modal-toggle" v-model="showAddModal">
                        <label for="addColour" class="modal">
                            <label class="modal-box relative font-lora bg-[#ebedec]">
                                <div class="flex justify-between mb-10">
                                    <p>Add Colour</p>
                                    <label for="addColour" class="cursor-pointer">
                                        <img src="../../assets/icon/Close.svg" alt="Close Modal">
                                    </label>
                                </div>
                                <form @submit.prevent="addColour" autocomplete="off">
                                    <div class="stagg relative z-0 mb-5 group">
                                        <input v-model.trim="nama" type="text" name="floating_text"
                                            class="block py-2.5 ps-2 px-0 w-full text-sm text-black bg-transparent border rounded-md border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                            placeholder=" " required />
                                        <label for="floating_text"
                                            class="peer-focus:font-medium absolute text-sm ms-2 text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div class="stagg relative z-0 mb-5 group">
                                        <textarea v-model="keterangan" name="floating_ket"
                                            class="block py-2.5 ps-2 px-0 w-full text-sm text-black bg-transparent border rounded-md border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                            placeholder=" " />
                                        <label for="floating_ket"
                                            class="peer-focus:font-medium absolute text-sm ms-2 text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Keterangan</label>
                                    </div>
                                    <div class="modal-action">
                                        <input type="submit" class="btn btn-active" value="Add">
                                    </div>
                                </form>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
            <div role="alert" class="alert alert-success text-white" v-if="submittedAdd">
                <svg xmlns="http://www.w3.org/4000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="white"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The colour {{ selectedColour.nama }} was successfully added.</span>
            </div>
            <div role="alert" class="alert alert-success text-white" v-if="submittedDelete">
                <svg xmlns="http://www.w3.org/4000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="white"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>The colour {{ selectedColour.nama }} was successfully deleted.</span>
            </div>
            <div class="Listcolours font-lora">
                <div class="HeadList flex  font-medium border-b border-gray-800">
                    <p class="lg:w-5/12">Name</p>
                    <p class="w-7/12">
                        Description
                    </p>
                    <span class="w-5"></span>
                </div>
                <div v-if="isFetching" class="flex justify-center items-center h-64">
                    <p class="font-lora">Load data...</p>
                </div>
                <div v-else class="mt-2">
                    <div v-for="colour in colours" :key="colour.id"
                        class="colour flex w-full py-2 mt-1 bg-[#EBEDEC] hover:bg-[#D6D6D6] rounded-md px-2 items-center">
                        <p class="lg:w-5/12">{{ colour.nama }}</p>
                        <p class="w-7/12">{{ colour.keterangan }}</p>
                        <button @click="toggleDelete(colour)"
                            class="btn w-5 cursor-pointer bg-[#E9E9E9] hover:bg-red-500 rounded-md">
                            <img src="@/assets/icon/trash.svg" alt="Rubbish bin" class="max-w-5">
                        </button>
                        <input type="checkbox" id="deleteColour" class="modal-toggle" v-model="showDeleteModal" />
                        <label for="deleteColour" class="modal" @click="showDeleteModal = false">
                            <label class="modal-box relative font-lora bg-[#ebedec]" @click.stop>
                                <p class="font-lora text-red-500">Delete!</p>
                                <p class="font-lora">Are you sure to delete this {{ selectedColour.nama }}</p>
                                <div class="modal-action">
                                    <label for="deleteColour"
                                        class="btn bg-[#d6d6d6] text-black hover:text-white">No</label>
                                    <label for="deleteColour" @click="deleteColour(selectedColour.id)"
                                        class="btn btn-error ">Yes</label>
                                </div>
                            </label>
                        </label>
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

const showDeleteModal = ref(false)
const showAddModal = ref(false)
const selectedColour = ref({})
const submittedAdd = ref(false)
const submittedDelete = ref(false)

function toggleAdd() {
    showAddModal.value = true
}

const toggleDelete = (colour) => {
    selectedColour.value = colour;
    showDeleteModal.value = true;
}


const { data: colours, isFetching, refresh } = useLazyAsyncData('colours', async () => {
    let query = supabase.from('warna').select('*')
    if (searchColour.value) {
        query = query.ilike("nama", `%${searchColour.value}%`)
    }
    const { data, error } = await query
    if (error) throw error
    return data
}
)

const { execute: addColour } = useAsyncData('addColour', async () => {
    const { error } = await supabase.from('warna').insert({
        nama: nama.value,
        keterangan: keterangan.value
    })
        .select('*')
    if (error) throw error
    else {
        showAddModal.value = false
        refresh()
        submittedAdd.value = true
        nama.value = ''
        keterangan.value = ''
        setTimeout(() => {
            submittedAdd.value = false
        }, 4000)
    }
}, {
    immediate: false
})

const deleteColour = async (id) => {
    // console.log(id)
    const { error } = await supabase.from('warna').delete().eq('id', id)
    if (error) throw error
    else
        showDeleteModal.value = false
    refresh()
    submittedDelete.value = true
    setTimeout(() => {
        submittedDelete.value = false
    }, 4000)
}

onMounted (() => {
    refresh()
})
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