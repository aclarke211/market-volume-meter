<template>
  <div :class="className">
    <div :class="`${className}__name-container`">
      <h3 :class="`${className}__text`">{{ name.text }}</h3>
      <h4 :class="`${className}__symbol`">{{ name.symbol }}</h4>
    </div>

    <div class="percentages__container">
      <div class="volume-percent percentage">
        <label class="volume-percent__label">Volume Percent: </label>
        <div class="volume-percent__value">{{ percentValue }}%</div>
      </div>
    </div>

    <div class="volume__container">
      <div class="volume-item relative">
        <div class="volume-item__name">Relative Vol.</div>
        {{ volume.relative }}
      </div>
      <div class="volume-item total">
        <div class="volume-item__name">Total Vol.</div>
        {{ volume.total }}
      </div>
      <div class="volume-item current">
        <div class="volume-item__name">Current Vol.</div>
        {{ volume.current }}
      </div>
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

    volume: {
      type: Object,
      default: () => ({
        relative: 0,
        total: 0,
        current: 0,
      }),
    },

    percentValue: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    className: 'stock-item',
  }),
};
</script>

<style lang="scss">
/* Sass Variables */
$className: ".stock-item";

#{$className} {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &__name-container {
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
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    margin: 0.25rem;
  }

  .percentages__container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .percentage {
    margin: 0 .25rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .volume__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: .25rem;

    .volume-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: .25rem;
    }
  }
}
</style>
