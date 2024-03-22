<template>
  <div :class="`offcanvas__full ${isOffCanvasOpen ? 'offcanvas-full-opened' : ''}`">
    <div class="offcanvas__full-wrapper d-flex flex-column justify-content-between">
      <div class="offcanvas__full-inner">
        <div class="offcanvas__close">
          <button @click="closeOffcanvas" class="offcanvas__full-close-btn offcanvas-close-btn">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="1">
                <path d="M31 1L1 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M1 1L31 31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </button>
        </div>
        <div class="offcanvas__full-content">

          <div class="mobile-menu fix mb-40 menu-counter d-md-none mean-container">
            <div class="mean-bar">
              <!-- MobileMenus start -->
              <mobile-menus />
              <!-- MobileMenus end -->
            </div>
          </div>

          <div class="offcanvas__full-menu menu-counter d-none d-md-block">
            <nav>
              <ul>
                <li><nuxt-link href="/">Home</nuxt-link></li>
                <li><nuxt-link href="/about-us">About</nuxt-link></li>
                <li class="has-dropdown">
                  <nuxt-link href="/">Service</nuxt-link>
                  <ul class="submenu">
                    <li><nuxt-link href="/irev">iRev</nuxt-link></li>
                    <li><nuxt-link href="/idata">iData</nuxt-link></li>
                    <li><nuxt-link href="/ilntel">iIntel</nuxt-link></li>
                    <li><nuxt-link href="/imedia">iMedia</nuxt-link></li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <nuxt-link href="/">Products</nuxt-link>
                  <ul class="submenu">
                    <li><nuxt-link href="/predictor">Predictor</nuxt-link></li>
                    <li><nuxt-link href="/intello">lntello</nuxt-link></li>
                    <li><nuxt-link href="/connect-metrics">Connect Metrics</nuxt-link></li>
                    <li><nuxt-link href="/profile-forge">Profile Forge</nuxt-link></li>
                    <li><nuxt-link href="/inovator">Innovator</nuxt-link></li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <nuxt-link href="/">Resources</nuxt-link>
                  <ul class="submenu">
                    <li><nuxt-link href="/blogs">Blogs</nuxt-link></li>
                    <li><nuxt-link href="/case-studies">Case studies</nuxt-link></li>
                  </ul>
                </li>
                <li class="has-dropdown">
                  <nuxt-link href="/">Company</nuxt-link>
                  <ul class="submenu">
                    <li><nuxt-link href="/job">Careers</nuxt-link></li>
                    <li><nuxt-link href="/team">Our Team</nuxt-link></li>
                    <li><nuxt-link href="/faq">FAQ's</nuxt-link></li>
                  </ul>
                </li>
                <li><nuxt-link href="/contact-us">Contact Us</nuxt-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="offcanvas__full-footer">
        <div class="row align-items-center">
          <div class="col-xl-3">
            <div class="offcanvas__full-link">
              <nuxt-link href="/policy">Privacy Policy</nuxt-link>
              <nuxt-link href="/terms">Terms of use</nuxt-link>
            </div>
          </div>
          <div class="col-xl-9 order-first order-xl-last">
            <div class="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center">
              <div class="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center">
                <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Information</h4>
                  <p><a href="tel:+91-020-69029999">+91-020-69029999</a></p>
                  <p><a href="mailto:corporate@evolvebpm.com">corporate@evolvebpm.com</a></p>
                </div>
                <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Address</h4>
                  <p><a
                      href="#"
                      target="_blank">Old Madras Road, 903 Brigade <br> Paramount, Bangalore 560093, IN.</a></p>
                </div>
              </div>
              <div class="offcanvas__full-social offcanvas__social-3">
                <social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="body-overlay"></div>
</template>

<script>
import Social from '~~/components/social/Social.vue';
// import { useUtilsStore } from '~~/store/utils';
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