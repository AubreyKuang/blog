

### 排版标签

### 相对路径

选择不同目录下的文件

### 媒体标签

网页中显示图片、播放音频、视频

### 链接标签

页面跳转





结构-HTML-页面元素、内容

表现-CSS-网页元素的外观和位置等页面样式

行为-JS-网页模型的定义与页面交互

web标准要求三层分离



### HTML 超文本标记语言

基本骨架

```html
<html>
	<head>
    <title>网页的标题</title>
  </head>
	<body>
 					 网页的主体内容
  </body>
</html>
```

拖拽文件夹

创建新文件的时候 要带.html



### VS code快捷键

1⃣️英文+tab：快速生成标签（带前后）

2⃣️ctrl+S 保存文件

​	写完后一定要保存，否则页面无变化，设置自动保存

3⃣️alt+b：快速查看网页效果

## 4⃣️ !+tab：快速生成结构标签

#### 5⃣️ ctrl+/ ： 注释

6⃣️光标点到某行+快捷键=直接对行处理

7⃣️ control+d 选择下一字符



### 标题标签

h系列 1-6级标题

```html
<h1></h1>
```

### 段落标签

``` html
<p></p>
```

### 换行标签

````html
<br></br>
````

单标签，换行处

### 水平线标签

```html
<hr></hr>
```

分割不同内容的水平线

单标签，划线处

###文本格式化标签

加粗：b，strong

下划线：u，ins

倾斜：i，em

删除线、划掉线：s，del





## 图片标签 img

```html
<img src="" alt="" title="" width=“”>
```

单标签

需要借助标签的属性

#### 1⃣️src：目标图片的路径

同一个文件夹，则直接写文件名+后缀

#### 2⃣️alt：替换文本

当前图片加载失败时才显示文本，成功则不会。

#### 3⃣️title：提示文本

悬停在上面才会有

 不仅可以用于图片标签

####4⃣️：width和height

如果只设置一个，另一个会等比缩放

如果设置两个，可能变形



#### 绝对路径：

1.目录下的绝对位置，从盘符开始

2.完整网络地址，粘贴图片地址

#### 相对路径：（**更常用**）

从当前文件【当前的html网页】出发找目标文件【要找到的图片】

分类：

- 同级：在同一目录——直接写目标文件的名字即可

  快捷操作：敲 ./ 自动提示同级目录下还有什么

- 下级：目标在下级目录（大厅与卧室）

  敲文件夹名字，进入文件夹，写目标文件名字（images/1.gif）

  快捷操作： ./逐层选择

- 上级

  ​	找上级目录

  快捷操作： ../





## 音频标签audio

src 路径

####controls 显示播放的控件

autoplay 自动播放（ 部分浏览器不支持）

loop 循环播放



## 视频标签 video

同上

但是该标签只支持mp4，webm，ogg三种格式



## 链接标签

- 超链接，a标签，猫链接

```html
<a href='./目标网页.html' target="_blank"> 点击之后前往... </a>
```

- target属性

  新标签的打开形式 _self 原窗口 _blank新窗口





## 列表

无序 

#### ul：无序列表的整体，用于包含li

####  li：无序列表的每一项，用于包含每一行的内容



有序 ：默认显示序号

#### ol：无序列表的整体，用于包含li

####  li：无序列表的每一项，用于包含每一行的内容



自定义列表 ：默认显示序号

#### dl：列表的整体，用于包含dt/dd

#### dt: 自定义列表的主题

#### dd：每一项内容（前默认显示缩进效果）



## 表格table

Table>caption 

Tr > th



#### table 表格整体，可包裹多个tr，要写在table标签内部

#### tr 表格每行，可包裹td

#### td 单元格，可包裹每行内容



#### caption 大标题

#### th 一行小标题

#### 	  写在tr内部，替换td



结构标签：包裹tr，可以省略

#### thead 表格头部

#### tbody 

#### tfoot



左上原则 往下延伸

#### 垂直合并 跨行 rowspan +合并单元格个数

```html
<td rowspan = "2">100</td>
```



#### 水平合并 跨列 colspan +合并单元格个数

只有同一个结构标签中的单元格才能合并

#### 





## 表单标签



```html
<input type = "text" placeholder=“请输入名称”>
```

昵称：\<input type = " text"\>



### input

#### 单选框type=  radio

性别：<input type = "radio" name="sex” checked>男

name属性分组

checked 默认选中



#### 多选框 checkbox

#### 文件选择 file

multiple 多文件选择



#### 按钮

type = submit

#### form标签 + submit reset button

放在body下，包裹全部



自定义：名为xx的按钮

\<input type="button" value="xx"\>



#### 属性

placeholder

“”中间不能多打空格







### button按钮标签

提交：<button type= "submit”>提交\</button\>



### select下拉标签

select，option

```html
<select>
  <option></option>
</select>
```



属性：selected 默认选中



## 表单

### textarea文本域标签

适用于：个人介绍等自己补充的文本框



cols 文本域内可见宽度

rows 可见行数



### label标签

#### 绑定内容与表单标签的关系

两种使用方法：

1. 用label把内容包起来，在标签上添加id属性，在label标签的for属性中设置对应的id属性

```html
<input type="checkbox" id="one"><label for="one">选项</label>
```



2. 用label把内容和表单标签一起包裹起来，把label标签的for属性删除

   ```html
   <label> 
     <input type=""checkbox>选项</label>
   ```

   

用处：框选区域变大，点文字也行



### 语义化标签

- HTML中的元素、属性及属性值都拥有某些含义
- 开发者应遵循语义来编写HTML

##### 常用无语义的布局标签

#####  div：独占一行 \<div>\</div>

##### span：一行显示多个



##### 好处：

- 提升代码可读性
- 提升可维护性
- 搜索引擎优化
- 提升无障碍性



### 字符

并列出现多个空格、换行、缩进，最终只会解析出一个空格



#### 字符实体

结构： &英文;

![截屏2021-08-13 下午3.49.19](/Users/apple/Library/Application Support/typora-user-images/截屏2021-08-13 下午3.49.19.png)

