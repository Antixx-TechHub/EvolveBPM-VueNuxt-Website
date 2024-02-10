<template>
  <LayoutOne>
    <InovatorFirstFrame />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import InovatorFirstFrame from '~/components/inovator/InovatorFirstFrame.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>