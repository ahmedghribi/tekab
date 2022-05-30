<template>
  <section class="period">
    <span class="lapId">
      <h2>Period {{lapId}}</h2>
    </span>
    <div class="small">
      <p>{{lapDateStart}} - {{lapDateEnd}}</p>
      <p class="lap">{{lapFormattedTime}}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["lapId", "lapDateStart", "lapDateEnd", "lapFormattedTime"],
});
</script>
<style lang="scss" scoped>
.period {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #eeeeee;
  gap: 1rem;
  .small {
    display: flex;
    p {
      margin: 0;
      margin-right: 2rem;
      color: #6b7581;
    }

  }
  .lapId {
    h2 {
      margin: 0 0 0.25rem 0;
      color: #6d7783;
      font-size: 1rem;
    }
  }
}
@media (min-width: 640px) {
  .period {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
