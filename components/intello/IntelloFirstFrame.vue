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
            <img src="~/assets/img/about/15/about-img-1.jpg" alt="shape" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about__wrapper-15 pl-45" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000">
            <div class="tp-section-wrapper-3 mb-25">
              <span class="tp-section-subtitle-3">Intello</span>
              <h3 class="tp-section-title-3">
                Real-Time Metrics Mastery
              </h3>
              <p>
                Stay ahead of the curve with Intello, your ultimate companion for real-time insights. Our intuitive
                platform provides instant access to crucial campaign metrics, empowering you to make informed decisions on
                the fly. With Intello, you'll never miss a beat, ensuring your campaigns are always optimized for maximum
                impact and ROI. </p>
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
