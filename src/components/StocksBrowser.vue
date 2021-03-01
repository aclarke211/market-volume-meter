<template>
  <div :class="className" :key="timesGenerated">
    <h2 :class="`${className}__title`" v-html="title" />
    <p :class="`${className}__description`" v-html="description" />
    <div :class="`${className}__controls__container`">
      <button
        :class="`${className}__control`"
        @click="regenerate()">
          Re-generate
      </button>
    </div>
    <div class="stocks__container">
      <StockItem
        v-for="(stock, stockKey) in instruments.stocks"
        :key="stockKey"
        :name="stock.name"
        :volume="stock.volume"
        :percent-value="stock.percentValue"
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
    timesGenerated: 0,
    autoRefreshTime: 3000,
  }),

  computed: {
    instruments() {
      console.log(this.timesGenerated);

      const refreshedStocks = {
        stocks: this.generateStocks(),
      };

      return refreshedStocks;
    },
  },

  methods: {
    regenerate() {
      this.timesGenerated += 1;
    },

    generateRandomValue(min, max) {
      const randomNum = Math.random() * (max - min) + min;
      return Math.floor(randomNum);
    },

    generateStocks() {
      const updatedStocks = this.stocks.map((stock) => {
        const tempStock = stock;

        tempStock.volume = this.generateVolume(tempStock);
        tempStock.percentValue = this.calculateVolumePercent(tempStock.volume);
        return tempStock;
      }).sort((a, b) => parseFloat(b.percentValue) - parseFloat(a.percentValue));

      return updatedStocks;
    },

    generateVolume(stock) {
      const rel = this.getRelativeValue(stock);
      const cur = this.generateRandomValue(0, 6);
      const tot = this.getTotalVaue(stock, cur);

      return {
        relative: rel,
        total: tot,
        current: cur,
      };
    },

    getTotalVaue(stock, current) {
      if (stock.volume) {
        return stock.volume.total + current;
      }
      return current;
    },

    getRelativeValue(stock) {
      let relativeValue;

      switch (stock.name.symbol) {
        case 'TSLA':
          relativeValue = 37;
          break;
        case 'AAPL':
          relativeValue = 36;
          break;
        case 'MSFT':
          relativeValue = 35;
          break;

        default:
          return 0;
      }

      return relativeValue;
    },

    calculateVolumePercent(volume) {
      return parseFloat((volume.total / (volume.relative / 100)).toFixed(2), 10);
    },

    reorderStocks(stocks) {
      return stocks.sort((a, b) => parseFloat(b.percentValue) - parseFloat(a.percentValue));
    },
  },

  mounted() {
    setInterval(() => {
      this.regenerate();
    }, this.autoRefreshTime);
  },

  components: {
    StockItem,
  },
};
</script>

<style lang="scss">
/* Sass Variables */
$className: '.stocks-browser';

#{$className} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

</style>
