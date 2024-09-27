<template>
    <div>
        <!-- Navbar -->
        <Header />

        <!-- Content -->
        <div class="Story bg-white text-black">
            <div class="overflow-hidden">
                <img src="@/assets/img/Story.jpg" alt="Story" class="w-full BG_story" />
            </div>
            <div class="Desc paddingX">
                <p class="font-bodoni text-[41px]">Our Story</p>
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
import SplitType from "split-type";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const isHidden = ref(true);

//Shown Navbar
function menu() {
    isHidden.value = !isHidden.value;
}

onMounted(() => {
    // let text = new SplitType("");
    let tl = gsap.timeline();
    let st = gsap.timeline({
        scrollTrigger: {
            start: 'center center',
            end: '70% 60%',
        }
    })

    tl.from('.Navbar', {
        y: '-200%',
        ease: 'sine.inOut',
        duration: 1
    }).from(".BG_story", {
        opacity: 0,
        duration: 1.2,
        scale: 1.09,
    })

    st.from(".sptext", {
        opacity: 0,
        stagger: 0.06,
        x: -100,
        duration: 1.3,
        ease: "circ.inOut",
    })

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