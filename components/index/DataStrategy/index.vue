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
                  icon='<svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.6264 10.1916L22.4986 15.0314C21.5319 19.2112 19.6216 20.9017 16.0312 20.5543C15.4558 20.508 14.8344 20.4038 14.1669 20.2417L12.2336 19.7785C7.43486 18.6323 5.95035 16.2471 7.07811 11.4073L8.20588 6.55597C8.43604 5.5718 8.71223 4.71499 9.05746 4.00871C10.4039 1.20673 12.6939 0.454127 16.5375 1.36882L18.4594 1.82038C23.2811 2.95507 24.7541 5.35181 23.6264 10.1916Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M16.0317 20.5544C15.3182 21.0407 14.4206 21.4459 13.3273 21.8049L11.5091 22.4069C6.94049 23.889 4.53536 22.6501 3.05085 18.0534L1.57785 13.48C0.104844 8.88331 1.32467 6.45184 5.89328 4.9698L7.71152 4.36772C8.18334 4.2172 8.63214 4.08984 9.05793 4.00879C8.7127 4.71507 8.43651 5.57188 8.20635 6.55605L7.07859 11.4074C5.95082 16.2472 7.43533 18.6324 12.2341 19.7786L14.1674 20.2418C14.8349 20.4039 15.4563 20.5081 16.0317 20.5544Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M13.2471 7.97949L18.8284 9.40364" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12.1191 12.4609L15.4564 13.3177" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>'
                  title="133 mill LinkedIn verified global data contacts."
                  subtitle=""
                />
                <nav-item
                  id="ideation"
                  icon='<svg width="20" height="24" viewBox="0 0 20 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.67754 7.48193L8.50078 9.52752C8.23683 9.97842 8.45679 10.3523 8.97368 10.3523H10.3704C10.8983 10.3523 11.1072 10.7263 10.8433 11.1772L9.67754 13.2228"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path
                          d="M5.60806 18.6449V17.3691C3.07858 15.8405 1 12.8601 1 9.69272C1 4.24883 6.00398 -0.0183023 11.6568 1.21345C14.1423 1.76333 16.3199 3.413 17.4526 5.68953C19.7512 10.3086 17.3317 15.2136 13.7794 17.3582V18.6339C13.7794 18.9528 13.9004 19.6897 12.7236 19.6897H6.66384C5.45409 19.7007 5.60806 19.2278 5.60806 18.6449Z"
                          stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path opacity="0.4" d="M5.82812 23C8.34661 22.2852 11.0081 22.2852 13.5266 23"
                          stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>'
                  title="Integrated with multiple intent signal providers including Bom borra, Cognism, Klarity, ZoomInfo."
                  subtitle=""
                />
                <nav-item
                  id="multiple"
                  icon='<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.0122 1.25636L20.1732 5.12657C21.0092 5.57864 21.0092 6.86871 20.1732 7.32079L13.0122 11.191C12.3742 11.5328 11.6262 11.5328 10.9882 11.191L3.8272 7.32079C2.9912 6.86871 2.9912 5.57864 3.8272 5.12657L10.9882 1.25636C11.6262 0.914547 12.3742 0.914547 13.0122 1.25636Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M2.771 9.93398L9.426 13.2749C10.251 13.6939 10.779 14.5429 10.779 15.4692V21.7762C10.779 22.6913 9.822 23.2757 9.008 22.8678L2.353 19.5268C1.528 19.1078 1 18.2588 1 17.3326V11.0256C1 10.1104 1.957 9.52601 2.771 9.93398Z"
                            stroke="#04121F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path
                            d="M21.2287 9.93398L14.5737 13.2749C13.7487 13.6939 13.2207 14.5429 13.2207 15.4692V21.7762C13.2207 22.6913 14.1777 23.2757 14.9917 22.8678L21.6467 19.5268C22.4717 19.1078 22.9997 18.2588 22.9997 17.3326V11.0256C22.9997 10.1104 22.0427 9.52601 21.2287 9.93398Z"
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
