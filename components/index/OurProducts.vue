<template>
  <section class="services__area services-bg pt-110 pb-50 p-relative z-index-1">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10 col-lg-10">
          <div class="services__section-title-5" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="section__title-wrapper-5 mb-70 text-center">
              <h3 class="section__title-5">
                Our Products
              </h3>
              <span class="section__title-pre-5">Tailor-made demand generation services, meticulously designed to align
                with your unique business needs and drive optimal results.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="item in service_data" :key="item.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="services__item-5 mb-30 white-bg wow fadeInUp" data-sal="slide-up" data-sal-delay="item.delay"
            data-sal-duration="1000">
            <div class="services__item-5-inner text-center transition-3 white-bg">
              <div class="services__thumb-5">
                <img :src="item.img" alt="" />
              </div>
              <div class="tp-button-demo pt-30"><a href="#" class="tp-btn-blue-2 tp-link-btn-3">{{ item.product }}</a>
              </div>
              <div class="services__content-5">
                <h3 class="services__title-5">
                  <nuxt-link href="/">{{ item.title }}</nuxt-link>
                </h3>
                <p>{{ item.subtitle }}</p>

                <div class="tp-button-demo">
                  <nuxt-link href="/" class="tp-link-btn-2 mr-15"> Learn More <span><svg width="14" height="14"
                        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                        <path d="M7 1L13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </svg></span>
                  </nuxt-link>
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
// service image
import predictor from "~/assets/img/home/predictor-abm.svg";
import profilepioneer from "~/assets/img/home/profile-pioneer.svg";
import Intello from "~/assets/img/home/Intello.svg";
import connectmetrics from "~/assets/img/home/connect-metrics.svg";
import innovator from "~/assets/img/home/innovator.svg";
import agn_ser_1 from "~/assets/img/home/app-img2.png";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 3,
          delay: "170",
          img: connectmetrics,
          product: "Connect Metrics",
          title: "LinkedIn Relationship Metrics Tool.",
          // subtitle:
          //   "All those numbers we keep referring our audience as it's time to strengthen our base foundation with client connections! The perfect tech helps you eliminate communication barriers and build long-term trust – want to build yours?",
        },
        {
          id: 4,
          delay: "150",
          img: profilepioneer,
          product: "Profile Pioneer",
          title: "Evolve’s LinkedIn Profiling Tool.",
          // subtitle:
          //   "Is AI smarter than us? Maybe when it comes to reading data. This is why it sees patterns, practices, and preferences that our clients display when interacting with our assets. Want to know what your clients value?",
        },
        {
          id: 5,
          delay: "170",
          img: innovator,
          product: "Innovator",
          title: "AI-based Digital Marketing Platform.",
          // subtitle:
          //   "All those numbers we keep referring our audience as it's time to strengthen our base foundation with client connections! The perfect tech helps you eliminate communication barriers and build long-term trust – want to build yours?",
        },
        {
          id: 1,
          delay: "130",
          img: predictor,
          product: "PredictorABM",
          title: "Intelligent AI-Driven Account Management.",
          // subtitle:
          //   "Juggling between using all your energy in planning, applying, and executing ABM campaigns while demand gen funnel side by side in a broken ecosystem? Let us give you more than just breathing space - a comprehensive habitat for all things that make up your campaign.",
        },
        {
          id: 2,
          delay: "150",
          img: Intello,
          product: "intello",
          title: "Market & Competitive Intelligence Platform.",
          // subtitle:
          //   "Is AI smarter than us? Maybe when it comes to reading data. This is why it sees patterns, practices, and preferences that our clients display when interacting with our assets. Want to know what your clients value?",
        },
      ],
    };
  },
};
</script>