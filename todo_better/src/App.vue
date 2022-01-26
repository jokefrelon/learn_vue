<template>
  <div class="edge">
    <ipt @addlist="adddolist"></ipt>
    <todoitem :itemlist="dolist" @deltodo="delt" @setstatus="setstatus"></todoitem>
    <status :itemlistSta="dolist"></status>
  </div>
</template>

<script>
import ipt from "./components/input";
import todoitem from "./components/todoitem";
import status from "./components/status";

export default {
  name: "App",
  components: {
    ipt,
    todoitem,
    status
  },
  data() {
    return {
      dolist: [],
    };
  },
  methods: {
    adddolist(e) {
      this.dolist.unshift(e);
    },
		delt(uid){
			for(var er = 0;er<this.dolist.length;er++){
				if (this.dolist[er].uuid == uid) {
					this.dolist.splice(er, 1);
					break;
				}
			}
			
		},
		setstatus(uid){
			for (let er = 0; er < this.dolist.length; er++){
				if(this.dolist[er].uuid == uid){
					this.dolist[er].done = !(this.dolist[er].done)
				}
			}
		}
  },
	watch:{
		dolist: {
			deep: true,
			handler(){
				localStorage.setItem("datas",JSON.stringify(this.dolist))
			}
		}
	},
  mounted() {
    let ho = new Date().getHours();
		// console.log(ho);
    if (ho >= 7 && ho < 18) {
      document
        .querySelector("body")
        .setAttribute("style", "background-color:#fff");
    } else {
      document
        .querySelector("body")
        .setAttribute("style", "background-color:#2b2b2b");
    }
  },
	beforeMount(){
		var ss = JSON.parse(localStorage.getItem("datas"))
		this.dolist=ss
		console.log(ss);
	}
};
</script>

<style>
.edge {
  margin-top: 30px;
  width: 100%;
  min-width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
