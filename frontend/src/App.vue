<template>
  <TimeTracker />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeTracker from "./components/TimeTracker.vue";

export default defineComponent({
  name: "App",
  components: {
    TimeTracker,
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Arial";
}
</style>
