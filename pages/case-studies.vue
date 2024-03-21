<template>
  <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
  <Breadcrumb title="Case Studies" subtitle="Case Studies" />
  <GridArea />
  <HomeCTA />
  <Footer />
  <BackToTop />

</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import Breadcrumb from '~~/components/case-studies/Breadcrumb.vue';
import GridArea from '~~/components/case-studies/GridArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';


export default {
  components: { HeaderOne, Breadcrumb, GridArea, HomeCTA, Footer, BackToTop },
  setup() {
    useHead({
      title: "Case Studies - Evolve BPM",
    });
  },
};
</script>