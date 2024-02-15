<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <InovatorTopBar />
    <InovatorFirstFrame />
    <ProductsCTAButton />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import InovatorTopBar from '~/components/inovator/InovatorTopBar.vue';
import InovatorFirstFrame from '~/components/inovator/InovatorFirstFrame.vue';
import ProductsCTAButton from "~/components/common/ProductsCTAButton.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>