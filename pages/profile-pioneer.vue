<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <IntelloTopBar />
    <IntelloFirstFrame />
    <ProductsCTAButton />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import IntelloTopBar from '~/components/profile-pioneer/ProfileTopBar.vue';
import IntelloFirstFrame from '~/components/profile-pioneer/ProfileForgeFirstFrame.vue';
import ProductsCTAButton from "~/components/common/ProductsCTAButton.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>