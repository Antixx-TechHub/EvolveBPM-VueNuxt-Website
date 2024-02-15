<template>
  <header-one :top_bar="false" :commonOffcanvas="true" />
  <IrevTopBar />
  <IrevStatastics />
  <ServicesCTA />
  <Footer />
</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import IrevTopBar from '~/components/Irev/IrevTopBar.vue';
import IrevStatastics from '~/components/Irev/IrevStatastics.vue';
import ServicesCTA from "~/components/common/ServicesCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>