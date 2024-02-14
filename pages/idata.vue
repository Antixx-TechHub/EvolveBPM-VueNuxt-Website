<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <IdataTopBar />
    <IdataStatastics />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import IdataTopBar from '~/components/idata/IdataTopBar.vue';
import IdataStatastics from '~/components/idata/IdataStatastics.vue';
import HomeCTA from "~/components/index/HomeCTA.vue"; 
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>