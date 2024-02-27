<template>
  <div>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <team-details-area/>
    <team-details-about/>
    <!-- <lawyer-blogs :style_2="true" /> -->
    <Footer />
    <back-to-top />
  </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import TeamDetailsArea from '~~/components/team-details/TeamDetailsArea.vue';
import TeamDetailsAbout from '~~/components/team-details/TeamDetailsAbout.vue';
// import LawyerBlogs from '~~/components/blogs/LawyerBlogs.vue';
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';

export default {
  components: {
    HeaderOne,
    TeamDetailsArea,
    TeamDetailsAbout,
    // LawyerBlogs,
    Footer,
    BackToTop,
  },
  setup() {
    useHead({
      title: "Team Details - Revenue Impact Solution in USA",
    });
  },
};
</script>
