<template>
  <div class="home">
    <DescriptionComp />
    <StocksBrowser />
  </div>
</template>

<script>
import DescriptionComp from '@/components/DescriptionComp.vue';
import StocksBrowser from '@/components/StocksBrowser.vue';

export default {
  name: 'Home',
  components: {
    DescriptionComp,
    StocksBrowser,
  },
};
</script>
