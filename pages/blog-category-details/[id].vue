<template>
  <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
  <blog-breadcrumb title="Our Blog categories" subtitle="Blog" />
  <div>
    <div v-if="category !== null">
      <BlogGridCategoryArea v-bind:detailsContent="category" />
    </div>
    <HomeCTA />
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogBreadcrumb from '~~/components/blog-grid/BlogBreadcrumb.vue';
import BlogGridCategoryArea from '~~/components/blog-grid/BlogGridCategoryArea.vue';
import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from "~~/layouts/footers/Footer.vue";
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
  components: {
    HeaderOne,
    BlogBreadcrumb,
    BlogGridCategoryArea,
    HomeCTA,
    Footer,
    BackToTop,
  },
  data() {
    return {
      category: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const route = useRoute();
        const slug = route.params.id;
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/blog-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>