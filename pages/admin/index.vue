<template>
  <div class="bg-white text-black h-screen">
    <!-- Sidebar -->
    <Sidebar />
    <div class="paddingXY">
      <div class="Statistic lg:w-full">
        <div class="flex justify-between">
          <p class="font-bodoni">Welcome, admin.</p>
          <p class="font-lora text-3xl">Latest Data</p>
        </div>
        <div class="flex w-full justify-center gap-20">
          <!-- <div class="MostLikedJacket w-3/12 p-4 shadow-xl flex-col rounded-xl flex">
            <p class="font-lora">Jacket</p>
          </div> -->
          <div class="AmountofProducts lg:w-5/12 w-full p-4 shadow-xl rounded-xl">
            <Bar :data="productChartData" :options="productChartOptions" />
          </div>
          <!-- <div class="MostLikedAccessories w-3/12 p-4 shadow-xl rounded-xl flex flex-col">
            <p class="font-lora">Accessories</p>
          </div> -->
        </div>
      </div>
      <div class="Hyper_link">
        <div class="Product">
          <figure class="w-full h-40 relative max-w-full mt-5 overflow-hidden">
            <img src="@/assets/img/BGDiscover.jpg" alt="" class="w-full brightness-50">
            <figcaption
              class="absolute text-lg font-lora text-white top-0 flex flex-col justify-center gap-5 items-center content-center w-full h-ful">
              <p class="text-3xl">Manage Products</p>
              <div class="flex justify-evenly w-full">
                <NuxtLink to="/admin/men"
                  class="relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Men
                </NuxtLink>
                |
                <NuxtLink to="/admin/women"
                  class="relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Women
                </NuxtLink>
                |
                <NuxtLink to="/admin/accessories"
                  class="relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Accessories
                </NuxtLink>
              </div>
            </figcaption>
          </figure>
          <div class="bg-[#6d6d6] mt-10 rounded">
            <div class="flex lg:gap-10 gap-3 items-center lg:flex-row flex-col">
              <figure
                class="w-full h-10 relative max-w-full overflow-hidden  text-white hover:text-black bg-[#254e3f] hover:bg-[#D6D6D6] hover:border hover:border-slate-950 rounded">
                <figcaption
                  class="absolute text-lg font-lora top-0 flex flex-col justify-center gap-5 items-center content-center w-full h-ful">
                  <div class="flex justify-evenly w-full ">
                    <NuxtLink to="/admin/categories"
                      class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                      Categories of Jackets
                    </NuxtLink>
                  </div>
                </figcaption>
              </figure>
              <figure
                class="w-full h-10 relative max-w-full text-white hover:text-black overflow-hidden bg-[#254e3f] hover:bg-[#D6D6D6] hover:border hover:border-slate-950 rounded">
                <figcaption
                  class="text-lg font-lora top-0 flex flex-col justify-center gap-5 items-center content-center w-full h-ful">
                  <div class="flex justify-evenly w-full">
                    <NuxtLink to="/admin/colours"
                      class="relative  after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                      Colour
                    </NuxtLink>
                  </div>
                </figcaption>
              </figure>
              <figure
                class="w-full h-10 relative max-w-full text-white hover:text-black overflow-hidden bg-[#254e3f] hover:bg-[#D6D6D6] hover:border hover:border-slate-950 rounded">
                <figcaption
                  class="absolute text-lg font-lora top-0 flex flex-col justify-center gap-5 items-center content-center w-full h-ful">
                  <div class="flex justify-evenly w-full">
                    <NuxtLink to="/admin/types"
                      class="relative after:bg-black after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                      Type of Accessories
                    </NuxtLink>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth"
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