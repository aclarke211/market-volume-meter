<template>
  <div :class="className">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'StockComp',

  data: () => ({
    msg: 'Stock',
  }),
};
</script>

<style lang="scss">

</style>
