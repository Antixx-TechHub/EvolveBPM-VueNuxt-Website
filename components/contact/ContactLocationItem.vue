<template>
  <div class="contact__location-item">
    <div class="row align-items-center">
      <div class="col-lg-9 col-md-8 col-sm-7">
        <div class="contact__location-content d-lg-flex align-items-center">
          <h3 class="contact__location-title">{{title}}</h3>

          <div
            class="contact__location-info d-sm-flex flex-wrap align-items-center"
          >
            <div class="contact__location-icon mr-45">
              <img :src="icon" alt="icon" />
            </div>
            <div class="contact__location-content">
              <p>
                <a href="mailto:contact.location@website.com">{{location}}</a>
              </p>
              <p><a href="tel:686-324-6838">{{tel}}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5">
        <div class="contact__location-btn text-sm-end">
          <a
            href="/"
            target="_blank"
            class="tp-btn-border"
            >
            view location
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
    icon:String,
    location:String,
    tel:String,
  }
};
</script>
