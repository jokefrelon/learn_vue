<template>
  <div>
    <p>这是当前已知最新小行星: {{ $store.state.sta[$store.state.nw] }}</p>
    <button @click="nextp">下一颗小星星星星</button>
    <button @click="tofirst">第一颗小星星🎀</button>
    <button @click="dest">摧毁小星星</button><br />
    <p>
      添加一颗小星星:
      <input v-model="inp" type="text" @keydown.enter="addplant" />
    </p>
    <hr />
    <p>已知小行星: {{ $store.state.sta }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inp: "",
    };
  },
  methods: {
    nextp() {
      if (this.$store.state.nw + 1 == this.$store.state.sta.length) {
        alert("最后一颗小星星啦!⭐");
      } else {
        this.$store.state.nw += 1;
      }
    },
    addplant() {
      this.$store.state.sta.unshift(this.inp);
      this.$store.state.nw = 0;
      this.inp = "";
    },
    tofirst() {
      this.$store.state.nw = 0;
		},
		// 实际开发中不建议上面👆三种写法，这样不好，devtools不能捕获mutations里面的方法
		// 下面的写法才是推荐写法
		dest(){
			this.$store.dispatch('destroyPlant')
		},
  },
};
</script>

<style></style>
