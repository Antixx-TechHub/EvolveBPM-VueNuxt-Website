<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <IntelloTopBar />
    <IntelStatastics />
    <ServicesCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import IntelloTopBar from '~/components/inltel/IntelloTopBar.vue';
import IntelStatastics from '~/components/inltel/IntelStatastics.vue';
import ServicesCTA from "~/components/common/ServicesCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>