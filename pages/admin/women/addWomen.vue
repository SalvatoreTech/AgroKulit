import { type } from '../../../.nuxt/types/imports';
<template>
    <div class="container bg-white text-black h-screen">
        <div class="AddProduct paddingXY">
            <p class="font-lora text-3xl font-medium">Add Jacket</p>
            <div class="Product">
                <form @submit.prevent="addJacket" autocomplete="off">
                    <div class="flex justify-end gap-3">
                        <NuxtLink to="/admin/women/"
                            class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                            <img src="@/assets/icon/Close.svg" alt="">
                            <p>Cancel</p>
                        </NuxtLink>
                        <input type="submit" value="✓ Save"
                            class="save text-white flex items-center p-1 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">
                    </div>
                    <div class="flex justify-between gap-10">
                        <div class="General_info font-lora bg-[#ebedec] rounded-md outline-none p-3 w-[50%]">
                            <p class="font-medium text-xl">General Information</p>
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input v-model.trim="form.name" name="name" type="text"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Name">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea v-model="form.description" name="description"
                                    class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                    placeholder="Product Description"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative flex flex-col">
                                    <label for="size">Size</label>
                                    <div class="size-selection flex flex-wrap justify-center gap-5">
                                        <div v-for="size in sizes" :key="size.id">
                                            <input v-model="form.size" type="radio" id="size" name="size"
                                                :value="size.id">
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
                                            <input v-model="form.gender" type="radio" id="gender" name="gender"
                                                :value="gender.id" class="peer cursor-pointer">
                                            <label for="gender" class="">{{ gender.nama }}</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative w-2/5">
                                    <label for="colour">Colour</label>
                                    <select v-model="form.colour"
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
                                    <select v-model="form.category"
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
                                    <input v-model.trim="form.price" name="price" type="text"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Price">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input v-model.trim="form.stock" name="stock" type="text"
                                        class="bg-white placeholder:text-black rounded-md p-1 outline-none"
                                        placeholder="Stock">
                                </div>
                            </div>
                        </div>
                        <div class="Photos bg-[#ebedec] w-[50%] rounded-md p-3">
                            <label for="photo" class="labelImage form-label text-xl font-lora">Add Product </label>
                            <input type="file" accept="image/*" class="form-control" id="uploadImage"
                                @change="photoPicked" name="photo">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const form = ({
    name: '',
    description: '',
    size: '',
    gender: '',
    colour: null,
    category: null,
    price: '',
    stock: '',
    photo: null
})
const photoProduct = ref()

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

async function photoPicked(event) {
    const file = event.target.files[0]
    photoProduct.value = file
    const { data, error } = await supabase.from('womenJaket').select('foto').eq('id', form.value.kategori).maybeSingle()
    if (error) throw error
    form.value.photo = `${data.nama.replace(' ', '_').toLowerCase()}/${file.name}`
}

const { execute: addJacket } = useAsyncData('addJacket', async () => {
    if(photoProduct.value) {
        const {error} = await supabase.storage.from('fotoProduk').upload(`photo/${form.value.photo}`, photoProduct.value)
        if (error) throw error
    }
    const { error } = await supabase.from('jaketWomen').insert(form.value)
    if (error) throw error
    else navigateTo('/admin/women/')
}, {
    immediate: false
})
</script>

<style scoped>
.size-selection input[name="size"] {
    @apply hidden;
}

.size-selection input[name="size"]:checked+.size-label {
    @apply bg-[#bbbbbb] text-black;
}
</style>