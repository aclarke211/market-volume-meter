<template>
  <div :class="className">
    <div class="times__container">
      <div class="utc-time time__container">
        <label class="utc-time__label" v-html="`${clocks.utcTime.label}: `" />
        <div class="utc-time__clock clock">{{ clocks.utcTime.value }}</div>
      </div>
      <div class="local-time time__container">
        <label class="local-time__label" v-html="`${clocks.localTime.label}: `" />
        <div class="local-time__clock clock">{{ formatTime(clocks.localTime.value) }}</div>
      </div>
      <div class="nyse-time time__container">
        <label class="nyse-time__label" v-html="`${clocks.nyseTime.label}: `" />
        <div class="nyse-time__clock clock">{{ formatTime(clocks.nyseTime.value) }}</div>
      </div>
      <div class="lse-time time__container">
        <label class="lse-time__label" v-html="`${clocks.lseTime.label}: `" />
        <div class="lse-time__clock clock">{{ formatTime(clocks.lseTime.value) }}</div>
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
        value: dateManager.getLocalDate(),
      },
      nyseTime: {
        label: 'New York',
        initialValue: dateManager.getTimezoneDate('America/New_York'),
        value: dateManager.getTimezoneDate('America/New_York'),
      },
      lseTime: {
        label: 'London',
        initialValue: dateManager.getTimezoneDate('Europe/London'),
        value: dateManager.getTimezoneDate('Europe/London'),
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
  },

  methods: {
    updateTimes() {
      this.clocks.utcTime.value = dateManager.getDateUTC();
      this.clocks.localTime.value = dateManager.getLocalDate();
      this.clocks.nyseTime.value = dateManager.getTimezoneDate('America/New_York');
      this.clocks.lseTime.value = dateManager.getTimezoneDate('Europe/London');
      this.clocks.timeRunning.value += parseInt(this.clockTimeMs, 10);
    },

    formatTime(unformattedTime) {
      return unformattedTime.toString().substring(unformattedTime.toString().indexOf(', ')).replace(', ', '');
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
