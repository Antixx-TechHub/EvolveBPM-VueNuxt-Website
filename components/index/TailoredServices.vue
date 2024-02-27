<template>
  <section id="tpabout" class="services__area services-bg pt-110 pb-50 p-relative z-index-1">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-10 col-xl-10 col-lg-10">
          <div class="services__section-title-5" data-sal="slide-up" data-sal-delay="150" data-sal-duration="1000">
            <div class="section__title-wrapper-5 mb-70 text-center">
              <h3 class="section__title-5">
                Services Tailored for You
              </h3>
              <span class="section__title-pre-5">Tailor-made demand generation services, meticulously designed to align
                with your unique business needs and drive optimal results.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in service_data" :key="item.id" class="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
          <div class="services__item-5 mb-30 white-bg wow fadeInUp" data-sal="slide-up" data-sal-delay="item.delay"
            data-sal-duration="1000">
            <div class="services__item-5-inner text-center transition-3 white-bg">
              <div class="services__thumb-5">
                <img :src="item.img" alt="" />
              </div>
              <div class="tp-button-demo"><a href="#" class="tp-btn-blue-2 tp-link-btn-3">{{ item.product }}</a></div>
              <div class="services__content-5">
                <h3 class="services__title-5">
                  <i> <nuxt-link href="/">{{ item.title }}</nuxt-link> </i>
                </h3>
                <!-- <p>{{ item.subtitle }}</p> -->

                <div class="tp-button-demo">
                  <nuxt-link href="/" class="tp-link-btn-2 mr-15"> Know More <span><svg width="14" height="14"
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
import agn_ser_2 from "~/assets/img/home/app-img2.png";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 1,
          delay: "130",
          img: agn_ser_2,
          product: "iRev",
          title: "cross funnel lead generation including MQL / SQL & HQL- appointment set-up.",
          subtitle:
            "where the i stands for ‘Impact’ and Rev is for the leads we are all set to generate to add to your ‘Revenue’! Are you looking to create a community with high growth opportunities? ",
        },
        {
          id: 2,
          delay: "150",
          img: agn_ser_2,
          product: "iData",
          title: "data build, cleanse, verify, validate, intent & install base.",
          subtitle:
            "Your one stop shop for all your data needs. Whether it is to build a data base, cleanse an existing database, verify and validate or study intent – our expert data analysts have you covered.",
        },
        {
          id: 3,
          delay: "170",
          img: agn_ser_2,
          product: "iIntel",
          title: "research services for company and market research.",
          subtitle:
            "What would you call a disruptive lead data generator that has the capability to give you 70%-90% conversion ready data – a tool or a gold mine? We are set to dig for you!.",
        },
        {
          id: 4,
          delay: "170",
          img: agn_ser_2,
          product: "iMedia",
          title: "digital services including programmatic display, LinkedIn, paid social media.",
          subtitle:
            "How strong would your social language be if your media content creation was built on two pillars – audience demand and our corresponding solutions? With expertise and in-depth research, we are set to hijack engagement!",
        },

      ],
    };
  },
};
</script>