<template>
  <div :class="className">
    <h1 :class="`${className}__title`">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data: () => ({
    title: 'Market Volume Meter',
    className: 'header-comp',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* Sass Variables */
$className: ".header-comp";

#{$className} {
  margin: 0;
  padding: 0;
}

</style>
