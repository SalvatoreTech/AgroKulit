<template>
    <div class="bg-white text-black">
        <!-- Navbar -->
        <Sidebar />

    </div>
</template>

<script setup>
definePageMeta({
    middleware: ["auth"]
})
import Sidebar from '~/components/admin/Sidebar.vue';

</script>

<style scoped></style>