<template>
  <div :class="className">
    <div class="times__container">
      <div class="utc-time time__container">
        <label class="utc-time__label" v-html="`${clocks.utcTime.label}: `" />
        <div class="utc-time__clock clock">{{ clocks.utcTime.value }}</div>
      </div>
      <div class="local-time time__container">
        <label class="local-time__label" v-html="`${clocks.localTime.label}: `" />
        <div class="local-time__clock clock">{{ formattedLocalTime }}</div>
      </div>
      <div class="time-running time__container">
        <label class="time-running__label" v-html="`${clocks.timeRunning.label}: `" />
        <div class="time-running__clock clock">{{ clockTimeSeconds }}s</div>
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
    clockTimeMs: '1000',
    clocks: {
      timeRunning: {
        label: 'Time Running',
        value: 0,
      },
      localTime: {
        label: 'Local Time',
        initialValue: dateManager.getLocalDate(),
        value: dateManager.getLocalDate().toTimeString(),
      },
      utcTime: {
        label: 'UTC Time',
        initialValue: dateManager.getDateUTC(),
        value: dateManager.getDateUTC(),
      },
    },
  }),

  computed: {
    clockTimeSeconds() {
      return this.clocks.timeRunning.value / 1000;
    },

    formattedLocalTime() {
      return this.clocks.localTime.value.toString().substring(0, this.clocks.localTime.value.toString().indexOf(' '));
    },
  },

  methods: {
    updateTimes() {
      this.clocks.localTime.value = dateManager.getLocalDate().toTimeString();
      this.clocks.utcTime.value = dateManager.getDateUTC();
      this.clocks.timeRunning.value += parseInt(this.clockTimeMs, 10);
    },
  },

  mounted() {
    setInterval(() => {
      this.updateTimes();
    }, this.clockTimeMs);
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
