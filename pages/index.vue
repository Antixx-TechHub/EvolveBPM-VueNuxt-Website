<template>
  <LayoutOne>
    <HomeHero />
    <TailoredServices />
    <Statistics />
    <FunFact />
    <OurProducts />
    <creative-feature />
    <OurMediaAssets />
    <HomeAbout />
    <CertificationsAwards />
    <start-up-counter />
    <HomeCTA />
    <Location />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/index/HomeHero.vue'
import TailoredServices from '~/components/index/TailoredServices.vue';
import Statistics from '~/components/index/Statistics.vue';
import FunFact from '~~/components/index/FunFact.vue';
import OurProducts from "~/components/index/OurProducts.vue";
import CreativeFeature from "~/components/features/CreativeFeature.vue";
import OurMediaAssets from '~/components/skills/FreelancerSkills.vue';
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import StartUpCounter from "~/components/counters/StartUpCounter.vue";
import HomeCTA from "~/components/index/HomeCTA.vue";
import Location from "~/components/index/Location.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>