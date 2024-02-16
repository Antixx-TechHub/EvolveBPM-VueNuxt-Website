<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <SuccessStoriesTopBar />
    <SuccessGrid />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SuccessStoriesTopBar from '~/components/successstories/SuccessStoriesTopBar.vue';
import SuccessGrid from '~/components/successstories/SuccessGrid.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>