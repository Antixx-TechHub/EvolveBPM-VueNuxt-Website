<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <about-top-bar />
    <faq-area />
    <HomeCTA />
    <Footer />
    <BackToTop />

  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import AboutTopBar from "~~/components/faqs/AboutTopBar.vue";
import FaqArea from '~~/components/faqs/FaqArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    AboutTopBar,
    FaqArea,
    HomeCTA,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Faq - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>