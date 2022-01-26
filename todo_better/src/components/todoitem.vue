<template>
  <div :class="sus" id="todoit" v-show="itemlist.length != 0">
    <div class="fir" v-for="item in itemlist" :key="item.uuid">
      <div>
        <label @click="checkstat($event, item.uuid)">
          <input type="checkbox" :checked="item.done" />
          <span>{{ item.thing }} </span>
        </label>
        <button @click="deletet(item.uuid)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sus: "item-sur-day",
    };
  },
  props: ["itemlist"],
  methods: {
    deletet(uuid) {
      // this.delt(uuid) //方法一:利用App.vue里面传过来的函数,把数值传递给父组件
      this.$emit("deltodo", uuid);
    },
    checkstat(ele, uid) {
      if (ele.target.tagName == "SPAN") {
        return;
      }
      // this.setstatus(uid)
      this.$emit("setstatus", uid);
    },
  },
  watch: {
    sus: {
      immediate: true,
      handler() {
        let ho = new Date().getHours();
        if (ho >= 7 && ho < 18) {
          this.sus = "item-sur-day";
        } else {
          this.sus = "item-sur-night";
        }
      },
    },
  },
};
</script>

<style>
#todoit {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  margin-top: 10px;
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
}
#todoit .fir {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 3px;
  box-shadow: 1px 1px 5px #aaa, -1px -1px 5px #333;
  border: 1px solid #aaa;
}

#todoit .fir div {
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  margin-top: 3px;
  margin-bottom: 3px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

#todoit .fir div label {
  overflow: hidden;
  white-space: nowrap;
  min-width: 70px;
  max-width: 140px;
  display: inline-block;
  margin-left: 10px;
}
#todoit .fir div button {
  float: right;
  margin-right: 3%;
  border-radius: 8px;
  color: #fff;
  outline: none;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  border-width: 0px;
}

#todoit .fir div button:hover {
  background-color: red;
}
.item-sur-day {
  background-color: #eee;
  color: #444;
  box-shadow: 1px 1px 5px #aaa, -1px -1px 5px #333;
}
.item-sur-day .fir div button {
  background-color: orange;
}
.item-sur-night {
  background-color: #444;
  color: #ccc;
  box-shadow: 1px 1px 5px #aaa, -1px -1px 5px #333;
}
.item-sur-night .fir div button {
  background-color: purple;
}
.item-sur-none {
  display: none;
}
</style>
