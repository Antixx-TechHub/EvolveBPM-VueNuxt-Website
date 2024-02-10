<template>
  <LayoutOne>
    <IntelStatastics />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import IntelStatastics from '~/components/inltel/IntelStatastics.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>