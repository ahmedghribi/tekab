<template>
  <header>
    <h2>Today, {{CurrentDate + ' ' + currentMonth}}</h2>
    <div class="header">
      <button class="stop" @click="$emit('stop')">
        Stop
      </button>
      <button class="start" @click="$emit('start')">
        Start new
      </button>
      <p class="time" v-if="laps.length">{{total}}</p>
      <p class="time" v-if="!laps.length">{{formattedTime}}</p>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["total", "formattedTime", "laps"],
  data() {
    return {
      currentMonth: "",
      CurrentDate: "" as any,
    };
  },
  methods: {
    getCurrentDateTime() {
      let date = new Date();
      const month = date.toLocaleString("en-us", { month: "long" });
      this.currentMonth = month;
      const currentDate = date.getDate();
      this.CurrentDate = currentDate;
    },
  },
  created() {
    this.getCurrentDateTime();
  },
});
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 3rem;
  h2 {
    color: #415c73;
  }
  button {
    outline: none;
    margin-right: 2rem;
    padding: 0.5rem 0.75rem;
    background-color: white;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    cursor: pointer;
    i {
      margin-right: 0.25rem;
      font-size: 1rem;
    }
  }
  button:active {
    transform: scale(0.9);
  }
  button:hover {
    background-color: #f0eaea;
  }
  p {
    color: #60b669;
    font-size: 1.25rem;
  }
}
@media (min-width: 768px) {
  header {
    flex-direction: row;
    justify-content: space-between;
  }
}
.header {
  display: flex;
  align-items: center;
  .stop {
    border: 1px solid red;
    color: red;
  }
  .start {
    border: 1px solid #089308;
    color: #089308;
  }
  .time{
      font-weight: bold;
  }
}

</style>
