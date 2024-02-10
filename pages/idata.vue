<template>
  <LayoutOne>
    <IdataStatastics />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import IdataStatastics from '~/components/idata/IdataStatastics.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>