<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <MethodologyTopBar />
    <IntelStatastics />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import MethodologyTopBar from '~/components/methodogy/MethodologyTopBar.vue';
import IntelStatastics from '~/components/inltel/IntelStatastics.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>