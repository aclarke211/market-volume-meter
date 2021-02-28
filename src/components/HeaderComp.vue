<template>
  <div :class="className">
    <div :class="`${className}__inner`">
      <h1 :class="`${className}__title`">{{ title }}</h1>
      <ClockComp />
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

#{$className} {
  margin: 0;
  padding: .25rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;

  &__inner {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 600;
    margin-left: 0;
  }
}

</style>
