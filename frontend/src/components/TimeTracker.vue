<template>
  <div class="container">
    <Header
      :total="total"
      :formattedTime="formattedTime"
      :laps="laps"
      @start="start"
      @stop="stop"
    />
    <main>
      <section class="period" v-if="showCurrentPeriod">
        <div class="lapId">
          <h2>Period {{ laps.length + 1 }}</h2>
          <p>Current Period</p>
        </div>
        <div class="period_time">
          <p>Started {{ dateStart }}</p>
          <p>{{ formattedTime }}</p>
        </div>
      </section>
      <Period
        v-for="(lap, index) in laps.slice().reverse()"
        :key="index"
        :lapId="lap.id"
        :lapDateStart="lap.DateStart"
        :lapDateEnd="lap.DateEnd"
        :lapFormattedTime="lap.FormattedTime"
      />
    </main>
    <Footer :total="total" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Header from "@/components/Header.vue";
import Period from "@/components/Period.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: "TimeTracker",
  components: {
    Header,
    Footer,
    Period,
  },
  data() {
    return {
      id: 0,
      total: 0 as number | string,
      showCurrentMonth: "",
      currentTimer: 0,
      dateStart: "" as number | string,
      dateEnd: "" as number | string,
      laps: [] as any,
      showCurrentPeriod: false,
      showCurrentDate: "" as number | string,
      formattedTime: "00:00" as string,
      timerState: "stopped",
      clicker: 0 as number,
    };
  },
  methods: {
    start() {
      if (this.timerState !== "running") {
        this.click();
        this.timerState = "running";
        const da = new Date();
        this.dateStart = da.toLocaleTimeString();
        this.showCurrentPeriod = true;
      }
    },
    click() {
      this.clicker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000);
    },

    stop() {
      if (this.timerState === "running") {
        window.clearInterval(this.clicker);
        const d = new Date();
        this.dateEnd = d.toLocaleTimeString();
        this.id = this.laps.length + 1;
        this.addLap();
        this.currentTimer = 0;
        this.formattedTime = "00:00:00";
        this.timerState = "stopped";
        this.showCurrentPeriod = false;
        this.totalTimer();
      }
    },
    addLap() {
      axios
        .post("https://localhost:3000/laps", {
          id: this.id,
          DateStart: this.dateStart,
          DateEnd: this.dateEnd,
          FormattedTime: this.formattedTime,
          seconds: this.currentTimer,
        })
        .then(() => this.getLap());
    },
    getLap() {
      axios
        .get("https://localhost:3000/laps")
        .then((res) => (this.laps = res.data))
        .then(() => this.totalTimer());
    },
    formatTime(seconds: number) {
      let measuredTime = new Date(0);
      measuredTime.setSeconds(seconds);
      let MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    },
    totalTimer() {
      if (this.laps.length) {
        const total = this.laps.reduce((a: any, b: any) => ({
          seconds: a.seconds + b.seconds,
        }));
        const totals = total.seconds + this.currentTimer;
        this.total = this.formatTime(totals);
      } else {
        this.total = this.formatTime(this.currentTimer);
      }
    },
  },
  watch: {
    currentTimer: function () {
      this.totalTimer();
    },
  },
  created() {
    this.getLap();
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.period {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #60b669;
  border-bottom: solid 1px #60b669;
  gap: 1rem;
  .lapId {
    h2 {
      margin: 0 0 0.25rem 0;
      color: #6d7783;
      font-size: 1rem;
    }
    p {
      margin: 0;
      color: #999999;
      font-weight: 500;
    }
  }
  .period_time {
    display: flex;
    p {
      margin-right: 2rem;
      color: #6b7581;
    }
    p:nth-child(2) {
      color: #60b669;
      font-weight: bold;
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
