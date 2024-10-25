<template>
    <div class="bg-white text-black">
        <div class="AddProduct paddingXY h-screen">
            <p class="font-lora text-3xl font-medium">Add Jacket</p>
            <p v-if="isLoading = true">Uploading...</p>
            <div class="Product">
                <form @submit.prevent="addJacket" autocomplete="off">
                    <div class="flex justify-end gap-3">
                        <NuxtLink to="/admin/women/"
                            class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                            <img src="@/assets/icon/Close.svg" alt="">
                            <p>Cancel</p>
                        </NuxtLink>
                        <button type="submit"
                            class="save text-white flex items-center p-1 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none"><svg
                                class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            Save</button>
                    </div>
                    <div class="flex justify-between gap-10">
                        <div class="General_info font-lora bg-[#ebedec] rounded-md outline-none p-3 w-[50%]">
                            <p class="font-medium text-xl">General Information</p>
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input v-model.trim="form.nama" name="name" type="text"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Name">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea v-model="form.keterangan" name="description"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Description"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative flex flex-col">
                                    <label for="size">Size</label>
                                    <div class="size-selection flex flex-wrap justify-center gap-5">
                                        <div v-for="size in sizes" :key="size.id">
                                            <input v-model="form.ukuran" type="radio" id="size" name="size"
                                                :value="size.id">
                                            <label for="size" class="ps-1">{{
                                                size.nama }}</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="relative flex flex-col">
                                    <label for="size">Size</label>
                                    <div class="gender-selection flex flex-wrap h-10 items-center content-center gap-5">
                                        <div v-for="gender in genders" :key="gender.id">
                                            <input v-model="form.gender" type="radio" id="gender" name="gender"
                                                :value="gender.id" class="peer cursor-pointer">
                                            <label for="gender" class="ps-1">{{ gender.nama }}</label>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="relative w-2/5">
                                    <label for="colour">Colour</label>
                                    <select v-model="form.warna"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>
                                            Colour
                                        </option>
                                        <option v-for="colour in colours" :key="colour.id" :value="colour.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative w-2/5">
                                    <label for="category">Category</label>
                                    <select v-model="form.kategori"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>
                                            Category
                                        </option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ category.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="price">Price</label>
                                    <input v-model.trim="form.harga" name="price" type="text"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Price">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input v-model.trim="form.stok" name="stock" type="text"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Stock">
                                </div>
                            </div>
                        </div>
                        <div class="Photos bg-[#ebedec] w-[50%] rounded-md p-3">
                            <label for="photo" class="labelImage form-label text-xl font-lora">Add Product </label>
                            <input type="file" accept="image/*" class="form-control" id="uploadImage"
                                @change="(e) => files = e.target.files" name="photo" required>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"]
})
const supabase = useSupabaseClient()
const files = ref()
const url_img = 'https://hzidiiekhnkimhrxbokx.supabase.co/storage/v1/object/public/fotoProduk/jaketWomen/'

const form = ref({
    nama: '',
    keterangan: '',
    ukuran: '',
    warna: null,
    kategori: null,
    harga: '',
    stok: '',
    foto: null
})

const isLoading = ref(false);


const { data: sizes } = useAsyncData('sizes', async () => {
    const { data, error } = await supabase.from('ukuranJaket').select().range(0, 4)
    if (error) throw error
    return data
})

// const { data: genders } = useAsyncData('genders', async () => {
//     const { data, error } = await supabase.from('gender').select()
//     if (error) throw error
//     return data
// })

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

const { data: categories } = useAsyncData('categorires', async () => {
    const { data, error } = await supabase.from('kategoriJaket').select()
    if (error) throw error
    return data
})


async function addJacket() {
    isLoading.value = true;

    let file = files.value[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `jaketWomen/${fileName}`;

    const { data, error } = await supabase.storage
        .from('fotoProduk')
        .upload(filePath, file);
    if (data) {
        const { data, error } = await supabase
            .from('jaketWomen').insert([{
                nama: form.value.nama,
                keterangan: form.value.keterangan,
                ukuran: form.value.ukuran,
                warna: form.value.warna,
                kategori: form.value.kategori,
                harga: form.value.harga,
                stok: form.value.stok,
                foto: url_img + fileName
            }]);
        if (error) throw error
        if (data) {
            console.log("success upload")
        }
    }
    if (error) throw error
    else {
        isLoading.value = false
        navigateTo('/admin/women/')
    }
}

</script>

<style scoped>
/* .size-selection input[name="size"] {
    @apply hidden;
}

.size-selection input[name="size"]:checked+.size-label {
    @apply bg-[#bbbbbb] text-black;
} */
</style>