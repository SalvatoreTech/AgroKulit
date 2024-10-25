<template>
    <div class="bg-white text-black pb-10">

        <!-- <Head>
            <Title> {{ product?.warna?.nama }} {{ product?.kategoriJaket?.nama }} {{ product?.nama }}</Title>
        </Head> -->
        <div class="Manage_container paddingXY">
            <div class="Titl font-lora flex justify-between">
                <p class="text-lg font-medium">Manage Product</p>
                <p v-if="isLoading">Updating...</p>
            </div>
            <div class="Product flex">
                <div class="General_info font-lora">
                    <form @submit.prevent="updateProduct" class="flex gap-5">
                        <div class="flex gap-3">
                            <NuxtLink to="/admin/men/"
                                class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                                <img src="@/assets/icon/Close.svg" alt="">
                                <p>Cancel</p>
                            </NuxtLink>
                            <button
                                class="save flex items-center p-1 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">
                                <p class="text-white">✓ Save</p>
                            </button>
                        </div>
                        <div class="bg- rounded-md outline-none p-3 bg-[#ebedec] w-[50%]">
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input v-model="product.nama" name="name" type="text"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Name">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea v-model="product.keterangan" name="description"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Description"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative flex flex-col">
                                    <label for="size">Size</label>
                                    <div class="size-selection flex flex-wrap justify-center gap-5">
                                        <div v-for="size in sizes" :key="size.id">
                                            <input v-model="product.ukuran" type="radio" id="size" name="size">
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
                                    <select v-model="product.warna"
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
                                    <select v-model="product.kategori"
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
                                    <input v-model="product.harga" name="price" type="number"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Price">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input v-model="product.stok" name="stock" type="text"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
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
    const { data, error } = await supabase.from('jaketMen').select().eq('id', productId).single()
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
    const { error } = await supabase.from('jaketMen').update(product.value).eq('id', productId)
    if (error) throw error
    isLoading.value = false
    navigateTo('/admin/men/')
}

// const imageProduct = ref()

// async function productPicked(e) => {
//     const file = e.targer.files[0]
//     image"Product.value" = file
//     const {data, error} = await supabase.from('jaketMen').select('nama').eq('id', product.value.jaketMen.id).maybeSingle()
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
//     const { error } = await supabase.from("jaketMen").update({
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