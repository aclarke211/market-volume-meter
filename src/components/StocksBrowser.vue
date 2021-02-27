<template>
  <div :class="className">
    <h2 :class="`${className}__title`">{{ title }}</h2>
    <p :class="`${className}__description`">{{ description }}</p>
    <div class="stocks__container">
      <StockItem
        v-for="(stock, stockKey) in stocks"
        :key="stockKey"
        :name="stock.name"
      />
    </div>
  </div>
</template>

<script>
import StockItem from '@/components/StockItem.vue';

export default {
  name: 'StocksBrowser',

  props: {
    stocks: {
      type: Array,
      default: () => ([
        {
          name: {
            text: 'Apple',
            symbol: 'AAPL',
          },
        },
        {
          name: {
            text: 'Microsoft Corp.',
            symbol: 'MSFT',
          },
        },
        {
          name: {
            text: 'Tesla',
            symbol: 'TSLA',
          },
        },
      ]),
    },
  },

  data: () => ({
    title: 'Stocks Browser',
    description: 'Currently using mock data.',
    className: 'stocks-browser',
  }),

  components: {
    StockItem,
  },
};
</script>

<style lang="scss">
/* Sass Variables */
$className: '.stocks-browser';

#{$className} {
  border: solid forestgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 100%;
  margin: 1rem;
}

</style>
