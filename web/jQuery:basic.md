# jQuery

---

# Note

## 1. window.load vs $(document).ready()

- 执行时机
	- window.load 必须等到网页中所有内容加载完毕(包括图片)才能执行
	- $(document).ready() 网页中所有 DOM 结构绘制完毕就执行，可能 DOM 元素关联的恭喜并没有加载完

- 编写个数
	- window.load 不能同时编写多个

	```
	window.load = function() { }
	window.load = function() { }
	// 后面的会覆盖前面的
	```

	- $(document).ready() 能同时编写多个，还可以简写

	```
	$(document).ready(function() {
		...
	});

	$(document).ready(function() {
		...
	});

	// 以上两个都会执行，并且存在以下简写方式：

	$(function() { ... });
	```

## 2. DOM对象 vs jQuery对象

- jquery 对象

```
let $cr = $('#cr');
```

- dom 对象

```
let cr = document.getElementById('id');
```

- jquery -> dom

```
let cr = $cr[0];
let cr = $cr.get(0)
```

- dom -> jquery

```
let $cr = $(cr)
---

```

---

# 各种选择器

## 1. css 选择器

 选择器			|	语法
:------------	| ---------
 元素选择器		| 	E { }
 ID选择器		| 	#ID { }
 类选择器		| 	[E].className { }
 群组选择器 	|  E1, E2, E3 { }
 后代选择器 	|  E F { }
 通配选择器		|  * { }
 伪类选择器 	|  E:PseudoElements { }
 子选择器 		|  E>F { }
 临近选择器 	|  E+F { }
 属性选择器		|  E[attr] { }

## 2. jQuery 选择器

- 基本选择器 | 层次选择器 |  表单选择器

- 过滤选择器

选择器			|	语法
:------------	|---------
:first 		|	$('div:first')
:last			|
:not(selector)|	$('input:not(.myclass)')
:even			|	索引从0开始
:odd			|	..
:eq(index)	|	..
:gt(index)	|	..
:lt(index)	| 	..
:header		|	选取所有标题元素 h1, h2...
:animated		| 	选取正在执行动画的所有元素
:focus			|	选取当前获取焦点的所有元素


- 内容过滤选择器

选择器				|	语法	|	返回
:---------------	|---------|-----------
:contains(text)	|$("div:contaions('文本')")	| 集合
:empty				|			| 选取不包含子元素 or 文本的空元素
:has(selector)	|			| 选取含有选择器匹配的元素的元素
:parent			|			| 选取含有子元素或者文本的元素

- 可见性过滤选择器

选择器				| 语法
:---------------	|------------
:hidden			| 所有不可见元素
:visible			|

- 属性过滤选择器

选择器				| 语法
:---------------	|-------------
[attribute]		| $('div[id]')	选取所有拥有 ID 的元素
[attribute=value]| $('div[title=test]')	选取title为test的div元素
[attribute!=val]	|
[attribute^=val]	|
[attribute$=val]	|
[attribute*=val]	| 选取属性的值含有value的
[attribute|=val]	| 选取属性值等于val的 or 以该字符串为前缀的(该字符串后跟一个连字符'-')的元素
[attribute~=val]	| 选取属性用空格分隔的之中包含一个给定值的元素
[attribute1][attribute2][attributeN]	| 从左到右依次过滤，每选一次，缩小一次范围

- 子元素过滤选择器

选择器				| 语法
:---------------	|---------------
:nth-child(index/even/odd/equation)	| `index从 1 算起`
:first-child		|
:last_child		|
:only_child		| 父元素只有1个子元素，该父元素会被匹配

- 表单对象属性过滤器

选择器				| 语法
:---------------	|-------------------
:enabled			| 选取所有可用的元素
:disabled			| $('#form input:disabled')
:checked			|
:selected			|

- 表单选择器: 看语法于上个有啥不同⚠️

选择器				| 语法
:---------------	|-----------------
:input				| $('#form :input')
:text				| $('#form :text')
:password			|
:radio				|
:checkbox			|
:submit			|
:image				|
:reset				|
:button			|
:file				|
:hidden			|

# jQuery DOM操作

- 插入节点

方法				| 描述
:---------------	|---------------
append()			| a.append(b)
appendTo()		| b.appendTo(a)，可以用来移动元素 $('ul li:eq(0)').appendTo('ul')
prepend()			|
prependTo()		|
after()			|
insertAfter()		|
before()			|
insertBefore()	|

- 删除节点

方法				| 描述
:---------------	|--------------
remove()			| 某个节点被remove()后，其包含的所有后代节点也被删除(包括绑定的事件、附加数据等)；返回指向删除节点的引用
detach()			| 该方法`不会将元素从jQuery对象中移除`，因此将来还可以用；与remove不同，该方法保留绑定的事件、附加的数据等
empty()			| 该方法不删除节点，而是清空节点(清空元素中所有的后代节点)

- 复制节点

```
$('ul li').click(function() {
	$(this).clone().appendTo('ul')	// 复制当前点击节点，并追加到<ul>元素中
})
---

// clone(true)方法的参数：true，表示复制元素的同时复制元素所绑定的事件。(所以复制后的新元素也有复制功能)
$(this).clone(true).appendTo('body')
```

- 其他方法

方法				| 描述
:---------------	|--------------
replaceWith()		| 替换节点
replaceAll()		|
wrap()				| 包裹节点
wrapAll()			|
wrapInner()		|
attr()				| 获取/设置属性
removeAttr()		|
addClass()		|
removeClass()		|
toggle()			| 可以用来切换样式
toggleClass()		| $('p').toggleClass('classname')
hasClass()		|
html()				|
text()				|
val()				|
children()		| 获取匹配子元素(直接子元素)的集合
next()				|
prev()				|
siblings()		|
closest()			| 获取最近的匹配元素，从当前元素开始，返回一个元素
parent()			| 获取集合中每个匹配元素的父级元素(一个元素)
parents()			| 获取所有祖先元素，元素集合

