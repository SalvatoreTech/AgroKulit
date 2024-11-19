<template>
    <div>
        <Header />
        <!-- Content -->
        <div class="bg-white text-black flex flex-col justify-between">
            <div class="Contact_container h-[92vh] flex flex-col gap-10 mt-12">
                <div
                    class="bg-[#767676] rounded-r-2xl shadow-2xl p-5 backdrop-blur-[8px] opacity-95 flex lg:flex-row md:flex-row flex-col w-6/12 h-[100vh] gap-20">
                    <div class="flex flex-col items-center justify-center">
                        <div class="Titl_contact text-center leading-9 mb-2 text-white">
                            <p class="font-bodoni text-[3rem]">Contact</p>
                            <p class="font-lora">Send your feelings.</p>
                            <p v-if="isSuccess" class="bg-green-600 px-2 rounded-md">Your feeling sent successfully, Thank you!</p>
                            <p v-if="isError" class="px-2 bg-red-600 rounded-md">Your Feeling failed to send the email. Please try again.</p>
                        </div>
                        <form @submit.prevent="sendEmail"
                            class="lg:w-[500px] md:w-[400px] sm:w-[400px] w-[250px] font-lora" autocomplete="off">
                            <div class="relative z-0 mb-5 group">
                                <input v-model="formData.name" type="text" name="floating_name"
                                    class="block py-2.5 ps-2 w-full text-sm bg-transparent border rounded-md border-white text-white appearance-none outline-none dark:border-white peer"
                                    placeholder=" " required />
                                <label for="floating_name"
                                    class="peer-focus:font-medium absolute text-sm ms-2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white text-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                                    Name</label>
                            </div>
                            <div class="relative z-0 mb-5 group">
                                <input v-model="formData.email" type="email" name="floating_email"
                                    class="block py-2.5 ps-2 w-full text-sm bg-transparent border rounded-md border-white text-white appearance-none outline-none dark:border-white peer"
                                    placeholder=" " required />
                                <label for="floating_email"
                                    class="peer-focus:font-medium absolute text-sm ms-2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white text-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                                    Email</label>
                            </div>
                            <div class="relative z-0 mb-5 group">
                                <textarea v-model="formData.message" name="floating_message"
                                    class="block py-2.5 ps-2 w-full text-sm bg-transparent border rounded-md border-white text-white appearance-none outline-none dark:border-white peer"
                                    placeholder=" " required />
                                <label for="floating_message"
                                    class="peer-focus:font-medium absolute text-sm ms-2 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white text-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                            </div>
                            <button type="submit"
                                class="float-end text-white bg-transparent outline-none rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center border hover:bg-white hover:text-black">
                                <p v-if="isLoadingHide">Send</p>
                                <div v-if="isLoading" class="flex"><svg class="w-10 h-5" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="40" cy="100">
                                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4">
                                        </animate>
                                    </circle>
                                    <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="100" cy="100">
                                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2">
                                        </animate>
                                    </circle>
                                    <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="15" cx="160" cy="100">
                                        <animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;"
                                            keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0">
                                        </animate>
                                    </circle>
                                </svg></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="Location max-w-full border-black ps-10 font-lora flex flex-col gap-10 mb-10">
                <div class="Titl_location leading-6 pt-20">
                    <p class="text-[2rem] text-center">Our Stores</p>
                    <p class="text-center">Come to our store to see more products.</p>
                </div>
                <p class="font-bold">Tasikmalaya</p>
                <ul class="list-none flex lg:flex-row flex-col gap-10">
                    <li class="max-w-xl">
                        <iframe class="lg:w-11/12 lg:h-[250px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.940276474792!2d108.21893687936918!3d-7.327473918016089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f574b34e1ba4d%3A0x1c5119ecf9e43672!2sAgro%20Kulit%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1727066527202!5m2!1sid!2sid"
                            style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p class="underline">
                            Jln Martadinata, No. 18, Jl. Ahmad Yani No.1, Empangsari, Kec.
                            Tawang, Kab. Tasikmalaya, Jawa Barat 46134
                        </p>
                    </li>
                    <li class="max-w-xl">
                        <iframe class="lg:w-11/12 lg:h-[250px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31658.329182559228!2d108.20010198628258!3d-7.321156981319861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f574b78674ed5%3A0x8f72a3492e920811!2sAgro%20Jaket%20Kulit!5e0!3m2!1sid!2sid!4v1727067043297!5m2!1sid!2sid"
                            style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p class="underline">
                            Jl. R.E. Martadinata No.18, Panglayungan, Kec. Cipedes, Kab.
                            Tasikmalaya, Jawa Barat 46196
                        </p>
                    </li>
                </ul>
                <p class="font-bold">Ciamis</p>
                <ul class="list-none">
                    <li>
                        <iframe class="lg:w-11/12 lg:h-[250px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6655.229115820192!2d108.36226705428898!3d-7.328843053697464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5e9373bf9ffd%3A0x389b3fc700bfe756!2sJl.%20Mr.%20Iwa%20Kusuma%20Sumantri%2C%20Kec.%20Ciamis%2C%20Kabupaten%20Ciamis%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1727070010411!5m2!1sid!2sid"
                            style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <p class="underline">
                            Jl. Mr. Iwa Kusuma Sumantri, Kertasari, Kec. Ciamis, Kabupaten
                            Ciamis, Jawa Barat 46213
                        </p>
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import emailjs from 'emailjs-com'

const formData = ref({
    name: '',
    email: '',
    message: '',
})

const isSuccess = ref(false);
const isError = ref(false);
const isLoading = ref(false);
const isLoadingHide = ref(true);

const sendEmail = async () => {
    isLoading.value = true;
    isLoadingHide.value = false;

    const serviceID = 'service_30lt8l3'; // Replace with your EmailJS service ID
    const templateID = 'template_985v4dh'; // Replace with your EmailJS template ID
    const userID = "Exk1Btb4-D4CcBfgv";

    emailjs.send(serviceID, templateID, {
        from_name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message
    }, userID)
        .then(() => {
            isSuccess.value = true;
            isError.value = false;
            formData.value = { name: '', email: '', message: '' };  // Clear the form
            setTimeout(() => {
                isSuccess.value = false
            }, 4000)
        })
        .catch(() => {
            isError.value = true;
            setTimeout(() => {
                isError.value = false
            }, 4000)
        })
        .finally(() => {
            isLoading.value = false;
            isLoadingHide.value = true;
        });

};

onMounted(() => {

})
</script>

<style scoped>
.Contact_container {
    background: url("@/assets/img/BGContact.jpg") center;
    background-size: cover;
}
</style>