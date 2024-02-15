<template>
  <a
    v-for="(item, i) in social_links"
    :key="i"
    :href="item.link"
    :target="item.target"
  >
    <i :class="item.icon"></i>
  </a>
</template>

<script>
export default {
  data() {
    return {
      social_links: [
        {
          link: "https://www.facebook.com/EvolveBPM",
          target: "_blank",
          icon: "fa-brands fa-facebook-f",
          name: "Facebook",
        },
        {
          link: "https://twitter.com/evolvebpm",
          target: "_blank",
          icon: "fa-brands fa-twitter",
          name: "Twitter",
        },
        {
          link: "https://www.linkedin.com/company/evolve-bpm",
          target: "_blank",
          icon: "fa-brands fa-linkedin-in",
          name: "Linkedin",
        },
        {
          link: "https://www.instagram.com/evolvebpm/",
          target: "_blank",
          icon: "fa-brands fa-instagram",
          name: "Youtube",
        },
        {
          link: "https://www.youtube.com/@evolvebpmllc7151/videos",
          target: "_blank",
          icon: "fa-brands fa-youtube",
          name: "Youtube",
        },
      ],
    };
  },
};
</script>
