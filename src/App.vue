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
  src: url('./assets/fonts/Oxygen/Oxygen-Regular.ttf');
}

* {
  font-family: 'oxygen-regular', sans-serif;
}
</style>
