<template>
  <section :class="`services__area ${style_2 ? 'pb-110' : el_style ? 'pt-110 pb-90' : 'pb-120'}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
          <div :class="`services__item-9 ${style_2 ? 'services__item-style-2' : ''} mb-30 transition-3`">
            <div class="services__item-9-top d-flex align-items-start justify-content-between">
              <div class="services__icon-9">
                <span>
                  <img src="~/assets/img/services/9/services-icon-shape.png" alt="shape" />
                </span>
              </div>
            </div>
            <div class="services__content-9">
              <h3 class="services__title-9">
                Our Vision
              </h3>
              <span class="services-project">To leverage People, Process, Technology to drive Impactful
                Cost-Optimization Solutions for Global markets.</span>
            </div>
          </div>
        </div>

        <div class="col-xxl-5 col-xl-5 col-lg-4 col-md-6">
          <div :class="`services__item-9 ${style_2 ? 'services__item-style-2' : ''} mb-30 transition-3`">
            <div class="services__item-9-top d-flex align-items-start justify-content-between">
              <div class="services__icon-9">
                <span>
                  <img src="~/assets/img/services/9/services-icon-shape.png" alt="shape" />
                </span>
              </div>
            </div>
            <div class="services__content-9">
              <h3 class="services__title-9">
                Our Mission
              </h3>
              <span class="services-project">To deliver Return on Investment (ROI) for every dollar spent by our Global
                Partners.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    style_2: {
      type: Boolean,
      default: false,
    },
    el_style: {
      type: Boolean,
      default: false,
    }
  },
};
</script>
