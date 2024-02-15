<template>
  <form id="contact-form" @submit.prevent="handleSubmit">
    <div class="row">
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="name" v-model="formValue.name" type="text" required placeholder="Enter your name" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="email" v-model="formValue.email" type="email" required placeholder="Enter your email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="phone" v-model="formValue.phone" type="text" required placeholder="Mobile no" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="contact__input-2">
          <input name="company" v-model="formValue.company" type="text" required placeholder="Company" />
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__input-2">
          <textarea name="message" v-model="formValue.msg" required placeholder="Your message"></textarea>
        </div>
      </div>
      <div class="col-md-12">
        <div class="contact__agree d-flex align-items-start mb-25">
          <input class="e-check-input" type="checkbox" id="e-agree" />
          <label class="e-check-label" for="e-agree">
            I am bound by the terms of the Service I accept Privacy
            Policy.
          </label>
        </div>
      </div>
      <div class="col-md-5">
        <nuxt-link href="/" class="tp-btn btn-cta bg-btn lnk">
          Send Message
          <i class="fas fa-chevron-right fa-icon"></i>
          <span class="circle"></span>
        </nuxt-link>
      </div>
      <div v-if="style_2" class="col-md-7">
        <!-- for wp = this will hide in style one -->
        <div class="contact__form-call float-md-end">
          <span>Call for Consultation</span>
          <p>
            <a href="tel:2236-384-870">
              <i class="fa-solid fa-phone-flip"></i>
              +2236 384 870
            </a>
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    style_2: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      formValue: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formValue);
      this.formValue = {};
    },
  },
};
</script>
