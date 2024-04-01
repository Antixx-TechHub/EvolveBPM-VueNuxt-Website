<template>
  <section class="skill__area grey-bg-77 pt-145 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-65">
            <span class="section__title-pre-2">Our Media Assets</span>
            <h3 class="section__title-2">Our Media Assets</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-7 pb-30">
          <OurMediaAssetsItems :career_data="career_data" />
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="history__thumb-wrapper d-sm-flex pr-70">
            <img src="~/assets/img/home/captive-unit.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import OurMediaAssetsItems from './OurMediaAssetsItems.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';
// internal
import brand_1 from "~/assets/img/brand/5/microsites-1.svg";
import brand_2 from "~/assets/img/brand/5/microsites-2.svg";
import brand_3 from "~/assets/img/brand/5/microsites-3.svg";
import brand_4 from "~/assets/img/brand/5/microsites-4.svg";
import brand_5 from "~/assets/img/brand/5/microsites-5.svg";
import brand_6 from "~/assets/img/brand/5/microsites-6.svg";
import brand_7 from "~/assets/img/brand/5/microsites-7.svg";
import brand_8 from "~/assets/img/brand/5/microsites-8.svg";
import brand_9 from "~/assets/img/brand/5/microsites-9.svg";
import brand_10 from "~/assets/img/brand/5/microsites-10.svg";
import brand_11 from "~/assets/img/brand/5/microsites-11.svg";
import brand_12 from "~/assets/img/brand/5/microsites-12.svg";
import brand_13 from "~/assets/img/brand/5/microsites-13.svg";

export default {
  components: { OurMediaAssetsItems, Swiper, SwiperSlide },
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
      ],
      brand_2_data: [
        { brand: brand_7 },
        { brand: brand_8 },
        { brand: brand_9 },
        { brand: brand_10 },
        { brand: brand_11 },
        { brand: brand_12 },
        { brand: brand_13 },
      ],
      career_data: [
        {
          delay: "130",
          title: "Here is where your audiences thrive in the Evolve ecosystem.",
          designation: "Do you wonder about the impact of reaching your audience through sources they trust? With the changing spam laws, the best way to reach your audience remains through committees they frequently visit. We actively function to create a hub of those! We further leverage this audience to curate disruptive lead-generation strategies. Each strategy is uniquely suited to your needs – adding our end users as highly qualified leads to your dedicated community, one campaign at a time.",
        },
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