<template>
  <LayoutOne>
    <PredictorFirstFrame />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import PredictorFirstFrame from '~/components/predictor/PredictorFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>