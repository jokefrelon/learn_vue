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
      // this.$emit("deltodo", uuid);//方法二:直接利用emit方法来传递
      this.$bus.$emit("delt", uuid); //方法三线程总线

      // 比较一下三种方法的优缺点
      // (1.直接利用 利用标签传值给子组件,然后子组件通过配置 props 来接收父组件的方法/函数来达到组件间的通信)
      // 			- 优点:基本上没有,只在父子间通信可以考虑
      // 			- 缺点:父子之间通信还可以,但是如果是相隔多个组件再和父组件通信那就要老命了
      // (2.$emit 虽然不用配置 props 来接收,但是还是要在父组件里面用自定义事件来传值)
      // 			-	<todoitem :itemlist="dolist" @deltodo="delt" @setstatus="setstatus"></todoitem>
      // 			- 优点:反正多多少少比上面那种方法高级一点
      // 			- 缺点:反正和上面的相比半斤八两
      // (3.this.$bus.$emit('xxx') )
      // 			- 用法:
      // 						new Vue({
      // 					  render: h => h(App),
      // 						beforeCreate(){
      // 							Vue.prototype.$bus = this//关键操作，添加总线
      // 						}
      // 						}).$mount('#app')
      // --------------------------------------------------------------------------------				
			// 						这个时候咱们就不需要在App.vue里面用标签传参的方式传递数据了
			// 						只需要定义好方法，然后在挂载和销毁的时候开启自定义事件就可以啦
			// 						mounted() {
  		// 						  this.$bus.$on("delt", this.delt);
  		// 						  this.$bus.$on("setstatus", this.setstatus);
  		// 						},
  		// 						beforeDestroy() {
  		// 						  this.$bus.$off("delt");
  		// 						  this.$bus.$off("setstatus");
  		// 						},
			// --------------------------------------------------------------------------------
			// 						然后在我们需要兄弟、父子之间传递数据的时候就可以直接调用方法了/应该是这样
			// 						this.$bus.$emit("delt", uuid);
    },
    checkstat(ele, uid) {
      if (ele.target.tagName == "SPAN") {
        return;
      }
      // this.setstatus(uid)
      // this.$emit("setstatus", uid);
      this.$bus.$emit("setstatus", uid);
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
