<template>
  <div :class="className">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data: () => ({
    msg: 'Market Volume Meter',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
