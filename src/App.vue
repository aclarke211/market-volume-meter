<template>
  <div id="app">
    <HeaderComp />
    <router-view/>
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

<style>
@font-face {
  font-family: 'oxygen-regular';
  src: url('./assets/fonts/Oxygen/Oxygen-Light.ttf');
}

* {
  font-family: 'oxygen-regular', sans-serif;
  letter-spacing: .05rem;
  font-weight: 400;
}
</style>
