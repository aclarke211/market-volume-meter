<template>
  <div :class="className">
    <div :class="`${className}__name`">
      <h3 :class="`${className}__text`">{{ name.text }}</h3>
      <h4 :class="`${className}__symbol`">{{ name.symbol }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockItem',

  props: {
    name: {
      type: Object,
      default: () => ({
        text: 'Stock Name',
        symbol: 'SYMB',
      }),
    },
  },

  data: () => ({
    className: 'stock-item',
  }),
};
</script>

<style lang="scss">
/* Sass Variables */
$className: '.stock-item';

#{$className} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &__name {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    &__text {
      font-size: 1.25rem;
      font-weight: 400;
    }

    &__symbol {
      color: darkgrey;
      font-size: .75rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      margin: .25rem;
    }
  }
</style>
