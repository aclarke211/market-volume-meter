<template>
  <div :class="className">
    <div class="times__container">
      <div class="utc-time time__container">
        <label class="utc-time__label" v-html="`${clocks.utcTime.label}: `" />
        <div class="utc-time__clock clock">{{ currentUTCTime }}</div>
      </div>
      <div class="utc-time time__container">
        <label class="current-time__label" v-html="`${clocks.localTime.label}: `" />
        <div class="current-time__clock clock">{{ currentLocalTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dateManager from '@/utils/date-manager';

export default {
  name: 'ClockComp',

  data: () => ({
    className: 'clock-comp',
    clocks: {
      localTime: {
        label: 'Local Time',
      },
      utcTime: {
        label: 'UTC Time',
      },
    },
  }),

  computed: {
    currentUTCTime() {
      return dateManager.getDateUTC();
    },
    currentLocalTime() {
      return dateManager.getLocalDate();
    },
  },
};
</script>

<style lang="scss">
/* Sass Variables */
$className: ".clock-comp";

#{$className} {
  margin: 0;
  padding: 0;
}

</style>
