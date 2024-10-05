<template>
  <div class="bg-white text-black">
    <!-- Sidebar -->
    <Sidebar />
    <div class="paddingXY">
      <div class="Statistic lg:w-full">
        <p class="font-lora text-3xl">Latest Data</p>
        <div class="flex w-full justify-center gap-20">
          <div class="MostLikedJacket w-3/12 p-4 shadow-xl rounded-xl flex">
            <Line :data="mostLikedJacketChartData" :options="mostLikedJacketChartOptions" />
          </div>
          <div class="AmountofProducts w-5/12 p-4 shadow-xl rounded-xl">
            <Bar :data="productChartData" :options="productChartOptions" />
          </div>
          <div class="MostLikedAccessories w-3/12 p-4 shadow-xl rounded-xl flex">
            <Line :data="mostLikedAccessoriesChartData" :options="mostLikedAccessoriesChartOptions" />
          </div>
        </div>
      </div>
      <div class="Hyper_link">
        <div class="Product">
          <figure class="w-full h-40 relative max-w-full mt-5 overflow-hidden">
            <img src="@/assets/img/BGDiscover.jpg" alt="" class="w-full brightness-50">
            <figcaption
              class="absolute text-lg font-lora text-white top-0 flex flex-col justify-center gap-5 items-center content-center w-full h-ful">
              <p class="text-3xl">Add Product</p>
              <div class="flex justify-evenly w-full">
                <NuxtLink to="/admin/men">
                  Men
                </NuxtLink>
                |
                <NuxtLink to="/admin/women">
                  women
                </NuxtLink>
              </div>
            </figcaption>
          </figure>
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