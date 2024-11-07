<template>
    <div>
        <!-- Navbar -->
        <Header />
        <!-- Content -->
        <div class="bg-white text-black pt-20">
            <div class="paddingX">
                <NuxtLink to="/product/women">
                    <img src="../../assets/icon/LeftArrow.svg" alt="LeftArrow">
                </NuxtLink>
                <div class="flex justify-evenly">
                    <div class="carousel rounded-box w-96" data-carousel="slide">
                    </div>
                    <div class="ProfuctInfo font-lora max-w-lg flex flex-col justify-evenly">
                        <div class="Tilt leading-[15px] ps-3">
                            <p class="text-[24px] font-bold">Café Racer Man Leather Jacket</p>
                            <p class="text-[11px]">Agro 01</p>
                        </div>
                        <div class="General">
                            <p>1.000.000 IDR</p>
                            <p>Colour : Black</p>
                            <p>Size : L</p>
                            <p>Stock : 10</p>
                            <p>Cafe Racer Jacket. Cafe racer jackets typically have a simple, minimalist design with a
                                clean
                                and tailored silhouette.</p>
                        </div>
                        <div class="OrderLink font-lora ps-3">
                            <p class="text-[11px] ">Shipping, Exchanges, and Returns</p>
                            <button
                                class="flex py-1 px-3 gap-1 border border-black rounded-md hover:bg-[#1C3D32] hover:text-white">
                                <p>Order now</p>
                                <img src="../../assets/icon/WABlack.svg" alt="WhatsApp">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
const isHidden = ref(true);

function menu() {
    isHidden.value = !isHidden.value;
}
</script>

<style scoped></style>