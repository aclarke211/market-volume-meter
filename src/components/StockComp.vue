<template>
  <div :class="className">
    <h1>{{ name.text }}</h1>
    <h2>{{ name.symbol }}</h2>
  </div>
</template>

<script>
export default {
  name: 'StockComp',

  props: {
    name: {
      type: Object,
      default: () => ({
        text: 'Stock Name',
        symbol: 'SYMB',
      }),
    },
  },
};
</script>

<style lang="scss">

</style>
