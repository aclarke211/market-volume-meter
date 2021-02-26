<template>
  <div :class="className">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'StocksComp',

  data: () => ({
    msg: 'Stocks Component',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
