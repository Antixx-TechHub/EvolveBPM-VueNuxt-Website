<template>
    <section class="postbox__area blog-bg-4 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="postbox__wrapper">
                        <div class="postbox__top">
                            <div class="postbox__thumb m-img mb-55">
                                <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                            </div>
                        </div>
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="postbox__main-wrapper">
                                        <div class="postbox__meta-wrapper d-flex align-items-center flex-wrap">
                                            <div class="postbox__meta-item mb-30">
                                                <div class="postbox__meta-author d-flex align-items-center">
                                                    <div class="postbox__meta-author-thumb">
                                                        <a href="#">
                                                            <img :src="details[0].attributes.image.data.attributes.url"
                                                                alt="image">
                                                        </a>
                                                    </div>
                                                    <div class="postbox__meta-content">
                                                        <span class="postbox__meta-type">Author</span>
                                                        <p class="postbox__meta-name">{{ details[0].attributes.author }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="postbox__meta-item mb-30">
                                                <div class="postbox__meta-content">
                                                    <span class="postbox__meta-type">Published</span>
                                                    <p class="postbox__meta-name">{{ details[0].attributes.date }}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-7 postbox__meta-item mb-30">
                                                <div class="postbox__share text-xl-end">
                                                    <span>Share On:</span>
                                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="postbox__details-content-wrapper">
                                            <span v-html="details[0].attributes.longDesc"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <!-- blog sidebar start -->
                                    <blog-sidebar />
                                    <!-- blog sidebar end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import BlogSidebar from '~~/components/blog-grid/BlogSidebar.vue';

export default {
    name: 'BlogDetails',
    components: { BlogSidebar },
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
        }
    },
}
</script>