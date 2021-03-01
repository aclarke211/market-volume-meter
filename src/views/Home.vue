<template>
  <div class="home">
    <StocksBrowser />
  </div>
</template>

<script>
import StocksBrowser from '@/components/StocksBrowser.vue';

export default {
  name: 'Home',
  components: {
    StocksBrowser,
  },
};
</script>
