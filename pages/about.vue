<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="Story bg-white text-black lg:h-full h-[100vh] flex flex-col justify-between">
            <div class="overflow-hidden">
                <img src="@/assets/img/Story.jpg" alt="Story" class="w-full BG_story lg:mt-0 mt-12" />
            </div>
            <div class="Desc paddingXY">
                <p class="font-bodoni lg:text-[41px] text-[2rem]">Our Story</p>
                <p class="relative font-lora">
                    Agro yang berasal dari singkatan
                    <b class="sptext"><i>(Anak Garut Rea Order)</i></b> , yaitu seorang
                    owner yang lahir di garut dan berkuliah di jurusan
                    <b class="sptext"><i>Agronomi</i></b> dengan membuka peluang usaha
                    konveksi jaket kulit yang di dirikan pada
                    <b class="sptext"><i> 25 Oktober 1995 </i> </b>.
                </p>
            </div>

            <!-- Footer -->
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
// import SplitType from "split-type";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const isHidden = ref(true);
onMounted(() => {
    // let text = new SplitType("");
    let tl = gsap.timeline();

    tl.from('.Navbar', {
        y: '-200%',
        ease: 'sine.inOut',
        duration: 1
    }).from(".BG_story", {
        opacity: 0,
        duration: 1.2,
        scale: 1.09,
    })

    .from(".sptext", {
        opacity: 0,
        stagger: 0.06,
        x: -100,
        duration: 1.3,
        ease: "circ.inOut",
    }, 0.3)

    //SmoothScrollLenis
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
});
</script>

<style scoped></style>