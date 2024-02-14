<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <IntelloTopBar />
    <IntelloFirstFrame />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import IntelloTopBar from '~/components/intello/IntelloTopBar.vue';
import IntelloFirstFrame from '~/components/intello/IntelloFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>