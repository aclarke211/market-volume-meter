<template>
  <div class="home">
    <StocksComp />
    <DescriptionComp />
  </div>
</template>

<script>
import DescriptionComp from '@/components/DescriptionComp.vue';
import StocksComp from '@/components/StocksComp.vue';

export default {
  name: 'Home',
  components: {
    DescriptionComp,
    StocksComp,
  },
};
</script>
