<template>
  <div :class="className">
    <h1 :class="`${className}__title`" v-html="title" />
    <DescriptionComp />
  </div>
</template>

<script>
import DescriptionComp from '@/components/DescriptionComp.vue';

export default {
  name: 'About',

  data: () => ({
    className: 'about-route',
    title: 'About',
  }),

  components: {
    DescriptionComp,
  },
};
</script>
