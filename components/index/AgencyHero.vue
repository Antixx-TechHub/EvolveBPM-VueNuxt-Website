<template>
  <section class="slider__area box-plr-5-245 slider__height-5 d-flex align-items-center hero-bg-5 p-relative z-index-1 fix">
    <div class="slider__shape">
      <img class="slider__shape-5" src="~/assets/img/slider/5/shape/slider-shape-1.png" alt="shape">
      <img class="slider__shape-6" src="~/assets/img/slider/5/shape/slider-shape-2.png" alt="shape">
      <img class="slider__shape-7" src="~/assets/img/slider/5/shape/slider-shape-3.png" alt="shape">
      <img class="slider__shape-8" src="~/assets/img/slider/5/shape/slider-shape-4.png" alt="shape">
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="slider__content-5">
            <span class="slider__title-pre-5">
              <button class="tp-btnr-yellow tp-btn-shine-effect">
                Updates</button>
              Evolve celebrates Women's Day!
            </span>
            <h3 class="slider__title-5">Unleash<br>Demand Gen<br>Operational<br>Excellence</h3>
            <p>With EvolveBPM, The <strong class="framer-text">White-Labeled, Back-Office Superpower</strong> for global
              agencies and publishers.</p>

            <nuxt-link href="/about" class="tp-btnr-border-2 mb-15 tp-btn-shine-effect tp-link-btn-3">
              Explore
              <span><i class="fa-regular fa-arrow-right"></i></span>
            </nuxt-link>

          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="slider__thumb-5 text-end scene-2">
            <div :class="`brand__slider-5 ${square ? square : ''}`">
                        <div class="brand__slider-5">
                            <swiper class="brand__slider-active-5" :freeMode="true" :loop="true" :autoplay="{
                                delay: 1,
                                pauseOnMouseEnter: true,
                            }" :slidesPerView="1" :centeredSlides="true" :centeredSlidesBounds="true" :speed="4000"
                                :modules="modules" :shortSwipes="false" :longSwipes="false" :allowTouchMove="false"
                                :grabCursor="false" :breakpoints="{
                                    '0': {
                                        slidesPerView: 1,
                                    },
                                    '576': {
                                        slidesPerView: 1,
                                    },
                                    '768': {
                                        slidesPerView: 2,
                                    },
                                    '991': {
                                        slidesPerView: 2,
                                    },
                                    '1200': {
                                        slidesPerView: 2,
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



import slider_img_1 from '~/assets/img/slider/5/slider-img-1.png';
import slider_img_2 from '~/assets/img/slider/5/slider-img-2.png';
import MouseMove from '../mouse-move/MouseMove.vue';

export default {
  components: { MouseMove, Swiper, SwiperSlide },
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
}
</script>