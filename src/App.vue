<template>
  <div id="app">
    <HeaderComp />
    <router-view class="router-view"/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  components: {
    HeaderComp,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'oxygen-regular';
  src: url('./assets/fonts/Oxygen/Oxygen-Light.ttf');
}

/* Sass Variables */
$defaultFontColor: #272727;

html, body {
  margin: 0;
  padding: 0;
}

* {
  font-family: 'oxygen-regular', sans-serif;
  letter-spacing: .05rem;
  font-weight: 400;
  color: $defaultFontColor;
}

.router-view {
  padding: 1rem 2rem;
}
</style>
