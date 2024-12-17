<template>
    <div class="bg-white text-white ">
        <div class="bg-login flex justify-between">
            <div
                class="paddingX flex flex-col lg:justify-evenly justify-center lg:gap-0 gap-5 bg-[#767676]/90 rounded-e-xl layer backdrop-blur-[7px] shadow-xl">
                <NuxtLink to="/" class="LeftArrow">
                    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.125 28.125H50.625C51.1223 28.125 51.5992 28.3225 51.9508 28.6742C52.3025 29.0258 52.5 29.5027 52.5 30C52.5 30.4973 52.3025 30.9742 51.9508 31.3258C51.5992 31.6775 51.1223 31.875 50.625 31.875H13.125C12.6277 31.875 12.1508 31.6775 11.7992 31.3258C11.4475 30.9742 11.25 30.4973 11.25 30C11.25 29.5027 11.4475 29.0258 11.7992 28.6742C12.1508 28.3225 12.6277 28.125 13.125 28.125Z"
                            fill="white" />
                        <path
                            d="M13.9012 30L29.4525 45.5475C29.8046 45.8996 30.0024 46.3771 30.0024 46.875C30.0024 47.3729 29.8046 47.8504 29.4525 48.2025C29.1004 48.5546 28.6229 48.7524 28.125 48.7524C27.6271 48.7524 27.1496 48.5546 26.7975 48.2025L9.92249 31.3275C9.74788 31.1533 9.60935 30.9464 9.51482 30.7186C9.4203 30.4908 9.37164 30.2466 9.37164 30C9.37164 29.7534 9.4203 29.5092 9.51482 29.2814C9.60935 29.0536 9.74788 28.8467 9.92249 28.6725L26.7975 11.7975C27.1496 11.4454 27.6271 11.2476 28.125 11.2476C28.6229 11.2476 29.1004 11.4454 29.4525 11.7975C29.8046 12.1496 30.0024 12.6271 30.0024 13.125C30.0024 13.6229 29.8046 14.1004 29.4525 14.4525L13.9012 30Z"
                            fill="white" />
                    </svg>
                </NuxtLink>
                <div class="FormLayer max-w-full flex flex-col gap-8 content-center">
                    <div class="Titl leading-7">
                        <p class="font-bodoni text-[38px]">Log in</p>
                        <p class="font-lora text-[16px]">Only admin can access this login.</p>
                    </div>
                    <form @submit.prevent="login" class="max-w-full lg:mx-auto" autocomplete="off">
                        <div v-if="status == 'error'" class="error font-lora flex gap-2 bg-red-600 rounded-md my-2 p-1">
                            <img src="../assets/icon/error.svg" alt="" class="w-5">
                            {{ error.message }}
                        </div>
                        <div v-if="status == 'loading'" class="error font-lora flex gap-2 rounded-md my-2 p-1">
                            <!-- <img src="../assets/icon/error.svg" alt="" class="w-5"> -->
                            Loading...
                        </div>
                        <div class="stagg relative z-0 mb-5 group w-full">
                            <input v-model="email" type="email" name="floating_email"
                                class="block py-2.5 ps-2 px-0 w-full text-sm text-white bg-transparent border rounded-md border-white appearance-none dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" " required />
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm ms-2 text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                        </div>
                        <div class="stagg relative z-0 w-full mb-5 group">
                            <input v-model="password" type="password" name="floating_password"
                                class="block py-2.5 ps-2 px-0 w-full text-sm text-white bg-transparent border rounded-md border-white appearance-none dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm ms-2 text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password*</label>
                        </div>
                        <input type="submit" value="Login"
                            class="stagg float-end text-white bg-transparent outline-none hover:bg-[#1C3D32] hover:border-[#1C3D32] font-md rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-transparent border">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})
import { gsap } from "gsap";

const supabase = useSupabaseClient()

const email = ref("")
const password = ref("")

const { status, error, loading, execute: login } = useAsyncData("user", async() => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    });
    if (error) throw 'Email or Password is wrong'
    if (data) {
        navigateTo('/admin/')
    }
}, {
    immediate: false,
})

onMounted(() => {
    let tl = gsap.timeline()

    tl.from(".layer", {
        x: '-200%',
        opacity: 0,
        ease: 'power4.inOut',
        duration: 1,
    })
        .from('.LeftArrow', {
            x: '-200%',
        })
        .from('.Titl', {
            opacity: 0
        })
        .from('.stagg', {
            opacity: 0,
            stagger: 0.2,
            ease: "sine.in",
            duration: 0.5
        })
})
</script>

<style scoped>
.bg-login {
    background: url('../assets/img/BGLog.jpg') no-repeat;
    height: 100vh;
    background-size: cover;
}
</style>