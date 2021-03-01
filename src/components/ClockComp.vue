<template>
  <div :class="className">
    <div class="times__container">
      <div class="nyse-time time__container">
        <label class="nyse-time__label" v-html="`${clocks.nyseTime.label}: `" />
        <div class="nyse-time__clock clock">
          {{ formatTime(clocks.nyseTime.value) }}
        </div>
      </div>
      <div class="lse-time time__container">
        <label class="lse-time__label" v-html="`${clocks.lseTime.label}: `" />
        <div class="lse-time__clock clock">
          {{ formatTime(clocks.lseTime.value) }}
        </div>
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
      let hours = Math.floor(this.clocks.timeRunning.value / 1000 / 60 / 60);
      let mins = Math.floor((this.clocks.timeRunning.value / 1000 / 60 / 60 - hours) * 60);
      let secs = Math.floor(
        ((this.clocks.timeRunning.value / 1000 / 60 / 60 - hours) * 60 - mins) * 60,
      );

      secs = secs < 10 ? (secs = `0${secs}`) : (secs = `${secs}`);
      mins = mins < 10 ? (mins = `0${mins}`) : (mins = `${mins}`);
      hours = hours < 10 ? (hours = `0${hours}`) : (hours = `${hours}`);

      return `${hours}h:${mins}m:${secs}s`;
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
      return unformattedTime
        .toString()
        .substring(unformattedTime.toString().indexOf(', '))
        .replace(', ', '');
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

  .times__container {
    display: flex;
    flex-direction: row;
  }

  .time__container {
    margin: .5rem 1rem;
    padding: 0;
    text-align: center;
  }
}
</style>
