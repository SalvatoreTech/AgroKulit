<template>
    <div class="bg-white text-black">
        <div class="flex justify-between">
            <div class="paddingX flex flex-col justify-around">
                <NuxtLink to="/">
                    <img src="../../assets/icon/LeftArrow.svg" alt="LeftArrow">
                </NuxtLink>
                <div class="FormLayer max-w-full flex flex-col gap-14 content-center">
                    <div class="Titl leading-7">
                        <p class="font-bodoni text-[38px]">Log in</p>
                        <p class="font-lora text-[16px]">Only admin can access this login.</p>
                    </div>
                    <form class="max-w-full mx-auto">
                        <div class="relative z-0 mb-5 group w-[400px]">
                            <input type="email" name="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm ms-2  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-700 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border rounded-md border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm ms-2 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:bg-white peer-focus:dark:text-blue-700 peer-focus:z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password*</label>
                        </div>
                        <input type="submit" value="Send"
                            class=" float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    </form>
                </div>
            </div>
            <img src="../../assets/img/BGLogin.jpg" alt="BGLogin">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>