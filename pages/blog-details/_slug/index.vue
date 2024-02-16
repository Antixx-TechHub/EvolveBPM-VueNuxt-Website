<template>
    <div>
      <header-one :header_solid="true" :commonOffcanvas="true" />
      <blog-details-breadcrumb />
      <div v-if="details !== null">
      <blog-details-area v-bind:detailsContent="details"/>
      </div>
      <Footer />
      <back-to-top/>
    </div>
  </template>
  
  <script>
  import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
  import BlogDetailsBreadcrumb from '~~/components/breadcrumb/BlogDetailsBreadcrumb.vue';
  import BlogDetailsArea from '~~/components/blog-details/BlogDetailsArea.vue';
  import Footer from "~~/layouts/footers/Footer.vue";
  import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
  import axios from 'axios';
  
  export default {
    components: { HeaderOne, Footer, BackToTop, BlogDetailsBreadcrumb, BlogDetailsArea },
    setup() {
      useHead({
        title: "Blog Details - Creative Agency & Portfolio Vue Nuxt 3 Template",
      });
    },
    data() {
        return {
            details: null,
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data.sort((b, a) => a.id - b.id);
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
        }
    },
  };
  </script>
  