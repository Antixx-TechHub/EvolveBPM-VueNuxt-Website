<template>
  <LayoutOne>
    <HomeHero />
    <TailoredServices />
    <Statistics />
    <OurProducts />
    <creative-feature />
    <OurMediaAssets />
    <about-me-testimonial />
    <HomeAbout />
    <CertificationsAwards />
    <start-up-counter />
    <HomePortfolio />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/index/HomeHero.vue'
import TailoredServices from '~/components/index/TailoredServices.vue';
import Statistics from '~/components/index/Statistics.vue';
import OurProducts from "~/components/index/OurProducts.vue";
import CreativeFeature from "~/components/features/CreativeFeature.vue";
import OurMediaAssets from '~/components/skills/FreelancerSkills.vue';
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import StartUpCounter from "~/components/counters/StartUpCounter.vue";
import AboutMeTestimonial from '~~/components/testimonials/AboutMeTestimonial.vue';
import HomePortfolio from "~/components/portfolios/HomePortfolio.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>