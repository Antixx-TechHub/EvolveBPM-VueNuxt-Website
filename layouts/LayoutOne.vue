<template>
  <div>
    <HeaderOne />

    <main>
      <slot></slot>
    </main>

    <footer-ten />
    <BackToTop/>
  </div>
</template>

<script>
import HeaderOne from "./headers/HeaderOne.vue";
import FooterTen from "./footers/FooterTen.vue";
import BackToTop from "./footers/component/BackToTop.vue";

export default {
  components: {
    HeaderOne,
    FooterTen,
    BackToTop,
  },
};
</script>
