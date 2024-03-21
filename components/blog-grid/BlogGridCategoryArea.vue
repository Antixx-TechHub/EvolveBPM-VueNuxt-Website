<template>
  <section class="blog__grid grey-bg-4 pt-90 pb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6" v-for="blog in details[0].attributes?.blogs?.data"
          :key="blog.id">
          <div class="blog__item-10 white-bg transition-3 mb-30 fix">
            <div class="blog__thumb-10 w-img fix">
              <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                <img :src="blog?.attributes?.image?.data?.attributes?.url" alt="blog">
              </NuxtLink>
            </div>
            <div class="blog__content-10">
              <div class="blog__content-10-top">
                <h3 class="blog__title-10">
                  <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                    {{ blog.attributes.title }}
                  </NuxtLink>
                </h3>
                <p>{{ blog.attributes.shortDesc }}...</p>
              </div>
              <div class="blog__content-10-bottom d-flex align-items-center justify-content-between">
                <div class="blog__meta-author-10 d-flex align-items-center">
                  <div class="blog__meta-author-thumb-10">
                    <a href="#">
                      <img :src="blog.attributes.avtar.data.attributes.url" alt="avtar">
                    </a>
                  </div>
                  <div class="blog__meta-author-content-10">
                    <span>
                      By <a href="#">{{ blog.attributes.author }}</a>
                    </span>
                  </div>
                </div>
                <div class="blog__meta-10 blog-meta-10-2">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  {{ blog.attributes.date }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-pagination mt-20">
            <blog-pagination />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogPagination from '../common/pagination/BlogPagination.vue';


export default {
  name: 'CategoryDetails',
  props: ['detailsContent'],
  components: {
    BlogPagination,
  },
  data: function () {
    return {
      details: this.detailsContent,
      categories: [],
    }
  },
}
</script>