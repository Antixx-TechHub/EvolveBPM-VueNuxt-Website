<template>
  <contact-top-area  title="you can directly call or drop us an email!" subtitle="Connect with Us"/>
  <!-- contact item start -->
  <div class="contact__item-area contact__translate-2">
    <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="contact__item text-center mb-30 transition-3 white-bg">
                <div class="contact__icon">
                    <img src="~/assets/img/contact/icon/contact-icon-1.png" alt="">
                </div>
                <div class="contact__content">
                    <span class="contact-item-subtitle">Contact</span>
                    <p><a href="mailto:corporate@evolvebpm.com">corporate@evolvebpm.com</a></p>
                    <p><a href="tel:+91-020-69029999">+91-020-69029999</a></p>
                </div>
              </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="contact__item text-center mb-30 transition-3 white-bg">
                <div class="contact__icon">
                    <img src="~/assets/img/contact/icon/contact-icon-3.png" alt="">
                </div>
                <div class="contact__content">
                    <span class="contact-item-subtitle">Location</span>
                    <p><a href="https://www.google.com/maps/dir//99+Wall+St+%233966,+New+York,+NY+10005,+USA/@40.7049469,-74.0076795,19.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25a161aaa68c5:0x6d908c6e5aa1e52d!2m2!1d-74.0072444!2d40.7049014?entry=ttu" target="_blank">99 Wall Street #3966 New York, NY 10005.</a></p>
                </div>
              </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="contact__item text-center mb-30 transition-3 white-bg">
                <div class="contact__icon">
                    <img src="~/assets/img/contact/icon/contact-icon-2.png" alt="">
                </div>
                <div class="contact__content">
                    <span class="contact-item-subtitle">Social Media</span>
                    <p>Follow on social media</p>
                    <div class="contact__social">
                      <a href="https://www.facebook.com/EvolveBPM"><i class="fa-brands fa-facebook-f"></i></a>
                      <a href="https://twitter.com/evolvebpm"><i class="fa-brands fa-twitter"></i></a>
                      <a href="https://www.linkedin.com/company/evolve-bpm"><i class="fa-brands fa-linkedin-in"></i></a>
                      <a href="https://www.instagram.com/evolvebpm/"><i class="fa-brands fa-instagram"></i></a>
                      <a href="https://www.youtube.com/@evolvebpmllc7151/videos"><i class="fa-brands fa-youtube"></i></a>

                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
  <!-- contact item end -->

  <!-- contact form start -->
  <section class="contact__form-area pt-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact__form-2">
            <h3 class="contact__form-2-title">Send a message</h3>
            <contact-form/>
            <p class="ajax-response"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- contact form end -->

  <!-- contact location area start -->
  <section class="contact__location-area pb-130 pt-110">
    <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-7 offset-xl-1 col-md-8">
              <div class="tp-section-wrapper-2 mb-35">
                <span class="tp-section-subtitle-2 subtitle-mb-9">LOCATIONS</span>
                <h3 class="tp-section-title-2 font-40">Come and visit our offices around the world</h3>
              </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-10 ">
              <div class="contact__location-wrapper">
                <contact-location-item
                title="UK Registered Office"
                :icon="location_icon_1"
                location="corporate@evolvebpm.com"
                tel="+91-020-69029999"
              />
              <contact-location-item
                title="PHL Registered Office"
                :icon="location_icon_2"
                location="corporate@evolvebpm.com"
                tel="+91-020-69029999"
              />
              <contact-location-item
                title="INDIA Head Office"
                :icon="location_icon_3"
                location="corporate@evolvebpm.com"
                tel="+91-020-69029999"
              />
              <contact-location-item
                title="INDIA Operations Unit 1"
                :icon="location_icon_1"
                location="corporate@evolvebpm.com"
                tel="+91-020-69029999"
              />
              <contact-location-item
                title="INDIA Operations Unit 2"
                :icon="location_icon_2"
                location="corporate@evolvebpm.com"
                tel="+91-020-69029999"
              />
              </div>
          </div>
        </div>
    </div>
  </section>
  <!-- contact location area end -->
</template>

<script>
// internal
import ContactForm from '../forms/ContactForm.vue';
import ContactTopArea from './ContactTopArea.vue';
import location_icon_1 from "~/assets/img/contact/contact-location-1.png";
import location_icon_2 from "~/assets/img/contact/contact-location-2.png";
import location_icon_3 from "~/assets/img/contact/contact-location-3.png";
import ContactLocationItem from './ContactLocationItem.vue';

  export default {
  components: { ContactTopArea, ContactForm, ContactLocationItem },
    data () {
      return {location_icon_1,location_icon_2,location_icon_3}
    }
  }
</script>
