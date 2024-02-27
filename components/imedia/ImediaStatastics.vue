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
            <img src="~/assets/img/home/imedia.png" alt="shape" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about__wrapper-15 pl-45" data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000">
            <div class="tp-section-wrapper-3 mb-25">
              <span class="tp-section-subtitle-3">iMedia</span>
              <h3 class="tp-section-title-3">
                Amplifying Digital Dominance
              </h3>
              <p>
                Elevate your digital dominance with iMedia, the preferred partner for top B2B lead generation agencies and
                publishing giants worldwide. Our digital services, ranging from programmatic display to LinkedIn and paid
                social media campaigns, are engineered to drive maximum engagement and ROI. Picture the impact of
                strategic content creation built upon audience insights and tailored solutions. With iMedia, your brand's
                social language will resonate louder and clearer, captivating audiences and driving unparalleled growth.
              </p>
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
