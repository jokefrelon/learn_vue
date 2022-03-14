<template>
  <div class="outerbox">
    <div class="box1">
      <ul>
        <label>
          <router-link to="/main" >
            <li><span>🎆</span>Main</li>
          </router-link>
        </label>

        <label>
          <router-link to="/about" >
            <li><span>🎃</span> About</li>
          </router-link>
        </label>
      </ul>
    </div>
    <div class="appage">
			<router-view></router-view>
    </div>
  </div>
</template>

<script>
import mainpa from "./components/mainpa";
import about from "./components/about";

export default {
  name: "App",
  components: {
    mainpa,
    about,
  },
};
</script>

<style>
.outerbox {
	height: 100vh;
	overflow: hidden;
	clear: both;
}
a{
	text-decoration: none;
}
a:visited{
	color: gray;
}
a:hover{
	color:yellow
}
.box1 {
	width: 15%;
  height: 100%;
  background-color: lightslategray;
  float: left;
}

.box1 ul {
  display: inline-block;
  list-style-type: none;
  text-align: center;
  width: 100%;
  padding: 0;
  margin-top: 50px;
  margin-bottom: 0;
}
.box1 li span {
  width: 30%;
  display: inline-block;
  text-align: justify;
}
.box1 li {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  border: solid 1px slateblue;
  font-size: 16px;
  border-radius: 5px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 8px 0px;
  background-color: pink;
}

.appage {
  float: left;
  width: 85%;
  height: 100%;

}
</style>
