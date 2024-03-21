<template>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <blog-details-breadcrumb v-if="details !== null" :pageTitle="details[0].attributes.title"
        pageDesc="News and Insights" />
    <div>
        <div v-if="details !== null">
            <FeaturedBlogDetails v-bind:detailsContent="details" />
        </div>
        <HomeCTA />
        <FooterFour />
        <footer-eight />
        <back-to-top />
    </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import BlogDetailsBreadcrumb from '~~/components/blog-grid/BlogDetailsBreadcrumb.vue';
import FeaturedBlogDetails from '~~/components/blog-grid/FeaturedBlogDetails.vue';
import HomeCTA from "~/components/subscribe/SubscribeNow.vue";
import FooterFour from '~~/layouts/footers/FooterFour.vue';
import FooterEight from '~~/layouts/footers/FooterEight.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    components: {
        HeaderOne,
        BlogDetailsBreadcrumb,
        FeaturedBlogDetails,
        HomeCTA,
        FooterFour,
        FooterEight,
        BackToTop,
    },
    data() {
        return {
            details: null
        }
    },
    created: async function () {
        const route = useRoute();
        const slug = route.params.id;
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/featuredblogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>