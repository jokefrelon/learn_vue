<template>
  <div :class="statu" id="sta">
    <div>
      <p>
        已做完<span :id="spco">{{ donetings }}</span
        >件事/共计<span :id="spco">{{ all }}</span
        >件事
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statu: "sta-day",
      spco: "",
    };
  },
  props: ["itemlistSta"],
  watch: {
    statu: {
      immediate: true,
      handler() {
        let ho = new Date().getHours();
        if (ho >= 7 && ho < 18) {
          this.statu = "sta-day";
        } else {
          this.statu = "sta-night";
        }
      },
    },
  },
  computed: {
    donetings: {
      get() {
        let as = 0;
        for (let er = 0; er < this.itemlistSta.length; er++) {
          if (this.itemlistSta[er].done == true) {
            as++;
          }
        }
        if (as == this.all) {
          this.spco = "green";
        } else {
          this.spco = "";
        }
        return as;
      },
    },
    all: {
      get() {
        return this.itemlistSta.length;
      },
    },
  },
};
</script>

<style scoped>
#sta {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 1px 5px #aaa, -1px -1px 5px #333;
  border-radius: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  margin-top: 10px;
  font-family: "Courier New", Courier, monospace;
}
#sta div {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
}
#sta span {
  border-radius: 5px;
  font-size: 16px;
	font-weight: bold;
  padding: 0 2px;
  margin: 0 1px;
}
#sta p {
  margin-left: 5px;
}
.sta-day {
  background-color: #eee;
  color: #444;
}
.sta-day span {
  background-color: #aaa;
  color: #333;
}
.sta-night {
  background-color: #444;
  color: #ccc;
}
.sta-night span {
  background-color: #333;
  color: #aaa;
}
#green {
  color: green;
}
</style>
