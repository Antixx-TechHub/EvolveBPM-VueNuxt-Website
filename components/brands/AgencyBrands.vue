<template>
  <section :class="`services__area ${style_2 ? 'pt-120' : ''} ${el_style ? 'pt-110' : ''} `">
    <div class="container">
      <div v-if="!style_2 && !el_style" class="row align-items-end">
        <div class="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8">
          <div class="section__title-wrapper pt-100 mb-60">
            <h4 class="section__title">
              <span class="section__title-highlight">Certifications
                <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor" />
                </svg>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section :class="`brand__area ${spacing ? 'pb-120' : ''} ${el_style ? 'pt-110 pb-120' : ''
    }`">
    <div class="container-fluid g-0">
      <div v-if="el_style" class="row gx-0">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-60 text-center">
            <span class="tp-section-subtitle-3">Modern & Clean Design</span>
            <h3 class="tp-section-title-3">Brand Rounded Slider</h3>
          </div>
        </div>
      </div>
      <div class="row gx-0 gy-2">
        <div class="col-xxl-12">
          <div :class="`brand__slider-5 ${square ? square : ''}`">
            <div class="brand__slider-5">
              <swiper class="brand__slider-active-5" :freeMode="true" :loop="true" :autoplay="{
                delay: 1,
                pauseOnMouseEnter: true,
              }" :slidesPerView="1" :centeredSlides="true" :centeredSlidesBounds="true" :speed="4000"
                :modules="modules" :shortSwipes="false" :longSwipes="false" :allowTouchMove="false" :grabCursor="false"
                :breakpoints="{
                  '0': {
                    slidesPerView: 1,
                  },
                  '576': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 4,
                  },
                  '991': {
                    slidesPerView: 5,
                  },
                  '1200': {
                    slidesPerView: 7,
                  },
                }">
                <swiper-slide v-for="(brand, i) in brand_1_data" :key="i">
                  <div class="brand__item-5">
                    <img :src="brand.brand" alt="brand" />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div class="col-xxl-12">
          <section :class="`services__area ${style_2 ? 'pt-120' : ''} ${el_style ? 'pt-110' : ''} `">
            <div class="container">
              <div v-if="!style_2 && !el_style" class="row align-items-end">
                <div class="col-xxl-7 col-xl-5 col-lg-8 col-md-8 col-sm-8">
                  <div class="section__title-wrapper pt-50 mb-60">
                    <h4 class="section__title">
                      <span class="section__title-highlight">Certifications
                        <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                          <path
                            d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div :class="`brand__slider-5-1 ${square ? square : ''}`">
            <div class="brand__slider-5">
              <swiper ref="swiper_slide" class="brand__slider-active-5-1" :freeMode="true" :loop="true" :autoplay="{
                delay: 1,
                disableOnInteraction: true,
                reverseDirection: true,
              }" :slidesPerView="1" :centeredSlides="true" :speed="5000" :modules="modules" :shortSwipes="false"
                :longSwipes="false" :allowTouchMove="false" :grabCursor="false" :breakpoints="{
                  '0': {
                    slidesPerView: 1,
                  },
                  '576': {
                    slidesPerView: 2,
                  },
                  '768': {
                    slidesPerView: 4,
                  },
                  '991': {
                    slidesPerView: 5,
                  },
                  '1200': {
                    slidesPerView: 7,
                  },
                }">
                <swiper-slide v-for="(brand, i) in brand_2_data" :key="i">
                  <div class="brand__item-5">
                    <img :src="brand.brand" alt="brand" />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';
// internal
import brand_1 from "~/assets/img/brand/5/brand-1.png";
import brand_2 from "~/assets/img/brand/5/brand-2.png";
import brand_3 from "~/assets/img/brand/5/brand-3.png";
import brand_4 from "~/assets/img/brand/5/brand-4.png";
import brand_5 from "~/assets/img/brand/5/brand-5.png";
import brand_6 from "~/assets/img/brand/5/brand-6.png";
import brand_7 from "~/assets/img/brand/5/brand-7.png";
import brand_8 from "~/assets/img/brand/5/brand-8.png";

export default {
  components: { Swiper, SwiperSlide },
  props: {
    spacing: {
      type: Boolean,
      default: false,
    },
    style_2: {
      type: Boolean,
      default: false,
    },
    el_style: {
      type: Boolean,
      default: false,
    },
    square: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      brand_1_data: [
        { brand: brand_1 },
        { brand: brand_2 },
        { brand: brand_3 },
        { brand: brand_4 },
        { brand: brand_5 },
        { brand: brand_6 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_4 },
        { brand: brand_6 },
        { brand: brand_1 },
      ],
      brand_2_data: [
        { brand: brand_1 },
        { brand: brand_3 },
        { brand: brand_6 },
        { brand: brand_5 },
        { brand: brand_8 },
        { brand: brand_2 },
        { brand: brand_7 },
        { brand: brand_2 },
        { brand: brand_5 },
        { brand: brand_1 },
        { brand: brand_6 },
      ],
    };
  },
  setup() {

    return {
      modules: [Autoplay],
    };
  },
  mounted() { },
};
</script>