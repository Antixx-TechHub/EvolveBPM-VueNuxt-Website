<template>
  <LayoutOne>
    <HomeHero />
    <agency-services/>
    <freelancer-portfolio/>
    <creative-feature/>
    <HomeAbout/>
    <start-up-counter/>
    <HomeCounter/>
    <agency-brands/>
    <about-me-testimonial/>
    <HomePortfolio/>
    <HomeTestimonial/>
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue'
import AgencyServices from '~/components/services/AgencyServices.vue';
import FreelancerPortfolio from '~/components/portfolios/FreelancerPortfolio.vue';
import CreativeFeature from "~/components/features/CreativeFeature.vue";
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import StartUpCounter from "~/components/counters/StartUpCounter.vue";
import HomeCounter from "~/components/counters/HomeCounter.vue";
import AgencyBrands from '~/components/brands/AgencyBrands.vue';
import AboutMeTestimonial from '~~/components/testimonials/AboutMeTestimonial.vue';
import HomePortfolio from "~/components/portfolios/HomePortfolio.vue";
import HomeTestimonial from "~/components/testimonials/HomeTestimonial.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
}); 

</script>
