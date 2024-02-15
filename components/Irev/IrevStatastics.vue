<template>
  <section class="about__area pt-130 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div
            class="about__thumb-15 p-relative z-index-1 w-img"
            data-sal="slide-up" data-sal-delay="130" data-sal-duration="1000"
          >
            <div class="about__thumb-15-shape">
              <img src="~/assets/img/about/15/about-thumb-shape.png" alt="shape" />
            </div>
            <img
              class="about__thumb-15-shape-2"
              src="~/assets/img/about/15/about-thumb-shape-2.png"
              alt=""
            />
            <img src="~/assets/img/about/15/about-img-1.jpg" alt="shape" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div
            class="about__wrapper-15 pl-45"
            data-sal="slide-up" data-sal-delay="160" data-sal-duration="1000"
          >
            <div class="tp-section-wrapper-3 mb-25">
              <span class="tp-section-subtitle-3">iRev</span>
              <h3 class="tp-section-title-3">
                Pioneering Revenue Impact
              </h3>
              <p>Welcome to iRev, where we redefine the landscape of B2B lead generation for elite agencies and publishing
                houses globally. Our comprehensive approach encompasses the entire spectrum of lead nurturing, from MQL
                and SQL to high-quality HQL appointments. With "i" symbolizing the transformative impact we bring and
                "Rev" signifying the revenue-driving leads we deliver, iRev stands as the gold standard for those seeking
                to cultivate thriving communities and unlock unparalleled growth opportunities.</p>
            </div>
            <div class="blog__more-6 text-md-end mb-30">
              <nuxt-link href="/" class="tp-btn btn-cta bg-btn lnk">
                Request A Demo
                <i class="fas fa-chevron-right fa-icon"></i>
                <span class="circle"></span>
              </nuxt-link>
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
