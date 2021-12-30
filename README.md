# Vue

# 1. new to Vue

## 简单常识:

### v-bind:(单项数据绑定)

用来绑定数据的,区别于`{{}}`,v-bind多用于标签元素的attribution,而`{{}}`多用于标签中间的*数字/数值/字符串等*

v-bind可以简写为`:`,而且他是单项数据绑定,数据只能由data里面的变量决定,即使在表单元素里面修改,v-bind绑定的数据也不会有反应

### v-model:(双向数据绑定)

虽然都是数据绑定,但是v-model只能用于表单元素,而且表单内数据的更新会带着data内的数据一起更新.

```vue
<div id="doubt">
	<h3>{{eerr}} {{Date.now()}} </h3>
	<a v-bind:href="urls" v-bind:title="span_title" >{{intos}}</a>
	<a :href="urls" :title="span_title" >{{intos}}</a><br>
	<input type="text" v-model:value="eerr" style="width: 100%;margin-top: 30px">
	<input type="text" v-model="intos" style="width: 100%;margin-top: 30px">
</div>
<script type="text/javascript" src="vue.js"></script>
<script>
Vue.config.productionTip=false
Vue.config.devtools=false
const vapp = new Vue({
	el: "#doubt",
	data:{
		intos:"去JokemeBlog",
		eerr: "一刀999,是兄弟就来砍我",
		urls:"https://jokeme.top",
		span_title:"JOkemeBlog官网"
	}
})
</script>
```

### 使用mount挂载

其实咱可以不用上来就指定好`el`的值,咱可以已**mount**的形式来挂在上.

```html
<div id="niubi">
	{{welcome}}
</div>
```

```js
const vapp = new Vue({
	data:{
		welcome:"欢迎学习Vue 2.0!"
	}
})
vapp.$mount("#niubi")
```



说完了`el`咱再来说 `data`

### data函数式

其实这里的data还可以写为函数式的. json/对象式 & 函数式都可以正常使用,以后使用组件的时候就必须要用函数式

```js
const vapp = new Vue({
	data(){
		return{
			welcome:"欢迎学习Vue 2.0!"
		}
	}
})
```

### defineProperty

Vue的代理模式,其中先大概了解一下defineProperty的用法:**defineProperty(obj,properties,options/functions)**

代码我也懒得整,就截了两张图片,学过高级语言的 应该一眼就看明白了.代理也就是通过`set()/get()`操作的

