<template>
  <div :class="className">
    <div class="messages-container">
      <p v-for="(msg, msgKey) in messages"
        :key="msgKey"
        v-html="msg">
      </p>
    </div>
    <ul class="bullets-container">
      <li v-for="(bullet, bulletKey) in bullets"
        :key="bulletKey"
        v-html="bullet">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DescriptionComp',

  data: () => ({
    messages: [
      '<strong>[NOTE]:</strong> This meter is currently showing mock data.',
      'This meter shows the following statistics.',
    ],
    bullets: [
      'Every morning a stock has a relative volume.',
      'As the volume trades, the total volume traded on the day goes up.',
      'Expresses in a percentage, how much volume has been traded vs. the stocks relative volume.',
      'If the meter gets to 100% at 10:00, alert the user.',
      'If it gets to 100% at 16:00, that\'s an average day.',
    ],
  }),
};
</script>

<style lang="scss">

</style>
