<template>
    <header-one :top_bar="false" :header_solid="true" :commonOffcanvas="true" />
    <DetailsBreadcrumb v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
    <div>
        <div v-if="details !== null">
            <CaseDetails v-bind:detailsContent="details" />
        </div>
        <!-- <HomeCTA /> -->
        <Footer />
        <BackToTop />
    </div>
</template>

<script>
import HeaderOne from "~~/layouts/headers/HeaderOne.vue";
import DetailsBreadcrumb from '~~/components/case-studies/DetailsBreadcrumb.vue';
import CaseDetails from '~~/components/case-studies/CaseDetails.vue';
// import HomeCTA from "~/components/index/HomeCTA.vue";
import Footer from '~~/layouts/footers/Footer.vue';
import BackToTop from '~~/layouts/footers/component/BackToTop.vue';
import axios from 'axios';
import { useRoute } from 'vue-router'
export default {
    components: {
        HeaderOne,
        DetailsBreadcrumb,
        CaseDetails,
        // HomeCTA,
        Footer,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/case-studies?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
    }
};
</script>