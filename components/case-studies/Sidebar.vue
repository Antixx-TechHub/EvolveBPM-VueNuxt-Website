<template>
  <div :class="`sidebar__wrapper ${style_2 ? 'sidebar__widget-style-2' : ''} pl-40`">
    <div class="sidebar__widget mb-45">
      <h3 class="sidebar__widget-title">Recent Post</h3>
      <div class="sidebar__widget-content">
        <div class="sidebar__post">
          <div class="rc__post d-flex align-items-center" v-for="successstory in successstories.slice(0, 3)"
            :key="successstory.id">
            <div class="rc__post-thumb">
              <nuxt-link :to="'/success-details/' + successstory.attributes.slug">
                <img :src="successstory.attributes.image.data.attributes.url" alt="blog">
              </nuxt-link>
            </div>
            <div class="rc__post-content">
              <h3 class="rc__post-title">
                <nuxt-link :to="'/success-details/' + successstory.attributes.slug">
                  {{ successstory.attributes.title }}</nuxt-link>
              </h3>
              <div class="rc__meta">
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>{{ successstory.attributes.date }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar__widget mb-45">
      <h3 class="sidebar__widget-title">Category</h3>
      <div class="sidebar__widget-content">
        <ul>
          <li v-for="successcategory in successcategories" :key="successcategory.id">
            <router-link :to="`/success-story-categories/${successcategory.attributes.slug}`">
              {{ successcategory.attributes.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Sidebar',
  data() {
    return {
      successcategories: [],
      successstories: [],
    }
  },
  created: async function () {
    axios.get('https://cms.dotglobaltech.com/api/successstories?populate=*')
      .then(response => {
        this.successstories = response.data.data.sort((b, a) => a.id - b.id);
      })
      .catch(error => {
        console.error(error);
      });
    const response = await axios.get('https://cms.dotglobaltech.com/api/successcategories?populate=*')
    this.successcategories = response.data.data.sort((b, a) => a.id - b.id);
  },
}
</script>