<template>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <LeadershipTopBar />
    <IntelStatastics />
    <home-teams :style_2="true" />
    <HomeCTA />
    <Footer />

</template>

<script setup>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import LeadershipTopBar from '~/components/leadership/LeadershipTopBar.vue';
import IntelStatastics from '~/components/inltel/IntelStatastics.vue';
import HomeTeams from "~~/components/teams/HomeTeams.vue";
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';


useHead({
  title: "EvolveBPM - Revenue Impact Solution in USA",
});

</script>