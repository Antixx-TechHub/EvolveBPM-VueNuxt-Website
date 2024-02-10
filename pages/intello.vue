<template>
  <LayoutOne>
    <IntelloFirstFrame />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import IntelloFirstFrame from '~/components/intello/IntelloFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>