<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <job-details-area/>
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import JobDetailsArea from '~~/components/job/JobDetailsArea.vue';
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    JobDetailsArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Job Details - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
