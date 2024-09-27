<template>
    <div>
        <Header />
        <!-- Contect -->
        <div class="bg-white text-black pt-8">
            <div class="paddingX">
                <!-- Hero -->
                <div class="Hero_container flex justify-between items-center">
                    <div class="Hero_text max-w-2xl">
                        <p class="Tilt_hero font-bodoni text-[4.5rem]">
                            Express Yourself with Leather
                        </p>
                        <p class="Sub_hero max-w-sm font-lora">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                            turpis molestie, dictum est a, mattis tellus. Sed dignissim,.
                        </p>
                        <div class="collection_btn flex gap-5 mt-12 font-lora">
                            <NuxtLink to="/product/men"
                                class="Btn_hero bg-[#1C3D32] rounded-md text-white py-2 px-3 border-2 border-[#1C3D32] hover:bg-transparent hover:text-black hover:border-2 hover:border-[#1C3D32]">
                                <p>Men's Collection</p>
                            </NuxtLink>
                            <NuxtLink to="/product/women"
                                class="Btn_hero bg-[#1C3D32] rounded-md text-white py-2 px-3 border-2 border-[#1C3D32] hover:bg-transparent hover:text-black hover:border-2 hover:border-[#1C3D32]"
                                @mouseenter="womenShow" @mouseleave="womenHidden">
                                <p>Women's Collection</p>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="Hero_photo pt-14 relative group mt-4 w-[430px] overflow-hidden "
                        style="clip-path: circle(50% at 50% 50%);">
                        <img src="@/assets/icon/Ellipse.svg" alt="ellipse" class="ellipse" />
                        <img src="@/assets/img/Man.svg" alt="man" class="man absolute bottom-0" />
                        <img src="@/assets/img/Women.svg" alt="man"
                            class="women absolute bottom-0 scale-0 translate-y-[200%]" />
                    </div>
                </div>
                <!-- BestSellers -->
                <div class="BestSeller_container">
                    <div class="BestSeller_text flex">
                        <img src="@/assets/icon/BestSellerVector.svg" alt="BestSellerVector"
                            class="Arrow_bestseller" />
                        <p class="Titl_bestseller font-bodoni text-[3rem] font-medium ">Most Liked</p>
                    </div>
                    <div class="BestSeller_product">
                        <div class="BestSeller_jacket flex justify-between">
                            <div class="jacketbs lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                                <img src="@/assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-5">
                                            <p class="text-[1.2rem] font-lora">
                                                Black Texture Leather
                                            </p>
                                            <p class="font-lora text-[1rem]">1.000.000 IDR</p>
                                        </div>
                                        <div class="GenderProduct">
                                            <p class="font-lora text-[1rem]">Men</p>
                                        </div>
                                    </div>
                                    <div class="Order_btn flex justify-end me-5">
                                        <NuxtLink>
                                            <button
                                                class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1">
                                                <p class="font-lora text-[1rem] text-black">Order now</p>
                                                <img src="@/assets/icon/Plus.svg" alt=""
                                                    class="transform hover:rotate-90 transition duration-100" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="jacketbs lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                                <img src="@/assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-5">
                                            <p class="text-[1.2rem] font-lora">
                                                Black Texture Leather
                                            </p>
                                            <p class="font-lora text-[1rem]">1.000.000 IDR</p>
                                        </div>
                                        <div class="GenderProduct">
                                            <p class="font-lora text-[1rem]">Men</p>
                                        </div>
                                    </div>
                                    <div class="Order_btn flex justify-end me-5">
                                        <NuxtLink>
                                            <button
                                                class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1">
                                                <p class="font-lora text-[1rem] text-black">Order now</p>
                                                <img src="@/assets/icon/Plus.svg" alt=""
                                                    class="transform hover:rotate-90 transition duration-100" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="jacketbs lg:w-80 md:w-48 sm:w-38 w-28 relative group">
                                <img src="@/assets/img/ExProduct.jpg"
                                    class="rounded-md group-hover:scale-95 duration-300" />
                                <div
                                    class="group-hover:opacity-100 group-hover:scale-95 duration-300 rounded-md shadow-lg absolute h-full flex flex-col gap-[350px] w-full bottom-0 text-xl text-gray-700/70">
                                    <div class="flex justify-between px-3 items-start">
                                        <div class="ProductInfo flex flex-col leading-5">
                                            <p class="text-[1.2rem] font-lora">
                                                Black Texture Leather
                                            </p>
                                            <p class="font-lora text-[1rem]">1.000.000 IDR</p>
                                        </div>
                                        <div class="GenderProduct">
                                            <p class="font-lora text-[1rem]">Men</p>
                                        </div>
                                    </div>
                                    <div class="Order_btn flex justify-end me-5">
                                        <NuxtLink>
                                            <button
                                                class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1">
                                                <p class="font-lora text-[1rem] text-black">Order now</p>
                                                <img src="@/assets/icon/Plus.svg" alt=""
                                                    class="transform hover:rotate-90 transition duration-100" />
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="BestSeller_accessories flex justify-between gap-1 pt-5">
                            <div class="accbs">
                                <figure
                                    class="relative max-w-sm transition-all duration-300 cursor-pointer">
                                    <a href="#">
                                        <img class="rounded-lg" src="@/assets/img/ExAccsProduct.jpg"
                                            alt="imageAccessoriesProduct" />
                                    </a>
                                    <figcaption
                                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full">
                                        <div class="flex justify-between items-start">
                                            <div class="ProductInfo flex flex-col leading-5">
                                                <p class="text-[1.2rem] font-lora">
                                                    Green Forest Wallet
                                                </p>
                                                <p class="font-lora text-[1rem]">400.000 IDR</p>
                                            </div>
                                            <div class="GenderProduct">
                                                <p class="font-lora text-[1rem]">Men</p>
                                            </div>
                                        </div>
                                        <div class="Order_btn flex justify-end">
                                            <NuxtLink>
                                                <button
                                                    class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150">
                                                    <p class="font-lora text-[1rem] text-black">Order now</p>
                                                    <img src="@/assets/icon/Plus.svg" alt="" />
                                                </button>
                                            </NuxtLink>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="accbs">
                                <figure
                                    class="relative max-w-sm transition-all duration-300 cursor-pointer">
                                    <a href="#">
                                        <img class="rounded-lg" src="@/assets/img/ExAccsProduct.jpg"
                                            alt="imageAccessoriesProduct" />
                                    </a>
                                    <figcaption
                                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full">
                                        <div class="flex justify-between items-start">
                                            <div class="ProductInfo flex flex-col leading-5">
                                                <p class="text-[1.2rem] font-lora">
                                                    Green Forest Wallet
                                                </p>
                                                <p class="font-lora text-[1rem]">400.000 IDR</p>
                                            </div>
                                            <div class="GenderProduct">
                                                <p class="font-lora text-[1rem]">Men</p>
                                            </div>
                                        </div>
                                        <div class="Order_btn flex justify-end">
                                            <NuxtLink>
                                                <button
                                                    class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150">
                                                    <p class="font-lora text-[1rem] text-black">Order now</p>
                                                    <img src="@/assets/icon/Plus.svg" alt="" />
                                                </button>
                                            </NuxtLink>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="accbs">
                                <figure
                                    class="relative max-w-sm transition-all duration-300 cursor-pointer">
                                    <a href="#">
                                        <img class="rounded-lg" src="@/assets/img/ExAccsProduct.jpg"
                                            alt="imageAccessoriesProduct" />
                                    </a>
                                    <figcaption
                                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full">
                                        <div class="flex justify-between items-start">
                                            <div class="ProductInfo flex flex-col leading-5">
                                                <p class="text-[1.2rem] font-lora">
                                                    Green Forest Wallet
                                                </p>
                                                <p class="font-lora text-[1rem]">400.000 IDR</p>
                                            </div>
                                            <div class="GenderProduct">
                                                <p class="font-lora text-[1rem]">Men</p>
                                            </div>
                                        </div>
                                        <div class="Order_btn flex justify-end">
                                            <NuxtLink>
                                                <button
                                                    class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150">
                                                    <p class="font-lora text-[1rem] text-black">Order now</p>
                                                    <img src="@/assets/icon/Plus.svg" alt="" />
                                                </button>
                                            </NuxtLink>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="accbs">
                                <figure
                                    class="relative max-w-sm transition-all duration-300 cursor-pointer">
                                    <a href="#">
                                        <img class="rounded-lg" src="@/assets/img/ExAccsProduct.jpg"
                                            alt="imageAccessoriesProduct" />
                                    </a>
                                    <figcaption
                                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-between pb-5 w-full h-full">
                                        <div class="flex justify-between items-start">
                                            <div class="ProductInfo flex flex-col leading-5">
                                                <p class="text-[1.2rem] font-lora">
                                                    Green Forest Wallet
                                                </p>
                                                <p class="font-lora text-[1rem]">400.000 IDR</p>
                                            </div>
                                            <div class="GenderProduct">
                                                <p class="font-lora text-[1rem]">Men</p>
                                            </div>
                                        </div>
                                        <div class="Order_btn flex justify-end">
                                            <NuxtLink>
                                                <button
                                                    class="flex items-center gap-1 bg-white shadow-lg rounded-full px-1 hover:scale-75 duration-150">
                                                    <p class="font-lora text-[1rem] text-black">Order now</p>
                                                    <img src="@/assets/icon/Plus.svg" alt="" />
                                                </button>
                                            </NuxtLink>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ExploringJackets -->
            <div class="Explore px-2 py-5">
                <figure class="DiscoverJacket relative max-w-full overflow-hidden"
                    style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%)">
                    <img src="@/assets/img/BGDiscover.jpg" class="w-full BG_disc brightness-50" />
                    <figcaption
                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-center gap-20 items-center pb-5 w-full h-full">
                        <div class="flex flex-col items-center gap-3">
                            <p class="Titl_disc font-lora font-bold text-[54px] drop-shadow-2xl">
                                Explore the Beauty of Genuine Leather
                            </p>
                            <p class="Sub_disc font-lora">
                                For a range of high quality leather jackets, high quality leather
                                goods, look no further.
                            </p>
                        </div>
                        <div class="Linked flex justify-between w-6/12 font-lora">
                            <NuxtLink to="/product/men"
                                class="flex items-center content-center gap-2 cursor-pointer relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <p>Men</p>
                                <img src="@/assets/icon/RightArrow.svg" alt="" />
                            </NuxtLink>
                            <NuxtLink to="/product/women"
                                class="flex items-center content-center gap-2 cursor-pointer relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <p>Women</p>
                                <img src="@/assets/icon/RightArrow.svg" alt="" />
                            </NuxtLink>
                        </div>
                    </figcaption>
                </figure>
                <figure class="DiscoverAccess relative max-w-full mt-5 overflow-hidden"
                    style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%)">
                    <img src="@/assets/img/AccessBG.jpg" class="w-full BG_acc brightness-50" />
                    <figcaption
                        class="absolute px-4 text-lg text-white top-0 flex flex-col justify-center gap-20 items-center pb-5 w-full h-full">
                        <div class="flex flex-col items-center gap-3">
                            <p class="Titl_acc font-lora font-bold text-[54px] drop-shadow-2xl">
                                Accessories
                            </p>
                            <p class="Sub_acc font-lora">
                                Essential Style Come Alive in Bright Colours.
                            </p>
                        </div>
                        <div class="LinkedAcc flex justify-center w-6/12 font-lora">
                            <NuxtLink to="product/accessories"
                                class="flex items-center content-center gap-2 cursor-pointer relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                                <p>Discover</p>
                                <img src="@/assets/icon/RightArrow.svg" alt="" />
                            </NuxtLink>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <!-- Costumization -->
            <div class="Costum bg-[#1C3D32] flex max-w-full overflow-hidden"
                style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%)">
                <div class="Costum_text text-white paddingX flex h-[100vh] justify-evenly flex-col">
                    <div class="text flex flex-col gap-5">
                        <p class="Titl_costum font-bodoni text-[51px]">Costum Your Own</p>
                        <p class="Sub_costum font-lora">
                            Our white-glove bespoke service is where your individuality is our
                            ultimate masterpiece. From bespoke illustrations to the selection of
                            materials, cuts, fabrics, prints, and finishing touches, you become a
                            collaborator with our in-house design consultant team to shape pieces
                            that fit your lifestyle and are unmistakably you.
                        </p>
                    </div>
                    <div class="HyperLink_costum flex justify-end gap-2">
                        <NuxtLink
                            class="flex justify-end gap-2 relative after:bg-white after:absolute after:h-[0.10rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                            <img src="@/assets/icon/WA.svg" alt="">
                            <p class="font-lora">WhatsApp</p>
                        </NuxtLink>
                    </div>
                </div>
                <img src="@/assets/img/IMGCostum.jpg" alt="ImageCostum" class="Costum_img w-[50vw]">
            </div>

            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis'
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger)

