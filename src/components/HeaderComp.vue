<template>
  <div :class="className">
    <div :class="`${className}__inner`">
      <h1 :class="`${className}__title`">{{ title }}</h1>
      <ClockComp />
      <div :class="`${className}__nav`">
        <router-link
          :class="`${className}__route-link`"
          v-for="(route, routeKey) in nav.router"
          :key="routeKey"
          :to="route.url"
          v-html="route.text" />
    </div>
    </div>
  </div>
</template>

<script>
import ClockComp from '@/components/ClockComp.vue';

export default {
  name: 'HeaderComp',

  data: () => ({
    title: 'Market Volume Meter',
    className: 'header-comp',
    nav: {
      router: [
        {
          text: 'Volume Meter',
          url: '/',
        },
        {
          text: 'About',
          url: '/about',
        },
      ],
    },
  }),

  components: {
    ClockComp,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* Sass Variables */
$className: ".header-comp";
$linksDefaultColor: #9d9da0;
$linksActiveColor: #505eac;

#{$className} {
  margin: 0;
  padding: .25rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &__inner {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-left: 0;
  }

  &__nav {
    padding: .25rem;
  }

  &__route-link {
    margin: .5rem;
    padding: .5rem;
    border: none;
    text-decoration: none;
    color: $linksDefaultColor;
    font-size: 1.5rem;
  }

  .router-link-exact-active {
    color: $linksActiveColor;
    border-color: $linksActiveColor;
  }
}

</style>
