<template>
  <section class="features__area p-relative z-index-1 delivery-bg pt-110 pb-90">
    <div class="features__shape">
      <img class="features__shape-1" src="~/assets/img/features/features-shape-1.png" alt="features__shape" />
      <img class="features__shape-2" src="~/assets/img/features/features-shape-2.png" alt="features__shape" />
      <!-- <img
        class="features__shape-3"
        src="~/assets/img/features/features-shape-3.png"
        alt="features__shape"
      /> -->
      <!-- <img
        class="features__shape-4"
        src="~/assets/img/features/features-shape-4.png"
        alt="features__shape"
      /> -->
      <img class="features__shape-5" src="~/assets/img/features/features-shape-5.png" alt="features__shape" />
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-6 col-xl-7 col-lg-7">
          <div class="section__title-wrapper-7 text-center mb-60">
            <span class="section__title-pre-7">Our</span>
            <h3 class="section__title-7">
              <span class="section__title-7-highlight">
                Delivery Channels
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
        <div v-for="item in feature_data" :key="item.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <DeliveryChannelsFeature :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryChannelsFeature from './DeliveryChannelsFeature.vue';

export default {
  components: { DeliveryChannelsFeature },
  data() {
    return {
      feature_data: [
        {
          id: 1,
          delay: "130",
          icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M14.1046 25.2803H4.92805C2.76655 25.2803 0.998047 27.0488 0.998047 29.2103V41.0003H14.1046V25.2803Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.2606 17.4199H18.014C15.8525 17.4199 14.084 19.1884 14.084 21.3499V41H27.1906V21.3499C27.1906 19.1884 25.4417 17.4199 23.2606 17.4199Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.368 31.1748H27.1914V40.9998H40.298V35.1048C40.298 32.9433 38.5295 31.1748 36.368 31.1748Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.671 1.83762L22.7124 3.92052C22.85 4.21527 23.2233 4.49036 23.5377 4.52966L25.4241 4.84407C26.6228 5.04057 26.9175 5.92478 26.0529 6.76974L24.5792 8.24349C24.3237 8.49894 24.1862 8.97056 24.2648 9.30461L24.6774 11.1124C25.0115 12.5469 24.2451 13.0971 22.9875 12.3504L21.219 11.3089C20.9046 11.1124 20.3741 11.1124 20.0597 11.3089L18.2912 12.3504C17.0336 13.0971 16.2672 12.5469 16.6013 11.1124L17.0139 9.30461C17.0925 8.97056 16.955 8.47929 16.6995 8.24349L15.2454 6.7894C14.3808 5.9248 14.6559 5.06018 15.8742 4.86368L17.7606 4.54933C18.075 4.49038 18.4484 4.21529 18.5859 3.94019L19.6274 1.85723C20.1972 0.717526 21.1011 0.717567 21.671 1.83762Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "Email",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-pink",
        },
        {
          id: 2,
          delay: "150",
          icon: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path d="M17 5.99902V32.999C17 35.159 16.12 37.139 14.72 38.5789L14.64 38.659C14.46 38.839 14.26 39.019 14.08 39.159C13.48 39.679 12.8 40.0789 12.1 40.3589C11.88 40.4589 11.66 40.539 11.44 40.619C10.66 40.879 9.82 40.999 9 40.999C8.46 40.999 7.92002 40.939 7.40002 40.839C7.14002 40.779 6.87999 40.719 6.61999 40.639C6.29999 40.539 6.00001 40.4389 5.70001 40.2989C5.70001 40.2789 5.69999 40.2789 5.67999 40.2989C5.11999 40.0189 4.58002 39.699 4.08002 39.319L4.06 39.2989C3.8 39.0989 3.56003 38.899 3.34003 38.659C3.12003 38.419 2.89999 38.179 2.67999 37.919C2.29999 37.419 1.98001 36.879 1.70001 36.319C1.72001 36.299 1.72001 36.299 1.70001 36.299C1.70001 36.299 1.69999 36.279 1.67999 36.259C1.55999 35.979 1.45999 35.679 1.35999 35.379C1.27999 35.119 1.21997 34.859 1.15997 34.599C1.05997 34.079 1 33.539 1 32.999V5.99902C1 2.99902 3 0.999023 6 0.999023H12C15 0.999023 17 2.99902 17 5.99902Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41 29.999V35.999C41 38.999 39 40.999 36 40.999H9C9.82 40.999 10.66 40.879 11.44 40.619C11.66 40.539 11.88 40.459 12.1 40.359C12.8 40.079 13.48 39.679 14.08 39.159C14.26 39.019 14.46 38.839 14.64 38.659L14.72 38.579L28.32 24.999H36C39 24.999 41 26.999 41 29.999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.61938 40.6389C5.41938 40.2789 4.27941 39.6189 3.33942 38.6589C2.37942 37.7189 1.71937 36.5789 1.35938 35.3789C2.13937 37.8789 4.11938 39.8589 6.61938 40.6389Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.7388 19.5789L28.3188 24.9989L14.7188 38.5789C16.1187 37.1389 16.9988 35.1589 16.9988 32.9989V13.6789L22.4188 8.25894C24.5388 6.13895 27.3788 6.13895 29.4988 8.25894L33.7388 12.4989C35.8588 14.6189 35.8588 17.4589 33.7388 19.5789Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 34.999C10.1046 34.999 11 34.1036 11 32.999C11 31.8945 10.1046 30.999 9 30.999C7.89543 30.999 7 31.8945 7 32.999C7 34.1036 7.89543 34.999 9 34.999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
          title: "Telemarketing",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-pink",
        },
        {
          id: 3,
          delay: "170",
          icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                    <path d="M1.99805 15V10C1.99805 5.02 6.01805 1 10.998 1H15.998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.998 1H32.998C37.978 1 41.998 5.02 41.998 10V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.998 29V32C41.998 36.98 37.978 41 32.998 41H29.998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.998 41H10.998C6.01805 41 1.99805 36.98 1.99805 32V27" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.998 16V26C31.998 30 29.998 32 25.998 32H17.998C13.998 32 11.998 30 11.998 26V16C11.998 12 13.998 10 17.998 10H25.998C29.998 10 31.998 12 31.998 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.9981 21H7.99805" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>`,
          title: "Webinars",
          subtitle: "Lorem Ipsum is that it more less normal distribution.",
          color: "has-pink",
        },
      ],
    };
  },
};
</script>