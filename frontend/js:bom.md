# BOM

- js 中所有在全局作用于声明的 变量、函数 都会自动成为 `window` 对象的属性和方法

- 包括 DOM 中的 document

```
window.document.getElementById('id')
```

- ⚠️ 定义全局变量 和在 window 对象上直接定义属性 有差别：全局变量不能通过 delete 操作符删除，直接定义在 window 对象上的属性可以

```
var age = 12;
delete window.age;		# IE < 9 错误，其他返回 false

🐷 通过 var 语句添加的 window 属性
Object.getOwnPropertyDescriptor(window, 'age')
# {value: 12, writable: true, enumerable: true, configurable: false}

---

window.color = 'red';
delete window.color;	# IE < 9 错误，其他返回 true

🐷 直接定义在 window 上的属性
Object.getOwnPropertyDescriptor(window, 'color')
# {value: "red", writable: true, enumerable: true, configurable: true}

---

name = 'sally';
delete window.name; # 这样的可以删除，为啥 ❓❓❓

🐷
Object.getOwnPropertyDescriptor(window, 'name')
# {value: "sally", writable: true, enumerable: true, configurable: true}
```

## 1. window

表示浏览器的一个实例，可以获取浏览器窗口信息

### 1.1 窗口的大小

浏览器窗口/页面视图容器/容器中页面视图大小: IE, Chrome, Firefox, Opera, Safari

```
window.innerHeight		# 浏览器窗口的内部高度(包括滚动条)
window.innerWidth		# 浏览器窗口的内部宽度(包括滚动条)
---
window.outerHeight
window.outerWidth
```

页面视口的大小: IE, Chrome, Firefox, Opera, Safari

- 标准模式

```
document.documentElement.clientHeight
document.documentElement.clientWidth
```

- 混杂模式

```
document.body.clientHeight
document.body.clientWigth
```

> ⚠️ document.compatMode 价差页面是否处于标准模式

- `window.resizeTo(x, y)`
- `window.resizeBy(offsetX, offsetY)`

### 1.2 窗口的位置

- IE, Safari, Opera, Chrome: `screenLeft` & `screenTop`

- Firefox, Safari, Chrome: `screenX` & `screenY`

eg:
```
var leftPos = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;

var topPos = (typeof window.screenTop == 'number') ? window.screenTop : window.screenY;
```

- `window.moveTo(x, y)`
- `window.moveBy(offsetX, offsetY)`

### 1.3 方法s

- window.open()
- window.close()
- window.moveTo()
- window.moveBy()
- window.resizeTo()
- window.resizeBy()

## 2. 间歇调用 & 超时调用

 js 是`单线程`的解释器，`一定时间内只能执行一段代码`。为了控制代码的执行，就有一个 js 的任务队列。这些任务队列会按照它们添加到队列的顺序执行。 setTimeout() 的第二个参数就是告诉 js 再过多长时间把当前任务添加到队列中。如果队列是空的，那么添加的代码会立即执行；如果队列不为空，那么它要等到前面的代码执行完成之后再执行。

- setTimeout(func, time)
- clearTimeout(timeoutId)

- setInterval(func, time)
- clearInterval(intervalId)

## 3. 系统对话框

- alert()
- confirm()
- propt()

## 4. Window Location 对象

- 当前页面的地址(URL)
- 既是 window 对象的属性，也是 document 对象的属性，window.location 和 document.location 引用的是同一个对象

属性名		| 例子				| 说明
:--------	| --------------	| ------------
hash		| "#contents"		| #号后面跟 0 或 多个字符
host		| "www.xxx.com:80"
hostname	| "www.xxx.com"
href		| "http://www.xxx.com"
pathname	| "/resource/"
port		| "8080"
protocol	| 'http:'
search		| '?q=js'

### 4.1 location 操作

```
location.assign('https://www.google.com')	# 直接打开页面

# 下面两个方法默认调用 assign, 与 assign 方法想过相同
window.location = 'https://www.google.com'
location.href = 'https://www.google.com'
```

- `assign()`, `window.location`, `location.href` 修改 url 之后，浏览器历史记录中会生成一条新纪录，用户可以通过 后退 按钮操作

- `location.replace(url)` 不会有历史记录

- `location.reload(boolean)`

```
location.reload(false)	# 重新加载(可能从缓存中加载，如果没有改动的话)
location.reload(true)	# 重新加载(从服务器重新加载)
```

## 5. Navigator 对象

有关访问者浏览器的信息

属性/方法		| 说明
:------------	| --------------
userAgent		| ...
plugins		| ...
registerContentHandler() | 针对特定的 MIMYE 类型将一个站点注册为处理程序
registerProtocolHandler() | 针对特定的协议将一个站点注册为处理程序


## 6. Window Screen

用户屏幕信息

- screen.availHeight
- screen.availWidth
- screen.availLeft
- screen.availTop

## 7. Window History

保存用户上网的历史记录，从窗口被打开的那一刻算起

- history.go(-1)	  	// 后退
- history.go(1)		// 前进
- history.back()
- history.forward()
- history.length == 0	// 这应该是用户打开窗口的第一个页面

## Cookie

存储 web 页面的用户信息

- document.cookie

---

# sessionStorage

- window.sessionStorage

