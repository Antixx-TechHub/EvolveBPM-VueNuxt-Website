<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <ConnectMetricsTopBar />
    <ConnectMetricFirstFrame />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ConnectMetricsTopBar from '~/components/connectmetric/ConnectMetricsTopBar.vue';
import ConnectMetricFirstFrame from '~/components/connectmetric/ConnectMetricFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>