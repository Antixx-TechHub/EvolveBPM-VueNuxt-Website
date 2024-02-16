<template>
  <section class="blog__grid grey-bg-4 pt-90 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper section-title-sm mb-60">
            <h3 class="section__title">
              Our latest
              <span class="section__title-highlight">articles
                <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                  <path class="wow"
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor" />
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </div>


      <div class="row justify-content-center">
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6" v-for="blog in blogs.slice(
          (currentPage - 1) * perPage,
          currentPage * perPage,
        )" :key="blog.id">
          <div class="blog__item-10 white-bg transition-3 mb-30 fix">
            <div class="blog__thumb-10 w-img fix">
              <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
              </NuxtLink>

              <div class="blog__tag-10">
                <!-- <a href="#">{{ item.tag }}</a> -->
              </div>
            </div>
            <div class="blog__content-10">
              <div class="blog__content-10-top">
                <div class="blog__tag-10">
                  <!-- <a href="#">{{ item.tag }}</a> -->
                </div>
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
import blogData from '~~/mixins/blogData';
import BlogPagination from '../common/pagination/BlogPagination.vue';
import axios from 'axios'

export default {
  components: {
    BlogPagination,
  },
  mixins: [blogData],
  data() {
    return {
      blogs: [],
      rows: 0,
      currentPage: 1,
      perPage: 9,
    }
  },
  created: async function () {
    const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
    this.blogs = response.data.data.sort((b, a) => a.id - b.id);
    this.rows = this.blogs?.length;
  },
}
</script>