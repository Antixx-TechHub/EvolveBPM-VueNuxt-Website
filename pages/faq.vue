<template>
  <div>
    <LayoutOne>
    <!-- <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" /> -->
    <faq-breadcrumb/>
    <faq-thumb/>
    <faq-area/>
    <!-- <footer-six :style_2="true"/> -->
    <back-to-top/>
  </LayoutOne>
  </div>
</template>

<script>
// import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import LayoutOne from '~/layouts/LayoutOne.vue';
import FaqBreadcrumb from '~~/components/breadcrumb/FaqBreadcrumb.vue';
import FaqThumb from '~~/components/faqs/FaqThumb.vue';
import FaqArea from '~~/components/faqs/FaqArea.vue';
// import FooterSix from '~~/layouts/footers/FooterSix.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    // HeaderOne,
    LayoutOne,
    FaqBreadcrumb,
    FaqThumb,
    FaqArea,
    // FooterSix,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Faq - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
