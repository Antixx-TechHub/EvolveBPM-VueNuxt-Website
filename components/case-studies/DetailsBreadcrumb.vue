<template>
  <section class="breadcrumb__area include-bg pb-70 pt-120 blog-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="postbox__category">
              <a href="#">Case Studies</a>
            </div>
            <h3 class="breadcrumb__title">
              {{ pageTitle }}
            </h3>

            <div class="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span><a href="#">Case Studies</a></span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>{{ pageDesc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: ['pageTitle', 'pageDesc']
};
</script>