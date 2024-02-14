<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <contact-area/>
    <Footer/>
    <back-to-top/>
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import ContactArea from '~~/components/contact/ContactArea.vue';
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    ContactArea,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Contact - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};
</script>
