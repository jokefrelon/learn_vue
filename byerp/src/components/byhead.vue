<template>
  <!-- <div id="container1">
		<div @click="change" :class="butclo" id="firstc"></div>
		<div id="byhead"></div>
		<div :class="sidebar" id="sidebar" v-show=' this.butclo == "but-night-close" || this.butclo == "but-day-close" '>
			<ul>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
				<li><p>li ksjdfghsdjhgfjkshdgfjsdkhfgjskdhfgjh</p></li>
			</ul>
		</div>
		<div :class="context">

		</div>
	</div> -->
  <div class="context">
    <div
      v-for="(its, index) in tos"
      :key="its.uuid"
      data-index="index"
      class="childtab"
    >
      <div class="boox" @mouseover ="showul(index)" @mouseout="disshowul(index)" @focusout ="disshowul(index)">
        <span>{{ its.name }}</span>
        <ul v-show="ishover" ref="blk">
          <a href="http://192.168.31.100:8081/"><li v-for="lol in its.cont" :key="lol">{{ lol }}</li></a>
        </ul>
      </div>
    </div>
    <div class="nosho"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tos: [
        {
          name: "菜单111",
          uuid: "123456",
          cont: [
            "halo测试",
            "个东西",
            "激光发射dfas",
            "胜多负少",
            "技术监督局",
            "好噶阿加莎",
          ],
        },
        {
          name: "菜单222",
          uuid: "123422",
          cont: ["而同时", "犹太人", "史蒂夫sdf", "复合弓"],
        },
        {
          name: "菜单333",
          uuid: "123445",
          cont: ["是德国发", "海南岛", "就仿佛", "风格化"],
        },
        {
          name: "菜单444",
          uuid: "123489",
          cont: ["士大夫", "受到广泛", "山大佛雇佣了", "十多个发", "jhgfds"],
        },
        {
          name: "菜单555",
          uuid: "128900",
          cont: ["古反对梵蒂冈", "水电费", "撒地方水电费", "设计和控股"],
        },
      ],
      ishover: false,
    };
  },
  methods: {
    showul(index) {
      var ss = this.$refs.blk;
      ss[index].style.display = "inline";
    },
    disshowul(index) {
      var ss = this.$refs.blk;
      ss[index].style.display = "none";
    },
  },
};
</script>

<style>
.context {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
}
.nosho {
  clear: both;
}

.context .childtab {
  width: 20%;
  height: 30px;
  line-height: 30px;
  float: left;
  border-radius: 6px;
  margin: 0 -1.1px;
  text-align: center;
}
.context .childtab span {
  width: 80%;
  background-color: #809080;
  display: inline-block;
	border-radius: 5px;
}
.context .childtab :hover {
  color: aqua;
}
.context .childtab ul:hover {
  font-family: "Courier New", Courier, monospace;
}
.context .childtab ul a:hover,a:link,a:visited,a:active,a:focus{
	text-decoration:none;
	color: none;
}
.context .childtab ul li {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: red;
  list-style-type: none;
  text-align: center;
}
.context .childtab ul li:hover {
  border-bottom: 1px solid #809088;
  background-color: #166;
  margin-bottom: -1px;
}
</style>
