<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <section-title title="Privacy Policy" subtitle=""/>
      <policy-area/>
      <Footer />
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import SectionTitle from '~~/components/policy-terms/SectionTitle.vue';
import PolicyArea from '~~/components/policy-terms/PolicyArea.vue';
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    SectionTitle,
    PolicyArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Policy - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
