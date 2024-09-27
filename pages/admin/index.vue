<template>
  <div class="bg-white text-black">
    <!-- Sidebar -->
    <Sidebar />
    <div class="Statistic lg:w-full h-screen">
      <div class="flex w-full justify-center gap-20">
        <div class="MostLikedJacket w-3/12 p-4 shadow-xl rounded-xl flex">
          <Line :data="mostLikedJacketChartData" :options="mostLikedJacketChartOptions"/>
        </div>
        <div class="MostLikedAccessories w-3/12 p-4 shadow-xl rounded-xl flex">
          <Line :data="mostLikedAccessoriesChartData" :options="mostLikedAccessoriesChartOptions"/>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="AmountofProducts w-5/12 p-4 shadow-xl rounded-xl">
          <Bar :data="productChartData" :options="productChartOptions"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
import Sidebar from "~/components/admin/Sidebar.vue";
import { Line, Bar, Pie } from "vue-chartjs";

const user = useSupabaseUser()
const supabase = useSupabaseClient()


const { data: menAmount } = useAsyncData('men', async () => {
  const { count, error } = await supabase.from('jaketMen').select('*', { count: 'exact' })
  if (error) throw error
  return count
})

const { data: womenAmount } = useAsyncData('women', async () => {
  const { count, error } = await supabase.from('jaketWomen').select('*', { count: 'exact' })
  if (error) throw error
  return count
})

const { data: accessoriesAmount } = useAsyncData('accessories', async () => {
  const { count, error } = await supabase.from('aksesoris').select('*', { count: 'exact' })
  if (error) throw error
  return count
})

//Bar Chart for Products
const productChartData = computed(() => {
  return {
    labels: ["Men", "Women", "Accessories"],
    datasets: [
      {
        label: "Amount of Products",
        backgroundColor: "#1C3D32",
        data: [menAmount.value, womenAmount.value, accessoriesAmount.value],
      },
    ],
  }
});

const productChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  }
})

//Pie Chart for Most Liked Product
const mostLikedJacketChartData = computed(() => {
  return {
    labels: ["Biker Jacket", "Cafe Racer", "Coat"],
    datasets: [
      {
        label: "Amount Liked",
        backgroundColor: ["#bbc3c0", "#1b2d26", "#0d1512"],
        data: [50, 32, 20],
      },
    ],
  }
});

const mostLikedJacketChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  }
})

//Pie Chart for Most Liked Accessories
const mostLikedAccessoriesChartData = computed(() => {
  return {
    labels: ["Belt", "Wallet", "Key Chain"],
    datasets: [
      {
        label: "Amount Liked",
        backgroundColor: ["#bbc3c0", "#1b2d26", "#0d1512"],
        data: [54, 22, 8],
      },
    ],
  }
});

const mostLikedAccessoriesChartOptions = ref({
  title: {
    display: true,
    text: "Line Chart Products",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  }
})
</script>

<style scoped></style>