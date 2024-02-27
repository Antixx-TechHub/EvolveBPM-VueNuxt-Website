<template>
  <div>
    <header-one :top_bar="false" :commonOffcanvas="true" />
    <team-breadcrumb
      title="We’ve Most Talented Team Members"
      subtitle="Team Members"
    />
    <team-area />
    <!-- <job-area/> -->
    <HomeCTA />
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import TeamBreadcrumb from "~~/components/breadcrumb/CommonBreadcrumb.vue";
import TeamArea from "~~/components/teams/TeamArea.vue";
// import JobArea from '~~/components/job-position/JobArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    TeamBreadcrumb,
    TeamArea,
    Footer,
    // JobArea,
    HomeCTA,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Team - Revenue Impact Solution in USA",
    });
  },
};
</script>
