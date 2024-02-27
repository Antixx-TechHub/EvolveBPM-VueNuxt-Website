<template>
  <header-one :top_bar="false" :commonOffcanvas="true" />
  <DemoTopBar />

  <div class="container pt-100 pb-100">
    <div class="contact__form-2">
      <h3 class="contact__form-2-title">Send a message</h3>
      <contact-form />
    </div> 
  </div>

  <HomeCTA />
  <Footer />
</template>
<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DemoTopBar from '~/components/requestdemo/DemoTopBar.vue';
import ContactForm from '~/components/forms/ContactForm.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';

export default {
  components: { HeaderOne, Footer, ContactForm, HomeCTA, DemoTopBar },
  setup() {
    useHead({
      title: "Blog Grid - Creative Agency & Portfolio Vue Nuxt 3 Template",
    });
  },
};

</script>