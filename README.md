# Vue

[TOC]



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