- css-dom

方法				| 描述
:---------------	|----------------
css('', '')		| $('p').css('opacity') || $('p').css('opacity', 0.5)
height()			|
weight()			|
offset()			| offset = $('p').offset()  offset.left  offset.top
position()		| position = $('p').position() position.left position.top
scrollTop()		|
scrollLeft()		|

# jQuery中的事件

方法				| 描述
:---------------	|-----------------
bind(type[, data], fn)	| 为元素绑定事件
hover(enter, leave)		| 等价于 bind('mouseenter') & bind('mouseleave')
toggle()					|
toggleClass()				|
unbind([type], [data])	| 移除事件, type: 事件类型，data: 事件处理函数
trigger(type, [data])	| 触发事件

## 1. 事件冒泡

事件由内向外触发，虽然只点击了子元素，其父元素也会触发相应事件。

方法						| 描述
:----------------------	|--------------------
event.stopPropagation()	| 停止事件冒泡 ps: 也可以使用 `return false`发到同样的效果
event.preventDefault()	| 阻止默认行为
event.type				| 获取事件类型
event.target				| 获取触发事件的元素
event.relatedTarget		|
event.pageX & event.pageY	| 获取光标相对于页面的 x, y 坐标
event.which				| 在鼠标的单击事件中获取鼠标的左，中，右键；在键盘事件中获取键盘的按键
event.metaKey				| ctrl键

## 2. 事件捕获需要用原生js来实现

事件捕获 与 事件冒泡正好相反，事件捕获由外到内。

## 3. 添加事件的命名空间，便于管理

```
$(function() {
	$('div').bind('click.plugin', function() {
		$('body').append('<p>click event</p>')
	})

	$('div').bind('mouseover.plugin', function() {
		$('body').append('<p>mouseover event</p>')
	})

	$('div').bind('dbclick', function() {
		$('body').append('<p> dbclick event</p>')
	})

	$('button').click(function() {
		$('div').unbind('.plugin')		// 删除该命名空间下的事件
	})
})
```

## 4. 相同事件名称，不同命名空间执行方法

- `!` 的作用是：匹配所有不包含在命名空间中的 click 方法
- 如果还需要命名空间下的方法，不加 `!` 即可

```
$(function() {
	$('div').bind('click', function() {
		$('body').append('<p>click event</p>')
	})

	$('div').bind('click.plugin', function() {
		$('body').append('<p>click.plugin event</p>')
	})

	$('button').click(function() {
		$('div').trigger('click!')		// 感叹号❗️
		// $('div').trigger('click')		// 触发两个 click 事件
	})

})
```

# 动画

方法			| 描述
:------------	|--------------
show()			| 改变 宽、高、透明度
hide()			| ..
fadeIn()		| 改变透明度
fadeOut()		| ..
slideUp()		| 改变高度
slideDown()	|
animate(params, [speed], [callback])	| params: { property1: value1, property2: value2 }
stop([clearQueue], [togoEnd])	| 停止动画
is(':animated')	| 判断元素是否处于动画状态
delay()			| 延迟动画
toggle(speed, [callback])	| 切换元素的可见状态 (hide | show)
slideToggle(speed, [easing], [callback])	| 通过`高度`变化改变元素的可见状态
fadeTo(speed, opacity, [callback])	| 把元素的`不透明度`以渐进的方式调整到指定值
fadeToggle(speed, [easing], [callback])	| 通过`不透明度`变化来切换元素的可见性

> 非动画方法，如`.css()`不会加入动画队列中，会立即执行；如果希望非动画方法实现排队，要将其放在动画的回调函数中

## Ajax

- ajax
	- $.load()
	- $.get()
	- $.post()
	- $.getScript()
	- $.getJson()
	- $.ajax()

- 序列化元素
	- serialize()			// 返回字符串
	- serializeArray()	// 返回 json 格式的数据
	- $.param({a: 1, b: 2, c: 3})

- Ajax 全局事件

方法名称				| 描述
:------------------	|--------------------
ajaxStart(callback)		| ajax 请求开始时，触发该回调
ajaxStop(callback)		| ajax 请求结束时，触发该回调
ajaxComplete(callback)	| ajax 请求完成时执行的函数
ajaxError(callback)		| ajax 请求发生错误时执行的函数，捕捉的错误可以作为最后一个参数传递
ajaxSend(callback)		| ajax 请求发送前执行
ajaxSuccess(callback)	| ajax 请求成功时执行

> 若想某个 ajax 请求不受全局方法影响，可将 global 设置为 false

>	```
>	$.ajax({
>		url: 'test.html',
>		global: false
>	})
>	```

> jQuery 1.5版本之后，若 ajax 请求不触发全局方法，则：
> ```
> $.ajaxPrefilter(function(options) {
> 	options.global = true
> })
> ```

# jQuery 插件

- 表单验证 Validation
	-  国际化 jquery.validate.messages_cn.js ==

- 表单插件	Form
- 模态窗口 	SimpleModal
- 管理Cookie	Cookie

## 编写jQuery插件

- jQuery 插件主要分3中类型
	- 封装对象方法的插件	`jQuery.fn.extend()`
	- 封装全局函数的插件	`jQuery.extend()`
	- 选择器插件 			`jQuery.extend()`
