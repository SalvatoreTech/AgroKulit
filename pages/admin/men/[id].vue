<template>
    <div class="container bg-white text-black h-screen">

        <Head>
            <Title> {{ jacket?.warna?.nama }} {{ jacket?.kategoriJaket?.nama }} {{ jacket?.nama }}</Title>
        </Head>
        <div class="Manage_container paddingXY">
            <div class="Titl font-lora flex justify-between">
                <p class="text-lg font-medium">Manage Product</p>
                <div class="flex gap-3">
                    <NuxtLink to="/admin/men/"
                        class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                        <img src="@/assets/icon/Close.svg" alt="">
                        <p>Cancel</p>
                    </NuxtLink>
                    <button class="save flex items-center p-1 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">
                        <p class="text-white">✓ Save</p>
                    </button>
                </div>
            </div>
            <div class="Product flex">
                <div class="General_info font-lora bg-[#ebedec] rounded-md outline-none p-3 w-[50%]">
                    <p class="font-medium">General Information</p>
                    <form>
                        <div class="relative flex flex-col">
                            <label for="name">Product Name</label>
                            <input name="name" type="text"
                                class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                placeholder="Product Name">
                        </div>
                        <div class="relative flex flex-col">
                            <label for="description">Product Description</label>
                            <textarea name="description"
                                class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                placeholder="Product Description"></textarea>
                        </div>
                        <div class="flex flex-wrap items-center gap-10">
                            <div class="relative flex flex-col">
                                <label for="size">Size</label>
                                <div class="size-selection flex flex-wrap justify-center gap-5">
                                    <div v-for="size in sizes" :key="size.id">
                                        <input type="radio" id="size" name="size" :value="size.id">
                                        <label for="size"
                                            class="size-label cursor-pointer inline-block py-2 px-4 border border-gray-300 bg-white rounded">{{
                                                size.nama }}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex flex-col">
                                <label for="size">Size</label>
                                <div class="gender-selection flex flex-wrap h-10 items-center content-center gap-5">
                                    <div v-for="gender in genders" :key="gender.id">
                                        <input type="radio" id="gender" name="gender" :value="gender.id"
                                            class="peer cursor-pointer">
                                        <label for="gender" class="">{{ gender.nama }}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="relative w-2/5">
                                <label for="colour">Colour</label>
                                <select v-model="colour"
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
                                <select v-model="category"
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
                                <input name="price" type="text"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Price">
                            </div>
                            <div class="relative flex flex-col w-2/5">
                                <label for="stock">Stock</label>
                                <input name="stock" type="text"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Stock">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold mb-4">Upload Photos</h1>
                    <form @submit.prevent="uploadPhoto">
                        <input type="file" accept="image/*" class="form-control" id="cover"
                            @change="coverPicked">
                        <input type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            :disabled="uploading" value="Upload">
                    </form>
                    <div v-if="uploadedPhoto">
                        <img :src="uploadedPhoto" class="w-full h-full object-cover">
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

const supabase = useSupabaseClient()

const { id } = useRoute().params
const colour = ref(null)
const category = ref(null)

const { data: jacket } = useLazyAsyncData('getJacetById', async () => {
    const { data, error } = await supabase.from('jaketMen').select(`*,  kategoriJaket(*), warna(*)`).eq('id', id).maybeSingle()
    if (error) throw error
    return data
})

const { data: sizes } = useAsyncData('sizes', async () => {
    const { data, error } = await supabase.from('ukuranJaket').select()
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

const { data: categories } = useAsyncData('categorires', async () => {
    const { data, error } = await supabase.from('kategoriJaket').select()
    if (error) throw error
    return data
})

// const uploading = ref(false)
// const uploadedPhoto = ref(null)

// async function handleFileChange(event) {
//     const file = event.target.files[0]
//     uploading.value = file
//     const {data, error } = await supabase.from('jaketMen').select('cover').eq('id', )
//     uploadedPhoto.value = response.data.url
//     uploading.value = false
// }

// const { execute: uploadPhoto } = useAsyncData('uploadPhoto', async () => {
//     const { data, error } = await supabase.from('jaketMen').insert()
// })

</script>

<style scoped>
.size-selection input[name="size"] {
    @apply hidden;
}

.size-selection input[name="size"]:checked+.size-label {
    @apply bg-[#bbbbbb] text-black;
}
</style>