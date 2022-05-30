<template>
  <footer>
    <h2>
      Total
      <span>{{ total }}</span>
    </h2>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["total"],
});
</script>
<style lang="scss" scoped>
footer {
  font-weight: bold;
  text-align: end;
  padding: 0.25rem 1rem;
  border-top: solid 1px #e8e8e8;
  border-bottom: solid 1px #e8e8e8;
  span {
    color: #60b669;
  }
}
</style>
