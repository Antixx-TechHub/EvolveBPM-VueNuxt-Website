<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <CaseStudiesTopBar />
    <CaseStudiesGrid />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import CaseStudiesTopBar from '~/components/casestudies/CaseStudiesTopBar.vue';
import CaseStudiesGrid from '~/components/casestudies/CaseStudiesGrid.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>