![image-20211229012235756](https://pics.jokeme.top/blogimas/image-20211229012235756.png)



![image-20211229015619753](https://pics.jokeme.top/blogimas/image-20211229015619753.png)

### v-click

就是监听点击事件的,然后执行一个函数,可以加括号,不加括号就不传参

```html
	<div id="niubi">
		<button @click="callbaby('ss',$event)">点我!!!!</button>
		<!-- 传参的时候,这个$event就相当于关键字了,加上$才有事件,不加就是变量 -->
	</div>>
```

```js
const vapp = new Vue({
	methods:{
		callbaby(a,b){
			console.log(a,b)
			alert("Hello啊!同学!")
		}
	}
})
vapp.$mount("#niubi")
```

但是! 但是! 现在Vue应该是改了,不传$event 也可以直接输出event了,如下

```js
"callbaby('ss')"
console.log(a,event)
```

> **Tips: **methods里面的方法也可以丢data里面哦,但是data会多一个代理,浪费电脑性能!又学到了一个离职埋坑小技巧哦!

click的事件修饰符

![image-20211229033005645](https://pics.jokeme.top/blogimas/image-20211229033005645.png)

反正就这几个常用的,而且还是前三个常用.

eg:

```js
<button class="qq" @click.once="callbaby(12)">点我!!!!</button><br>
```

下面的这个就是这个**click**只在第一次操作触发,第二次及以后都不在响应事件了

详细解说见 [哔哩哔哩-尚硅谷-事件修饰符](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=15)

### 键盘监听

@keyup

键盘回弹触发事件

@keydown

键盘按下触发事件

下面的小代码就可以让你理解了,其中`.enter`是遇到回车键才执行

>为了方便起见,只贴出关键代码,其余部分都没有怎么变得就省略了,上面也有.

```html
<input type="text" placeholder="随便写点啥吧!" @keydown.enter=whichOneUInput>
```

```js
whichOneUInput(e){
	console.log(e.target.value)
}
```

像这样的操作,Vue为我们准备了一下几个

|            按键             |    别名    |
| :-------------------------: | :--------: |
|            回车             |   enter    |
| 删除(捕获『删除』&『退回』) |   delete   |
|            退出             |    esc     |
|            空格             |   space    |
|            换行             |    tab     |
|            上下             |  up/down   |
|            左右             | left/right |

`@keydown.ctrl.y`就可以让ctrl + y触发

更多按键见:[哔哩哔哩-尚硅谷-键盘事件](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=16)

### 计算属性

`computed`类似data,el,methods它也是Vue带来的全新属性,可以直接从data里面获取数据进行操作/计算

```js
data(){
	return{
		welcome:"欢迎学习Vue 2.0!",
		dabo:"Jack"
	}
},
computed:{
		fullname:{
			get(){
				return this.welcome + '-' + this.dabo
			}
		}
	}
```

```html
<p>{{fullname}}</p>
```

计算完成以后就可以直接调用了,有点像Linux里的 `alias`,给一些列操作定义一个名字,我调用这个名字就执行这个操作

### 监视属性

`watch`是一个用于监听数据变化的属性,他有一个方法`handler(new,old)`可以在监视的数据发生变化时做出相应的处理.其中new是改变后的数据,old是改变前的数据.

`immediate:true`可以让数据在初始化的时候就开始监听,就是从无到有的过程也执行一次**handler()**

还有一点需要注意的是,被监视的数据只能是 `data`和`computed`里面的.

![image-20211230170345170](https://pics.jokeme.top/blogimas/image-20211230170345170.png)

deep监视不能监视多层数据里面改变前的数据,只能拿到改变后的数据.

```html
<button @click="dbqs.tom++">加一</button>
```

```js
watch:{
	temperature:{
		immediate:true,
		handler(a,b){
			console.log(a+"``"+b)
		}
	}
},
```

除此之外**watch**还有一种**api**调用方法

```js
shit.$watch("temperature",{
	immediate:true,
	handler(a,b){
		console.log(a+"``"+b)
	}
})
```

deep的用法

```js
dbqs:{
	deep:true,
	handler(a,b,c){
		console.log(a.tom+"----"+b.tom)
	}
}
```

此外当你在监视的时候,用不到set,你可以用简写

```js
temperature(a,b){
	console.log(a+"----"+b)
},
```

直接就是你需要监视的数据变成函数名就可以了,handler有啥参数,这个简写就有啥.

### 绑定Class样式

多说无益,先上代码

```css
.basic{
	width: 400px;
	height: 200px;
	border: 2px tomato solid;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	margin-top: 30px;
	text-align: center;
}
.day {
	background-color: rgb(255, 255, 255);
	color: rgb(26, 26, 26);
}
.night{
	background-color: rgb(49, 49, 49);
	color: rgb(226, 226, 226);
}
```

```html
<div id="bobp" class="basic" :class="color" >
    <P>今天是个好日子啊!</P>
	<p>老Tom今天在干嘛啊</p>
	<hr style="width: 80%;margin-left: auto;margin-right: auto;margin-top: 3px;margin-bottom: 3px;">
	<button @click="change">改变</button>
</div>
```

```js
data() {
    return {
		color:"day",
},
methods: {
	change(){
		this.color == "day" ?  this.color = "night" : this.color = "day"
	}
},

```

**原理:**`:class`绑定一个data里面的变量**color**,当你点击按钮的时候,就会做出判断,给原来的样式`basic` 后面再加上`day`/`night`样式

![image-20211230195124370](https://pics.jokeme.top/blogimas/image-20211230195124370.png)

下面的两种会用就可以,根据实际情况来,数组和对象一般用的不是很多



## 简单案例

### 姓名案例

```html
<div id="niubi">
	{{welcome}}<br>
	<input type="text" placeholder="随便写点啥吧!" v-model=welcome>
	<input type="text" placeholder="随便写点啥吧!" v-model=dabo>
	<button @click=fullname>dianwo</button>
</div>

```

```js
<script>
const vapp = new Vue({
	data(){
		return{
			welcome:"欢迎学习Vue 2.0!",
			dabo:"Jack"
		}
	},
	methods:{
		fullname(){
			console.log(this.welcome + "-" + this.dabo)
		}
	}
})
vapp.$mount("#niubi")
</script>
```

### 天气案例

点击按钮切换今天的天气

```html
<div id="bobp">
    <P>今天是个好日子啊!天气{{weatherQ}}</P>
    <button @click="turnWeather()">点我</button>
</div>
```

```js
const shit = new Vue({
    data() {
        return {
            temperature:true
        }
    },
    methods: {
        turnWeather(){
            this.temperature == true ? this.temperature = false :this.temperature = true
        }
    },
    computed: {
    weatherQ:{
        get(){
            return this.temperature ? "很热" : "凉爽"
        	}
    	}
	}
})
shit.$mount("#bobp")
```

通过计算属性拿到`temperature`以后在计算返回文字`weatherQ`,这更加人性化

