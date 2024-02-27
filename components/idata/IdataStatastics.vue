<template>
  <section class="about__area pt-130 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="about__thumb-15 p-relative z-index-1 w-img" data-sal="slide-up" data-sal-delay="130"
            data-sal-duration="1000">
            <div class="about__thumb-15-shape">
              <img src="~/assets/img/about/15/about-thumb-shape.png" alt="shape" />
            </div>
            <img class="about__thumb-15-shape-2" src="~/assets/img/about/15/about-thumb-shape-2.png" alt="" />
            <img src="~/assets/img/home/idata.png" alt="shape" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about__wrapper-15 pl-45" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000">
            <div class="tp-section-wrapper-3 mb-25">
              <span class="tp-section-subtitle-3">iData</span>
              <h3 class="tp-section-title-3">
                Empowering Data Excellence
              </h3>
              <p>
                Step into the realm of data excellence with iData, the premier choice for top-tier B2B entities worldwide.
                Our suite of services covers everything from database construction and cleansing to meticulous
                verification, validation, and intent analysis. At iData, we understand that for agencies and publishing
                houses at the forefront of their industries, precision and accuracy are non-negotiable. Trust our seasoned
                data analysts to empower your decision-making with insights that drive tangible results. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],

};
</script>
