<template>
  <div :class="`offcanvas__area offcanvas__area-1 ${isOffCanvasOpen ? 'offcanvas-opened' : ''}`">
    <div class="offcanvas__wrapper">
      <div class="offcanvas__shape">
        <img class="offcanvas__shape-1" src="~/assets/img/shape/offcanvas-shape-1.png" alt="shape">
      </div>
      <div class="offcanvas__close">
        <button @click="closeOffcanvas" class="offcanvas__close-btn offcanvas-close-btn">
          <i class="fa-regular fa-xmark"></i>
        </button>
      </div>
      <div class="offcanvas__content">
        <div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
          <div class="offcanvas__logo logo">
            <nuxt-link href="/">
              <img src="~/assets/img/logo/logo-black.svg" alt="logo">
            </nuxt-link>
          </div>
        </div>
        <div class="mobile-menu-3 fix mb-40 menu-counter mean-container d-lg-none">
          <div class="mean-bar">
            <!-- MobileMenus start -->
            <mobile-menus />
            <!-- MobileMenus end -->
          </div>
        </div>
        <div class="offcanvas__menu offcanvas__menu-ff-space d-none d-lg-block">
          <nav>
            <ul>
              <li><nuxt-link href="/">Home</nuxt-link></li>
              <li><nuxt-link href="/about-us">About Us</nuxt-link></li>
              
              <details class="accordion">
                <summary class="accordion-header">
                  <div class="accordion-header-content">
                    <div class="itemss">
                      <li><nuxt-link href="/">Services</nuxt-link></li>
                    </div>
                  </div>
                </summary>
                <div class="accordion-content">
                  <li><nuxt-link href="/irev">iRev</nuxt-link></li>
                    <li><nuxt-link href="/idata">iData</nuxt-link></li>
                    <li><nuxt-link href="/ilntel">iIntel</nuxt-link></li>
                    <li><nuxt-link href="/imedia">iMedia</nuxt-link></li>
                </div>
              </details>

              <details class="accordion">
                <summary class="accordion-header">
                  <div class="accordion-header-content">
                    <div class="itemss">
                      <li><nuxt-link href="/">Products</nuxt-link></li>
                    </div>
                  </div>
                </summary>
                <div class="accordion-content">
                  <li><nuxt-link href="/predictor">Predictor</nuxt-link></li>
                    <li><nuxt-link href="/inovator">Innovator</nuxt-link></li>
                    <li><nuxt-link href="/intello">lntello</nuxt-link></li>
                    <li><nuxt-link href="/connect-metrics">Connect Metrics</nuxt-link></li>
                    <li><nuxt-link href="/profile-forge">Profile Forge</nuxt-link></li>
                </div>
              </details>


              <details class="accordion">
                <summary class="accordion-header">
                  <div class="accordion-header-content">
                    <div class="itemss">
                      <li><nuxt-link href="/">Resources</nuxt-link></li>
                    </div>
                  </div>
                </summary>
                <div class="accordion-content">
                  <li><nuxt-link href="/blog-grid">Blogs</nuxt-link></li>
                    <li><nuxt-link href="/success-stories">Success Stories</nuxt-link></li>
                    <li><nuxt-link href="/case-studies">Case studies</nuxt-link></li>
                </div>
              </details>

              <details class="accordion">
                <summary class="accordion-header">
                  <div class="accordion-header-content">
                    <div class="itemss">
                      <li><nuxt-link href="/">Company</nuxt-link></li>
                    </div>
                  </div>
                </summary>
                <div class="accordion-content">
                  <li><nuxt-link href="/job">Careers</nuxt-link></li>
                    <li><nuxt-link href="/team">Our Team</nuxt-link></li>
                    <li><nuxt-link href="/faq">FAQ's</nuxt-link></li>
                </div>
              </details>
              
              <li><nuxt-link href="/contact-us">Contact Us</nuxt-link></li>
            </ul>
          </nav>
        </div>
        <!-- <div class="offcanvas__btn">
              <a href="#" class="tp-btn-offcanvas">Getting Started <i class="fa-regular fa-chevron-right"></i></a>
            </div> -->
        <nuxt-link href="/" class="tp-btn btn-cta bg-btn lnk">
          Getting Started
          <i class="fas fa-chevron-right fa-icon"></i>
          <span class="circle"></span>
        </nuxt-link>
        <div class="offcanvas__social pt-30">
          <h3 class="offcanvas__social-title">Follow :</h3>
          <social />
        </div>
        <div class="offcanvas__contact">
          <p class="offcanvas__contact-call"><a href="tel:+91-020-69029999">+91-020-69029999</a></p>
          <p class="offcanvas__contact-mail"><a href="mailto:corporate@evolvebpm.com">corporate@evolvebpm.com</a></p>
        </div>
      </div>
    </div>
  </div>
  <!-- body overlay start -->
  <div @click="closeOffcanvas" :class="`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`"></div>
  <!-- body overlay end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';
import MobileMenus from './MobileMenus.vue';

export default {
  components: { MobileMenus, Social },
  data() {
    return {
      isOffCanvasOpen: false,
    }
  },
  methods: {
    openOffcanvas() {
      this.isOffCanvasOpen = true
    },
    closeOffcanvas() {
      this.isOffCanvasOpen = false
    }
  },
}
</script>

