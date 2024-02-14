<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <PredictorTopBar />
    <PredictorFirstFrame />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import PredictorTopBar from '~/components/predictor/PredictorTopBar.vue';
import PredictorFirstFrame from '~/components/predictor/PredictorFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>