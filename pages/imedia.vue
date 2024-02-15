<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <ImediaTopBar />
    <ImediaStatastics />
    <ServicesCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ImediaTopBar from '~/components/imedia/ImediaTopBar.vue';
import ImediaStatastics from '~/components/imedia/ImediaStatastics.vue';
import ServicesCTA from "~/components/common/ServicesCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>