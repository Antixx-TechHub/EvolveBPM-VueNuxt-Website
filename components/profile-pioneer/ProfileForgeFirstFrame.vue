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
              <span class="tp-section-subtitle-3">Profile Forge</span>
              <h3 class="tp-section-title-3">
                Unveiling Prospect Potential
              </h3>
              <p>
                Unlock the true potential of your prospect universe with Profile Forge, your secret weapon for
                personalized outreach. By segmenting influencers from decision-makers, Profile Forge enables you to tailor
                your messaging for maximum effectiveness. Say goodbye to generic outreach and hello to personalized
                engagement that drives results. With Profile Forge, you'll uncover hidden opportunities and forge stronger
                connections with your prospects.
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
