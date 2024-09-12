<template>
    <div class="bg-white text-black pt-20 flex">
        <div class="FormLayer">
            <p class="font-bodoni text-[38px]">
                Contact
            </p>
            <form autocomplete="off" class="flex flex-col gap-3">
                <input type="text" placeholder="Your Name" class="bg-transparent border border-black py-2 ps-2">
                <input type="email" placeholder="Your Email" class="bg-transparent border border-black py-2 ps-2">
                <textarea name="message" placeholder="Message" class="bg-transparent border border-black py-2 ps-2"></textarea>
                <input type="submit" class="bg-transparent border border-black rounded-md w-24 hover:bg-[#1C3D32] hover:text-white">
            </form>
        </div>
        <div class="Location">
            <p class="font-lora text-[24px]">Our Locations</p>
            <p>Tasikmalaya</p>
            <ul>
                <li>Jln Martadinata, No. 18, Jl. Ahmad Yani No.1, Empangsari, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat 46134</li>
                <li>Jl. R.E. Martadinata No.18, Panglayungan, Kec. Cipedes, Kab. Tasikmalaya, Jawa Barat 46196</li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>