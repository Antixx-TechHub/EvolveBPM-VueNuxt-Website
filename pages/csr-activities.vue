<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <SectionTitle title="Corporate Social Responsibility (CSR)" subtitle="at Evolve BPM" />
    <PolicyArea />
    <HomeCTA />
    <Footer />
</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from '~~/components/csr-activities/SectionTitle.vue';
import PolicyArea from '~~/components/csr-activities/PolicyArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>