const isHidden = ref(true);
// const isShow = ref(true)
// const isUnshow = ref(true)c

function menu() {
    isHidden.value = !isHidden.value;
    gsap.from('.stagg', {
        opacity: 0,
        stagger: 0.3,
        duration: 0.5
    })
}

function womenShow() {
    // isShow.value = !isShow.value;
    gsap.to(".women", {
        scale: 1,
        y: 0,
        ease: 'power4.inOut',
        duration: 0.5
    })
    gsap.to(".man", {
        scale: 0,
        y: "200%",
    })
}

function womenHidden() {
    // isShow.value = !isShow.value;
    gsap.to(".women", {
        scale: 0,
        y: '200%',

    })
    gsap.to(".man", {
        scale: 1,
        y: 0,
        ease: 'power4.inOut',
        duration: 0.5
    })
}

onMounted(() => {
    //Variables
    let text = new SplitType(".Tilt_hero")
    let tl = gsap.timeline()
    let titlbs = gsap.timeline({
        scrollTrigger: {
            start: '15% center',
            end: '20% center',
        }
    })
    let productbs = gsap.timeline({
        scrollTrigger: {
            start: '20% center',
            end: '27% center',
        }
    })
    let discover = gsap.timeline({
        scrollTrigger: {
            start: '40% center',
            end: '45% center',
        }
    })
    let discoverAcc = gsap.timeline({
        scrollTrigger: {
            start: '55% center',
            end: '60% center',
        }
    })
    let costum = gsap.timeline({
        scrollTrigger: {
            start: '75% center',
            end: '85% center',
        }
    })
    let footer = gsap.timeline({
        scrollTrigger: {
            start: '90% center',
            end: '91% center',
        }
    })
    //TimelineAnimation
    tl.from('.Navbar', {
        y: '-200%',
        ease: 'sine.inOut',
        duration: 1
    })
        .from('.Hero_container', {
            opacity: 0
        })
        .from('.man', {
            y: '200%',
            duration: 1.2,
            ease: 'power4.inOut'
        })
        .from(".char", {
            opacity: 0,
            y: -20,
            stagger: 0.08,
            ease: 'circ.inOut',
        }, 2)
        .from(".Sub_hero", {
            opacity: 0,
            y: -20,
            duration: 1,
            ease: 'back.inOut'
        }, 3)
        .from(".Btn_hero", {
            opacity: 0,
        }, 3.1)

    //ScrollTrigger

    //Title BestSellers
    titlbs.from('.Arrow_bestseller', {
        opacity: 0,
        x: -50,
        ease: 'circ.inOut',
    })
        .from('.Titl_bestseller', {
            opacity: 0,
            x: -10,
            ease: 'circ.inOut'
        }, 0.2
        )
    //Product BestSellers
    productbs.from(".jacketbs", {
        scale: 0.8,
        opacity: 0,
        ease: 'circ.inOut',
        stagger: 0.2
    })
        .from('.accbs', {
            scale: 0.8,
            opacity: 0,
            ease: 'circ.inOut',
            stagger: 0.2
        })
    //Discover Jackets
    discover.from('.BG_disc', {
        scale: 1.05,
        ease: 'circ.inOut',
        duration: 2
    })
        .from('.Titl_disc', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut',
            duration: 1
        }, 0.2)
        .from('.Sub_disc', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut',
            duration: 1
        }, 0.3)
        .from('.Linked', {
            opacity: 0,
            y: 40,
            duration: 1
        })
    //Discover Accessories
    discoverAcc.from('.BG_acc', {
        scale: 1.05,
        ease: 'circ.inOut',
        duration: 2
    })
        .from('.Titl_acc', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut',
            duration: 1
        }, 0.2)
        .from('.Sub_acc', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut',
            duration: 1
        }, 0.3)
        .from('.LinkedAcc', {
            opacity: 0,
            y: 40,
            duration: 1
        })
    //Costumization
    costum
        .from('.Titl_costum', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut'
        })
        .from('.Sub_costum', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut'
        })
        .from('.HyperLink_costum', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut'
        })
        .from('.Costum_img', {
            opacity: 0,
            x: 100,
            ease: 'circ.inOut'
        }, 1)
    //Footer
    footer.from('.Footer', {
        opacity: 0,
        ease: 'circ.inOut'
    })
        .from('.Titl_footer', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut'
        })
        .from('.Sub_footer', {
            opacity: 0,
            y: 40,
            ease: 'circ.inOut'
        })
        .from('.HyperLink_medsos', {
            opacity: 0,
            y: -10,
            stagger: 0.3,
            ease: 'circ.inOut'
        }, 0.9)
        .from('.HyperLink_footer', {
            opacity: 0,
            y: 10,
            stagger: 0.3,
            ease: 'circ.inOut'
        }, 0.9)
        .from('.CopyRight', {
            opacity: 0,
            y: -10,
            ease: 'circ.inOut'
        }, 0.5)

    //SmoothScrollLenis
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})

</script>

<style scoped></style>