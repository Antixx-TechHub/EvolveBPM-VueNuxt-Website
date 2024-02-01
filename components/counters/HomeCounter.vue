<template>
  <section class="services__area grey-bg-8 pt-110 pb-50 p-relative z-index-1">
    <div class="services__shape">
      <img
        class="services__shape-4"
        src="~/assets/img/services/5/shape/services-shape-1.png"
        alt="shape"
      />
      <img
        class="services__shape-5"
        src="~/assets/img/services/5/shape/services-shape-2.png"
        alt="shape"
      />
      <img
        class="services__shape-6"
        src="~/assets/img/services/5/shape/services-shape-3.png"
        alt="shape"
      />
      <img
        class="services__shape-7"
        src="~/assets/img/services/5/shape/services-shape-4.png"
        alt="shape"
      />
      <img
        class="services__shape-8"
        src="~/assets/img/services/5/shape/services-shape-5.png"
        alt="shape"
      />
      <img
        class="services__shape-9"
        src="~/assets/img/services/5/shape/services-shape-6.png"
        alt="shape"
      />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-8 col-lg-10">
          <div
            class="services__section-title-5"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="1000"
          >
            <div class="section__title-wrapper-5 mb-70 text-center">
              <h3 class="section__title-5">
                Services Tailored for You
              </h3>
              <span class="section__title-pre-5">Tailor-made demand generation services, meticulously designed to align with your unique business needs and drive optimal results.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="item in service_data"
          :key="item.id"
          class="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
        >
          <div
            class="services__item-5 mb-30 white-bg wow fadeInUp"
            data-sal="slide-up"
            data-sal-delay="item.delay"
            data-sal-duration="1000"
          >
            <div
              class="services__item-5-inner text-center transition-3 white-bg"
            >
            <div class="services__thumb-5">
                <img :src="item.img" alt="" />
              </div>
              <div class="services__content-5">
                <h3 class="services__title-5">
                  <nuxt-link href="/service-details">{{ item.title }}</nuxt-link>
                </h3>
                <p>{{ item.subtitle }}</p>

                <div class="services__btn-5">
                  <nuxt-link
                    href="/service-details"
                    class="tp-link-btn-circle justify-content-center"
                  >
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
import agn_ser_1 from "~/assets/img/services/5/services-1.png";
import agn_ser_2 from "~/assets/img/services/5/services-2.png";
import agn_ser_3 from "~/assets/img/services/5/services-3.png";
import SalScrollAnimationMixin from '~/mixins/SalScrollAnimationMixin';

export default {
  mixins:[SalScrollAnimationMixin],
  data() {
    return {
      service_data: [
        {
          id: 1,
          delay: "130",
          img: agn_ser_1,
          title: "cross funnel lead generation including MQL / SQL & HQL- appointment set-up.",
          subtitle:
            "where the i stands for ‘Impact’ and Rev is for the leads we are all set to generate to add to your ‘Revenue’! Are you looking to create a community with high growth opportunities?",
        },
        {
          id: 2,
          delay: "150",
          img: agn_ser_2,
          title: "data build, cleanse, verify, validate, intent, install base.",
          subtitle:
            "Your one stop shop for all your data needs. Whether it is to build a data base, cleanse an existing database, verify and validate or study intent – our expert data analysts have you covered.",
        },
        {
          id: 3,
          delay: "170",
          img: agn_ser_3,
          title: "research services for company and market research",
          subtitle:
            "What would you call a disruptive lead data generator that has the capability to give you 70%-90% conversion ready data – a tool or a gold mine? We are set to dig for you!",
        },
      ],
    };
  },
};
</script>
