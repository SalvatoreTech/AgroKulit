<template>
    <div class="bg-white text-black">
        {{ jacket?.nama }}
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const {id} = useRoute().params

const {data: jacket } = useLazyAsyncData('getJacetById', async() => {
    const {data, error} = await supabase.from('jaketWomen').select(`*,  kategoriJaket(*), warna(*)`).eq('id', id).maybeSingle()
    if (error) throw error
    return data
})
</script>

<style scoped>

</style>