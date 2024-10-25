<template>
    <div class="bg-white text-black pb-10">

        <!-- <Head>
            <Title> {{ product?.warna?.nama }} {{ product?.kategoriJaket?.nama }} {{ product?.nama }}</Title>
        </Head> -->
        <div class="Manage_container paddingXY">
            <div class="Titl font-lora flex justify-between">
                <p class="text-lg font-medium">Manage Product</p>
                <div class="flex gap-3">
                    <NuxtLink to="/admin/women/"
                        class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                        <img src="@/assets/icon/Close.svg" alt="">
                        <p>Cancel</p>
                    </NuxtLink>
                    <!-- <button
                        class="delete flex items-center gap-1 p-1 bg-red-500 hover:bg-red-700 rounded-md outline-none">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                                stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="text-white">Delete</p>
                    </button> -->
                    <button class="save flex items-center p-1 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">
                        <p class="text-white">✓ Save</p>
                    </button>
                    <p v-if="isLoading">Updating...</p>
                </div>
            </div>
            <div class="Product flex">
                <div class="General_info font-lora">
                    <form @submit.prevent="updateProduct" class="flex gap-5">
                        <div class="bg- rounded-md outline-none p-3 bg-[#ebedec] w-[50%]">
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input :value="product.nama" @change="(e) => nama = e.target.value" name="name"
                                    type="text" class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Name">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea :value="product.keterangan" @change="(e) => keterangan = e.target.value"
                                    name="description"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Description"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative flex flex-col">
                                    <label for="size">Size</label>
                                    <div class="size-selection flex flex-wrap justify-center gap-5">
                                        <div v-for="size in sizes" :key="size.id">
                                            <input :value="product.ukuran" @change="(e) => ukuran = e.target.value"
                                                type="radio" id="size" name="size">
                                            <label for="size"
                                                class="size-label cursor-pointer inline-block py-2 px-4 border border-gray-300 bg-white rounded">{{
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
                                            <label for="gender" class="">{{ gender.nama }}</label>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="relative w-2/5">
                                    <label for="colour">Colour</label>
                                    <select :value="product.warna" @change="(e) => warna = e.target.value"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>
                                            {{ product?.warna?.nama }}
                                        </option>
                                        <option v-for="colour in colours" :key="colour.id" :value="colour.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ colour.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative w-2/5">
                                    <label for="category">Category</label>
                                    <select :value="product.kategori" @change="(e) => kategori = e.target.value"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>
                                            {{ product?.kategoriJaket?.nama }}
                                        </option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ category.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="price">Price</label>
                                    <input :value="product.harga" @change="(e) => harga = e.target.value" name="price"
                                        type="number"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Price">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input :value="product.stok" @change="(e) => stok = e.target.value" name="stock"
                                        type="text" class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Stock">
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center bg- rounded-md outline-none p-3 bg-[#ebedec] w-[50%]">
                            <p class="text-xl font-bold mb-4">Upload Photos</p>
                            <img :src="product.foto" alt="">
                            <input type="file" accept="image/*" class="form-control" id="cover">
                            <!-- <div v-if="uploadedPhoto">
                                <img :src="uploadedPhoto" class="w-full h-full object-cover">
                            </div> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const route = useRoute()
const productId = route.params.id
const product = ref({
    nama: '',
    harga: '',
    warna: null,
    ukuran: null,
    stok: '',
    kategori: null,
    keterangan: '',
    foto: null,
})
const isLoading = ref(false)

async function getProduct() {
    const { data, error } = await supabase.from('jaketWomen').select().eq('id', productId).single()
    if (data) product.value = data
}

const { data: sizes } = useAsyncData('sizes', async () => {
    const { data, error } = await supabase.from('ukuranJaket').select().range(0, 4)
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
const { data: categories } = useAsyncData('categories', async () => {
    const { data, error } = await supabase.from('kategoriJaket').select()
    if (error) throw error
    return data
})


async function updateProduct() {
    isLoading.value = true
    const { data, error } = await supabase.from('jaketWomen').update({
        nama: product.value.nama,
        harga: product.value.harga,
        warna: product.value.warna,
        ukuran: product.value.ukuran,
        stok: product.value.stok,
        kategori: product.value.kategori,
        keterangan: product.value.keterangan,
        // foto: null,
    })
    if (error) throw error
    else {
        isLoading.value = false
        navigateTo('/admin/women/')
    }
}

// const imageProduct = ref()

// async function productPicked(e) => {
//     const file = e.targer.files[0]
//     image"Product.value" = file
//     const {data, error} = await supabase.from('jaketWomen').select('nama').eq('id', product.value.jaketWomen.id).maybeSingle()
//     if (error) throw error
//     product.value.foto = `${data.nama.replace(' ', '_').toLowerCase()}/${file.name}`
// }

// const { execute: editProduct } = useAsyncData('editProduct', async () => {
//     if(image"Product.value") {
//         let url = product.value.fotoUrl.publicUrl
//         if (product.value.foto == url.substr(url.indexOf('fotoProduk'))) {
//             const {error} = await supabase.storage.from("fotoProduk").update(`cover`)
//         }
//     }
//     const { error } = await supabase.from("jaketWomen").update({
//         name: product.value.nama,
//         price: product.value.harga,
//         colour: product.value.warna?.nama,
//         size: product.value.ukuranJaket?.nama,
//         stock: product.value.stok,
//         category: product.value.kategoriJaket?.nama,
//         description: product.value.keterangan,
//         foto : product.value.foto
//     }).eq('id', id)
//     if (error) throw error
//     else navigateTo('/admin/women/')
// }, {
//     immediate: false
// })

onMounted(() => {
    getProduct()
})
</script>

<style scoped></style>