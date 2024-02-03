<template>
  <section :class="`features__list-area pt-50 pb-100 ${el_style?'':''}`">
    <div class="container">
      <div
        class="features__list-inner green-light-bg-4 pl-100 pr-100 p-relative z-index-1"
      >
        <div class="row">
          <div class="col-xl-12">
                <div class="section__title-wrapper pb-70 pt-60">
                  <!-- <span class="section__title-pre"></span> -->
                  <h3 class="section__title">
                    More on our <span class="section__title-highlight">Data Strategy
                      <svg width="220" height="27" viewBox="0 0 220 27" fill="none">
                        <path d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z" fill="currentColor"/>
                      </svg>
                  </span>
                  </h3>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-xxl-5 col-xl-5 col-lg-6">
            <div class="features__list-wrapper tp-tab">
              <ul class="nav nav-tabs" id="featuresTab" role="tablist">
                <nav-item
                  :active="true"
                  id="customer"
                  icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="133 mill LinkedIn verified global data contacts."
                  subtitle=""
                />
                <nav-item
                  id="ideation"
                  icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="Integrated with multiple intent signal providers including Bom borra, Cognism, Klarity, ZoomInfo."
                  subtitle=""
                />
                <nav-item
                  id="multiple"
                  icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="Install-base data through partnership with HG Insights."
                  subtitle=""
                />
                <nav-item
                  id="software"
                  icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="Data refresh every 90 days through automated web crawlers."
                  subtitle=""
                />
                <nav-item
                  id="software"
                  icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 7H7V15H15V7Z" stroke="#04121F" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4 21C5.65 21 7 19.65 7 18V15H4C2.35 15 1 16.35 1 18C1 19.65 2.35 21 4 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4 7H7V4C7 2.35 5.65 1 4 1C2.35 1 1 2.35 1 4C1 5.65 2.35 7 4 7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M15 7H18C19.65 7 21 5.65 21 4C21 2.35 19.65 1 18 1C16.35 1 15 2.35 15 4V7Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M18 21C19.65 21 21 19.65 21 18C21 16.35 19.65 15 18 15H15V18C15 19.65 16.35 21 18 21Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="Access to over 65 mill direct numbers."
                  subtitle=""
                />
              </ul>
            </div>
          </div>

          <div class="col-xxl-7 col-xl-7 col-lg-6">
            <div class="tab-content" id="myTabContent">
              <tab-content :active="true" id="customer" />
              <tab-content id="ideation" />
              <tab-content id="multiple" />
              <tab-content id="software" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavItem from "./NavItem.vue";
import TabContent from "./TabContent.vue";

export default {
  props:{
    el_style:{
      type:Boolean,
      default:false
    }
  },
  components: { NavItem, TabContent },
};
</script>
