<template>
  <LayoutOne>
    <IrevStatastics />
    <HomeCTA />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import IrevStatastics from '~/components/Irev/IrevStatastics.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";

useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>