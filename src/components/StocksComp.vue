<template>
  <div :class="className">
    <h1>{{ title }}</h1>
    <div class="stocks__container">
      <StockComp
        v-for="(stock, stockKey) in stocks"
        :key="stockKey"
        :name="stock.name"
      />
    </div>
  </div>
</template>

<script>
import StockComp from '@/components/StockComp.vue';

export default {
  name: 'StocksComp',

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
            text: 'GameStop',
            symbol: 'GME',
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
    title: 'Stocks',
  }),

  components: {
    StockComp,
  },
};
</script>

<style lang="scss">

</style>
