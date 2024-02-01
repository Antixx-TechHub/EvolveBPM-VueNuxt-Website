<template>
  <footer>
    <div class="footer__area" data-bg-color="footer-bg-black-4">
      <div class="footer__top">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-10 mb-50 footer-col-10-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/logo/logo.svg" alt="">
                  </nuxt-link>
                </div>

                <div class="footer__widget-content">
                  <div class="footer__info">
                    <p>Lorem ipsum is simply dolor sit ametcn sectetur adipiscing elit. Phasellus vehic
                      sagittis <br> euismod.</p>

                    <div class="footer__social-10">
                      <social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                <h3 class="footer__widget-title">COMPANY</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">About Us</nuxt-link></li>
                    <li><nuxt-link href="/">Leadership</nuxt-link></li>
                    <li><nuxt-link href="/">Our Methodology (DDIA)</nuxt-link></li>
                    <li><nuxt-link href="/">Careers</nuxt-link></li>
                    <li><nuxt-link href="/">CSR Activities</nuxt-link></li>
                    <li><nuxt-link href="/">Contact us</nuxt-link></li>
                    <li><nuxt-link href="/">Request Demo</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                <h3 class="footer__widget-title">SERVICES</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">iRev</nuxt-link></li>
                    <li><nuxt-link href="/">iData</nuxt-link></li>
                    <li><nuxt-link href="/">iMedia</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                <h3 class="footer__widget-title">PRODUCTS</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">Innovator</nuxt-link></li>
                    <li><nuxt-link href="/">Predictor</nuxt-link></li>
                    <li><nuxt-link href="/">Intello</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div class="footer__widget footer__widget-10 mb-50 footer-col-10-3">
                <h3 class="footer__widget-title">INSIGHTS</h3>

                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">Blogs</nuxt-link></li>
                    <li><nuxt-link href="/">Pillar pages</nuxt-link></li>
                    <li><nuxt-link href="/">Whitepapers</nuxt-link></li>
                    <li><nuxt-link href="/">Ebooks</nuxt-link></li>
                    <li><nuxt-link href="/">Case studies</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom-10 footer__bottom-line">
        <div class="container">
          <div class="footer__bottom-inner-10">
            <div class="row">
              <div class="col-md-6">
                <div class="footer__copyright-10">
                  <p>Copyright © {{ new Date().getFullYear() }}
                    <nuxt-link href="/">Evolve BPM</nuxt-link>. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer__link-10 text-md-end">
                  <nuxt-link href="/">Privacy</nuxt-link>
                  <nuxt-link href="/">GDPR</nuxt-link>
                  <nuxt-link href="/">CASL</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- image popup start -->
  <image-popup ref="image_popup" :images="images" />
  <!-- image popup end -->
</template>

<script>
import Social from '~~/components/social/Social.vue';
import ImagePopup from '~~/components/common/modals/ImagePopup.vue';
import inst_img_1 from "~/assets/img/instagram/footer/insta-1.jpg";
import inst_img_2 from "~/assets/img/instagram/footer/insta-2.jpg";
import inst_img_3 from "~/assets/img/instagram/footer/insta-3.jpg";
import inst_img_4 from "~/assets/img/instagram/footer/insta-4.jpg";
import inst_img_5 from "~/assets/img/instagram/footer/insta-5.jpg";
import inst_img_6 from "~/assets/img/instagram/footer/insta-6.jpg";

export default {
  components: { Social, ImagePopup },
  data() {
    return {
      images: [
        inst_img_1,
        inst_img_2,
        inst_img_3,
        inst_img_4,
        inst_img_5,
        inst_img_6,
      ]
    }
  },
  methods: {
    handleImagePopup(index) {
      this.$refs.image_popup.showImg(index);
    }
  },
}
</script>