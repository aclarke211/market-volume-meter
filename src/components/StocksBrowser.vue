<template>
  <div :class="className">
    <h2 :class="`${className}__title`" v-html="title" :style="{color: randomColour}" />
    <p :class="`${className}__description`" v-html="description" />
    <div :class="`${className}__controls__container`">
      <button
        :class="`${className}__control`"
        @click="generateStocks()">
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
  }),

  computed: {
    instruments() {
      return {
        stocks: this.generateStocks(),
      };
    },

    randomColour() {
      const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const defaultColourValues = ['0', '0', '0', '0', '0', '0'];

      const color = defaultColourValues.map((char) => {
        let hexValue = char;
        const hexIndex = Math.floor(Math.random() * (hex.length) - 0) + 0;

        hexValue = hex[hexIndex];
        return hexValue;
      });

      return `#${color.toString().replaceAll(',', '')}`;
    },
  },

  methods: {
    generateValues(min, max) {
      const randomNum = Math.random() * (max - min) + min;
      return Math.floor(randomNum);
    },

    generateStocks() {
      const updatedStocks = this.stocks.map((stock) => {
        const tempStock = stock;

        tempStock.volume = this.generateVolume();
        tempStock.percentValue = this.calculateVolumePercent(tempStock.volume);
        return tempStock;
      });

      this.$forceUpdate();
      return updatedStocks;
    },

    generateVolume() {
      return {
        relative: this.generateValues(10, 100),
        total: this.generateValues(10, 100),
        current: this.generateValues(10, 100),
      };
    },

    calculateVolumePercent(volume) {
      return parseFloat((volume.total / (volume.relative / 100)).toFixed(2), 10);
    },
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
