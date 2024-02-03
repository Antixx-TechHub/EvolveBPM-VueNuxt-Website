<template>
    <section class="features__area p-relative z-index-1 pb-50 pt-125">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-7 col-xl-8 col-lg-9">
                    <div class="section__title-wrapper-7 text-center mb-60">
                        <span class="section__title-pre-7">Our</span>
                        <h3 class="section__title-7">
                            <span class="section__title-7-highlight">
                                office Locations
                                <svg width="240" height="22" viewBox="0 0 240 22" fill="none">
                                    <path class="wow" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.440833 21.1152C78.9497 6.16225 158.05 4.53412 235.949 13.8239C237.497 14.0088 239.796 12.4065 239.988 9.93474C240.181 7.4176 238.026 5.44088 236.474 5.2332C157.99 -5.31675 79.1936 0.359501 0.316568 19.7785C-0.184784 19.9023 -0.0511379 21.2092 0.440833 21.1152Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="item in feature_data" :key="item.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="services__item-9 text-center mb-30 white-bg transition-3" data-sal="slide-up"
                        :data-sal-delay="item.delay" data-sal-duration="1000">
                        <div class="features__icon-7">
                            <span>
                                <img :src="item.icon" alt="icon" />
                            </span>
                        </div>
                        <div class="features__content-7">
                            <h3 class="features__title-7">{{ item.title }}</h3>
                            <p>
                                {{ item.subtitle }}
                            </p>
                            <div class="contact__list-item flex-wrap d-flex align-items-start">
                                <div class="contact__list-icon-9"><span><svg width="24" height="24" viewBox="0 0 20 20"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.973 15.697C18.973 16.021 18.901 16.354 18.748 16.678C18.595 17.002 18.397 17.308 18.136 17.596C17.695 18.082 17.209 18.433 16.66 18.658C16.12 18.883 15.535 19 14.905 19C13.987 19 13.006 18.784 11.971 18.343C10.936 17.902 9.901 17.308 8.875 16.561C7.84 15.805 6.859 14.968 5.923 14.041C4.996 13.105 4.159 12.124 3.412 11.098C2.674 10.072 2.08 9.046 1.648 8.029C1.216 7.003 1 6.022 1 5.086C1 4.474 1.108 3.889 1.324 3.349C1.54 2.8 1.882 2.296 2.359 1.846C2.935 1.279 3.565 1 4.231 1C4.483 1 4.735 1.054 4.96 1.162C5.194 1.27 5.401 1.432 5.563 1.666L7.651 4.609C7.813 4.834 7.93 5.041 8.011 5.239C8.092 5.428 8.137 5.617 8.137 5.788C8.137 6.004 8.074 6.22 7.948 6.427C7.831 6.634 7.66 6.85 7.444 7.066L6.76 7.777C6.661 7.876 6.616 7.993 6.616 8.137C6.616 8.209 6.625 8.272 6.643 8.344C6.67 8.416 6.697 8.47 6.715 8.524C6.877 8.821 7.156 9.208 7.552 9.676C7.957 10.144 8.389 10.621 8.857 11.098C9.343 11.575 9.811 12.016 10.288 12.421C10.756 12.817 11.143 13.087 11.449 13.249C11.494 13.267 11.548 13.294 11.611 13.321C11.683 13.348 11.755 13.357 11.836 13.357C11.989 13.357 12.106 13.303 12.205 13.204L12.889 12.529C13.114 12.304 13.33 12.133 13.537 12.025C13.744 11.899 13.951 11.836 14.176 11.836C14.347 11.836 14.527 11.872 14.725 11.953C14.923 12.034 15.13 12.151 15.355 12.304L18.334 14.419C18.568 14.581 18.73 14.77 18.829 14.995C18.919 15.22 18.973 15.445 18.973 15.697Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path>
                                            <path opacity="0.4"
                                                d="M15.8492 7.30039C15.8492 6.76039 15.4262 5.93239 14.7962 5.25739C14.2202 4.63639 13.4552 4.15039 12.6992 4.15039"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path opacity="0.4" d="M18.9992 7.3C18.9992 3.817 16.1822 1 12.6992 1"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg><img class="contact-icon-shape"
                                            src="data:image/png;base64,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"
                                            alt="shape"></span></div>
                                <div class="contact__list-content-9">
                                    <p><a href="tel:67000-000-9012">+67000-000 9012</a></p>
                                </div>
                            </div>

                            <div class="contact__list-item flex-wrap d-flex align-items-start">
                                <div class="contact__list-icon-9"><span><svg width="24" height="20" viewBox="0 0 16 14"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5 12.9H4.5C2.4 12.9 1 11.85 1 9.4V4.5C1 2.05 2.4 1 4.5 1H11.5C13.6 1 15 2.05 15 4.5V9.4C15 11.85 13.6 12.9 11.5 12.9Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path opacity="0.4"
                                                d="M11.5 4.85059L9.309 6.60059C8.588 7.17459 7.405 7.17459 6.684 6.60059L4.5 4.85059"
                                                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg><img class="contact-icon-shape"
                                            src="data:image/png;base64,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"
                                            alt="shape"></span></div>
                                <div class="contact__list-content-9">
                                    <p><a href="mailto:hello@contact.com">hello@contact.com</a></p>
                                </div>
                            </div>
                            <div class="tp-button-demo pt-20">
                                <nuxt-link href="/" class="tp-btn-border-pink bg-btn lnk">
                                    View Locations
                                    <i class="fas fa-chevron-right fa-icon"></i>
                                    <span class="circle"></span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="row justify-content-center">
                <div class="col-xxl-10 col-xl-10 col-lg-11">
                    <div class="features__offer text-center mt-20" data-sal="slide-up" data-sal-delay="190"
                        data-sal-duration="1000">
                        <span>NEW FEATURES</span>
                        <p>
                            If you want to join the effort and help with the plugin, please
                            <nuxt-link href="/contact">Let Us Know</nuxt-link>.
                        </p>
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>
  
<script>
// internal
import icon_1 from "~/assets/img/home/newyork.png";
import icon_2 from "~/assets/img/home/uk.png";
import icon_3 from "~/assets/img/home/india.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
    mixins: [SalScrollAnimationMixin],
    data() {
        return {
            feature_data: [
                {
                    id: 1,
                    delay: "130",
                    icon: icon_1,
                    title: "New York",
                    subtitle:
                        "99 Wall Street #3966 New York, NY 10005.",
                },
                {
                    id: 2,
                    delay: "150",
                    icon: icon_2,
                    title: "UK",
                    subtitle:
                        "12 Constance Street, London, England E16 2DQ, GB.",
                },
                {
                    id: 3,
                    delay: "170",
                    icon: icon_3,
                    title: "India",
                    subtitle:
                        "Old Madras Road, 903 Brigade Paramount, Bangalore 560093, IN.",
                },
            ],
        };
    },
};
</script>