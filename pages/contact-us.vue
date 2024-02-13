<template>
  <LayoutOne>
    <ContactFirstFrame />
    <CertificationsAwards />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import ContactFirstFrame from '~/components/contact/ContactFirstFrame.vue';
import CertificationsAwards from '~/components/index/CertificationsAwards.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>