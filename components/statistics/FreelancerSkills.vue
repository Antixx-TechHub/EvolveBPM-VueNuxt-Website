<template>
  <section class="skill__area grey-bg-77 pt-145 pb-120">
    <div class="container">
      <!-- <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-65">
            <span class="section__title-pre-2">Statistics</span>
            <h3 class="section__title-2">Statistics</h3>
            <p>Featured projects, which my best projects be choice to show</p>
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <career-items :career_data="career_data" />
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-15 p-relative z-index-1 w-img sal-animate">
            <img src="~/assets/img/home/captive-unit.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//skill images
import skill_icon_1 from "~/assets/img/skill/skill-icon-1.png";
import skill_icon_2 from "~/assets/img/skill/skill-icon-2.png";
import skill_icon_3 from "~/assets/img/skill/skill-icon-3.png";
import skill_icon_4 from "~/assets/img/skill/skill-icon-4.png";
import skill_icon_5 from "~/assets/img/skill/skill-icon-5.png";
import skill_icon_6 from "~/assets/img/skill/skill-icon-6.png";
import statistics from "~/assets/img/home/captive-unit.png";
// company icon
// import company_icon_1 from "~/assets/img/skill/company/company-icon-1.png";
// SingleCarrerItem
import CareerItems from './CareerItems.vue';

export default {
  components: { CareerItems },
  data() {
    return {
      skill_data: [
        {
          skill_items: [
            { icon: skill_icon_1, },
            { icon: skill_icon_2, },
            { icon: skill_icon_5, },
          ],
        },
        {
          skill_items: [
            { icon: skill_icon_3, },
            { icon: skill_icon_4, },
            { icon: skill_icon_5, },
          ],
        },
      ],
      career_data: [
        {
          delay: "130",
          // title: "We work exclusively with agencies and publishers as their white-labelled delivery partner.",
          designation: "We work exclusively with agencies and publishers as their white-labelled delivery partner.",
        },
        {
          delay: "150",
          designation: "Focussed on building and delivering best in class operational capacity for agencies.",
        },
        {
          delay: "170",
          designation: "Dedicated operational teams with Chinese walls between agencies teams.",
        },
        {
          delay: "190",
          designation: "Shared resources for data / technology / HR",
        },
        {
          delay: "210",
          designation: "Innovation led partnership with ability to white label technology frameworks.",
        },
      ],
    };
  },
};
</script>
