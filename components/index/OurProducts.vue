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
      <div class="row">
        <div v-for="item in service_data" :key="item.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="services__item-5 mb-30 white-bg wow fadeInUp" data-sal="slide-up" data-sal-delay="item.delay"
            data-sal-duration="1000">
            <div class="services__item-5-inner text-center transition-3 white-bg">
              <div class="services__thumb-5">
                <img :src="item.img" alt="" />
              </div>
              <div class="services__content-5">
                <h3 class="services__title-5">
                  <!-- <nuxt-link href="/service-details">{{ item.title }}</nuxt-link> -->
                </h3>
                <p>{{ item.subtitle }}</p>

                <div class="services__btn-5">
                  <nuxt-link href="/" class="tp-link-btn-circle justify-content-center">
                    See More
                    <span>
                      <i class="fa-regular fa-arrow-right"></i>
                      <i class="fa-regular fa-arrow-right"></i>
                    </span>
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
import agn_ser_1 from "~/assets/img/home/app-img1.png";
import agn_ser_2 from "~/assets/img/home/app-img2.png";
import agn_ser_3 from "~/assets/img/home/app-img3.png";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 1,
          delay: "130",
          img: agn_ser_1,
          title: "cross funnel lead generation including MQL / SQL & HQL- appointment set-up.",
          subtitle:
            "Juggling between using all your energy in planning, applying and executing ABM campaigns while demand gen funnel side by side in a broken ecosystem? Let us give you more than just breathing space - a comprehensive habitat for all things.",
        },
        {
          id: 2,
          delay: "150",
          img: agn_ser_2,
          title: "data build, cleanse, verify, validate, intent, install base.",
          subtitle:
            "Is AI smarter than us? May be when it comes to reading data. Which is why it sees patters, practices and preferences that our clients display when interacting with our assets. Want to know what your clients value?",
        },
        {
          id: 3,
          delay: "170",
          img: agn_ser_3,
          title: "research services for company and market research",
          subtitle:
            "All those numbers we keep referring our audience as, its time to strengthen our base foundation with client connections! The perfect tech is one that helps you eliminate communication barriers and build long term trust – want to build.",
        },
      ],
    };
  },
};
</script>