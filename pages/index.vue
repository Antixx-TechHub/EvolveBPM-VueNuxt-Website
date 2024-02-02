<template>
  <LayoutOne>
    <HomeHero />
    <TailoredServices />
    <Statistics />
    <FunFact />
    <OurProducts />
    <DeliveryChannels />
    <OurMediaAssets />
    <DataStrategy />
    <CertificationsAwards />
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
import DeliveryChannels from "~/components/index/DeliveryChannels.vue";
import OurMediaAssets from '~/components/index/OurMediaAssets.vue';
import DataStrategy from "~/components/index/DataStrategy";
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Location from "~/components/index/Location.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>