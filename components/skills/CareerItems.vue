<template>
  <div :class="`col-xxl-12 col-xl-12 col-lg-12 career__wrapper ${style_2 ? style_2 : ''} pl-40`">
    <h4 v-if="style_2" class="career__title">Experience</h4>
    <div v-for="(info, i) in career_data" :key="i"
      class="career__item transition-3 white-bg d-sm-flex align-items-center justify-content-between" data-sal="slide-up"
      :data-sal-delay="info.delay" data-sal-duration="1000">
      <div class="career__info d-sm-flex align-items-center">
        <div class="career__info-content">
          <h3 class="career__info-title">{{ info.title }}</h3>
          <span class="career__info-designation">
            {{ info.designation }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  props: {
    career_data: {
      type: Array,
      default: [],
    },
    style_2: String,
  },
};
</script>