<template>
    <div class="bg-white text-black">
        <div class="AddProduct paddingXY">
            <p class="font-lora text-3xl font-medium">Add Accessory</p>
            <div v-if="isLoading" class="flex">
                <p>Uploading</p><svg class="w-5 pt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
            <div class="Product">
                <form @submit.prevent="addJacket" autocomplete="off" class="flex flex-col gap-3">
                    <div class="flex justify-end gap-3">
                        <NuxtLink to="/admin/accessories"
                            class="flex gap-1 p-1 items-center border border-black rounded-md outline-none ">
                            <img src="@/assets/icon/Close.svg" alt="">
                            <p>Cancel</p>
                        </NuxtLink>
                        <button type="submit"
                            class="save text-white flex items-center py-1 px-2 bg-[#1C3D32] hover:bg-green-800 rounded-md outline-none">✓
                            Add</button>
                    </div>
                    <div class="flex justify-between gap-10">
                        <div
                            class="General_info font-lora bg-[#ebedec] rounded-md outline-none p-3 w-[50%] flex flex-col gap-2">
                            <p class="font-medium text-xl">General Information</p>
                            <div class="relative flex flex-col">
                                <label for="name">Product Name</label>
                                <input v-model.trim="form.nama" name="name" type="text"
                                    class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                    placeholder="'Agro-25'">
                            </div>
                            <div class="relative flex flex-col">
                                <label for="description">Product Description</label>
                                <textarea v-model="form.keterangan" name="description"
                                    class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                    placeholder="'Type here to describe the product'"></textarea>
                            </div>
                            <div class="flex flex-wrap items-center gap-10">
                                <div class="relative w-2/5">
                                    <label for="gender">Gender</label>
                                    <select v-model="form.gender"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none">
                                        <option :value="null" selected class="text-[#4e4e4e]">Gender</option>
                                        <option v-for="gender in genders" :key="gender.id" :value="gender.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ gender.nama }}
                                        </option>
                                    </select>
                                </div>
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
                                    <label for="item">Item</label>
                                    <select v-model="form.item"
                                        class="block w-full p-1 text-gray-900 bg-white rounded-md outline-none ">
                                        <option :value="null" selected>
                                            Item
                                        </option>
                                        <option v-for="item in types" :key="item.id" :value="item.id"
                                            class="text-black hover:bg-slate-600 hover:text-white">{{ item.nama }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="price">Price : {{ rupiah(form.harga) }}</label>
                                    <input v-model="form.harga" name="price" type="number" min="0"
                                        class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                        placeholder="0">
                                </div>
                                <div class="relative flex flex-col w-2/5">
                                    <label for="stock">Stock</label>
                                    <input v-model="form.stok" name="stock" type="number" min="0"
                                        class="bg-white placeholder:text-[#4e4e4e] rounded-md p-1 outline-none"
                                        placeholder="0">
                                </div>
                            </div>
                        </div>
                        <div class="Photos bg-[#ebedec] w-[50%] rounded-md p-3">
                            <p class="labelImage font-medium text-xl font-lora">Photo</p>
                            <p class="text-gray-500 text-[12px]">.png /only</p>
                            <div class="flex justify-center">
                                <!-- <img v-if="files" :src="files" alt=""> -->
                                <input type="file" accept="image/png" class="form-control" id="uploadImage"
                                    @change="(e) => files = e.target.files" name="photo">
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
const files = ref()
const url_img = 'https://hzidiiekhnkimhrxbokx.supabase.co/storage/v1/object/public/fotoProduk/aksesoris/'

const form = ref({
    nama: '',
    keterangan: '',
    gender: null,
    warna: null,
    item: null,
    harga: '',
    stok: '',
    foto: null
})

const isLoading = ref(false);


const { data: genders } = useAsyncData('gender', async () => {
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


async function addJacket() {
    isLoading.value = true;

    const file = files.value[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${form.value.nama}.${fileExt}`;
    const filePath = `aksesoris/${fileName}`;
    const { data, error } = await supabase.storage
        .from('fotoProduk')
        .upload(filePath, file);
    if (data) {
        const { data, error } = await supabase
            .from('aksesoris').insert([{
                nama: form.value.nama,
                keterangan: form.value.keterangan,
                gender: form.value.gender,
                warna: form.value.warna,
                item: form.value.item,
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
        navigateTo('/admin/accessories')
    }
}

</script>

<style scoped></style>