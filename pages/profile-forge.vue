<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <ProfileTopBar />
    <ProfileForgeFirstFrame />
    <ProductsCTAButton />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ProfileTopBar from '~/components/profile-forge/ProfileTopBar.vue';
import ProfileForgeFirstFrame from '~/components/profile-forge/ProfileForgeFirstFrame.vue';
import ProductsCTAButton from "~/components/common/ProductsCTAButton.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>