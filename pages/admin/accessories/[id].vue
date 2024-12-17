<template>
    <div class="bg-white text-black">
        <div class="EditProduct paddingXY lg:h-screen">
            <p class="font-lora text-3xl font-medium">Edit Accessories</p>
            <div v-if="isLoading" class="flex">
                <p>Loading</p><svg class="w-5 pt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <circle fill="#000" stroke="#000" stroke-width="2" r="15" cx="40" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4">
                        </animate>
                    </circle>
                    <circle fill="#000" stroke="#000" stroke-width="2" r="15" cx="100" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2">
                        </animate>
                    </circle>
                    <circle fill="#000" stroke="#000" stroke-width="2" r="15" cx="160" cy="100">
                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0">
                        </animate>
                    </circle>
                </svg>
            </div>
            <div v-if="status == 'error'">{{ error }}</div>
            <div class="Product">
                <form @submit.prevent="editProduct" autocomplete="off" class="flex flex-col gap-3">
                    <div class="flex justify-end gap-3">
                        <NuxtLink to="/admin/accessories"
                            class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                            <img src="@/assets/icon/Close.svg" alt="">
                            <p>Cancel</p>
                        </NuxtLink>
                        <button type="submit"
                            class="save text-white flex items-center py-1 px-3 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">✓
                            Add</button>
                    </div>
                    <div class="flex justify-between lg:gap-10 gap-3 lg:flex-row flex-col">
                        <div class="General_info font-lora bg-[#ebedec] rounded-md outline-none p-3 lg:w-[50%]">
                            <p class="font-medium text-xl">General Information</p>
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input v-model="product.nama" name="name" type="text"
                                    class="bg-white placeholder:text-gray-600 rounded-md p-1 outline-none"
                                    placeholder="'Agro-25'">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea v-model="product.keterangan" name="description"
                                    class="bg-white placeholder:text-gray-600 rounded-md p-1 outline-none"
                                    placeholder="'Type here to describe the product'"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative w-2/5">
                                    <label for="colour">Gender</label>
                                    <select v-model="product.gender"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>Gender</option>
                                        <option v-for="gender in gender" :key="gender.id" :value="gender.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ gender.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative w-2/5">
                                    <label for="colour">Colour</label>
                                    <select v-model="product.warna"
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
                                    <label for="category">Type</label>
                                    <select v-model="product.item"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected>
                                            Type
                                        </option>
                                        <option v-for="type in type" :key="type.id" :value="type.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ type.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="price">Price {{ rupiah(product.harga) }}</label>
                                    <input v-model.trim="product.harga" name="price" type="number" step="0.001"
                                        class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                        placeholder="0">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input v-model.trim="product.stok" name="stock" type="number"
                                        class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                        placeholder="0">
                                </div>
                            </div>
                        </div>
                        <div class="Photos bg-[#ebedec] lg:w-[50%] rounded-md p-3">
                            <p class="labelImage font-medium text-xl font-lora">Photo</p>
                            <p class="text-gray-500 text-[12px]">.png /only</p>
                            <div class="flex flex-col items-center justify-center">
                                <div class="h-[250px] w-[250px] border-2">
                                    <img :src="newImage || product.foto" alt="imageProduct" class="object-fit">
                                </div>
                                <input type="file" accept="image/png" class="form-control" id="uploadImage"
                                    @change="imagePicked" name="photo">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>
definePageMeta({
    middleware: "auth"
})
const supabase = useSupabaseClient()
const url_img = 'https://hzidiiekhnkimhrxbokx.supabase.co/storage/v1/object/public/fotoProduk/aksesoris'
const route = useRoute()
const productId = route.params.id
const isLoading = ref(false);

const product = ref({
    nama: '',
    harga: '',
    warna: null,
    gender: null,
    stok: '',
    item: null,
    keterangan: '',
    foto: null,
})


async function getProduct() {
    const { data, error } = await supabase.from('aksesoris').select().eq('id', productId).maybeSingle()
    if (error) throw error
    if (data) {
        const { data: url } = supabase.storage.from('fotoProduk').getPublicUrl(`aksesoris/${data.foto}`)
        data.fotoUrl = url
        product.value = data
    }
}
const { data: genders } = useAsyncData('genders', async () => {
    const { data, error } = await supabase.from('gender').select().range(0, 4)
    if (error) throw error
    return data
})

const { data: colours } = useAsyncData('colours', async () => {
    const { data, error } = await supabase.from('warna').select()
    if (error) throw error
    return data
})

const { data: types } = useAsyncData('types', async () => {
    const { data, error } = await supabase.from('itemAksesoris').select()
    if (error) throw error
    return data
})

const imageProduct = ref()
const newImage = ref()

function imagePicked(e) {
    const file = e.target.files[0]
    imageProduct.value = file
    product.value.foto = `${url_img}/${file.name}`
    let fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = () => newImage.value = fr.result
}

const { status, error, execute: editProduct } = useAsyncData('editProduct', async () => {
    if (imageProduct.value) {
        let url = product.value.fotoUrl.publicUrl
        if (product.value.foto == url.substr(url.indexOf('aksesoris'))) {
            const { error } = await supabase.storage.from('fotoProduk').update(`${product.value.foto}`, imageProduct.value)
            if (error) throw error
        }
        else {
            const { error } = await supabase.storage.from('fotoProduk').upload(`${product.value.foto}`, imageProduct.value)
            if (error) throw error
            else {
                const { error } = await supabase.storage.from('fotoProduk').remove(`aksesoris/${url.substr(url.indexOf('aksesoris'))}`)
                if (error) throw error
            }
        }
    }
    const { error } = await supabase.from('aksesoris').update({
        nama: product.value.nama,
        harga: product.value.harga,
        warna: product.value.warna?.nama,
        gender: product.value.gender?.nama,
        stok: product.value.stok,
        item: product.value.itemAksesoris?.nama,
        keterangan: product.value.keterangan,
        foto: product.value.foto
    }).eq('id   ', productId)
    if (error) throw error
    else navigateTo('/admin/accessories')
}, {
    immediate: false
})
onMounted(() => {
    getProduct()
})
</script>

<style scoped>
/*.size-selection input[name="size"] {
    @apply hidden;
}

.size-selection input[name="size"]:checked+.size-label {
    @apply bg-[#bbbbbb] text-black;
} */
</style>