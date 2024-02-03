<template>
  <section class="skill__area grey-bg-77 pt-145 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-2 text-center mb-65">
            <span class="section__title-pre-2">Our Media Assets</span>
            <h3 class="section__title-2">Our Media Assets</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-7">
          <career-items :career_data="career_data" />
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5">
          <div class="skill__item-wrapper">
            <div v-for="(skill, i) in skill_data" :key="i" class="skill__item d-flex align-items-center">
              <div v-for="(item, i) in skill.skill_items" :key="i" class="skill__single text-center mb-20 mr-20">
                <div class="skill__icon">
                  <img :src="item.icon" alt="icon" />
                </div>
                <div class="skill__content">
                  <h4>
                    <span class="counter">
                      {{ item.num }}</span>{{ item.text }}
                  </h4>
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
//skill images
import skill_icon_1 from "~/assets/img/skill/skill-icon-1.png";
import skill_icon_2 from "~/assets/img/skill/skill-icon-2.png";
import skill_icon_3 from "~/assets/img/skill/skill-icon-3.png";
import skill_icon_4 from "~/assets/img/skill/skill-icon-4.png";
import skill_icon_5 from "~/assets/img/skill/skill-icon-5.png";
import skill_icon_6 from "~/assets/img/skill/skill-icon-6.png";
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
          title: "Here is where your audiences thrive in the Evolve ecosystem.",
          designation: "Do you wonder the impact of reaching your audience through sources they trust? With the changing spam laws, the best way to reach your audience remains committees they frequently visit. We actively function to create a hub of those! We further leverage this audience to curate disruptive lead generation strategies. Each strategy is uniquely suited to your needs – adding our end users as highly qualified leads to your dedicated community, one campaign at a time.",
        },
      ],
    };
  },
};
</script>
