基础

Node.js 是 JavaScript 的服务器运行环境（runtime



功能

实现动态行为

* 在变量中储存有用的值
* 操作一段文本（字符串）
* 响应事件（点击）



浏览器api

* 创建、移除、修改html，如弹窗
* 地理位置
* 多媒体 播放音频、利用自己的摄像头录像



位置

将 <script> 放在HTML文件的底部附近



语法

声明变量 let var



关键字 `new` 跟着一个含参函数，告知浏览器创建一个对象

类似函数调用，并把结果保存到变量中。



##### 原则

各司其职

三元素职能分离

结构、表现、行为：三者分离



组件封装

好的ui组件具备正确性、拓展性、复用性





过程抽象

应用函数式编程思想







#### 各司其职

简单版本的夜间模式切换

直接操作body

![截屏2022-07-25 20.55.03](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-07-25%2020.55.03.png)



版本二

直接操作css

![image-20220725213227981](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220725213227981.png)

对应的css有改变

<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220725213334303.png" alt="image-20220725213334303" style="zoom:50%;" />



版本3

css改变 	`CheckBox`

![image-20220726105704659](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726105704659.png)

不需要一行js代码



![image-20220726110204249](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726110204249.png)



#### 组件封装

轮播图

无须列表结构

![image-20220726110357218](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726110357218.png)

![image-20220726110423281](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726110423281.png)

![image-20220726111522809](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726111522809.png)

![image-20220726111730869](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726111730869.png)



![image-20220726162824744](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220726162824744.png)





#### 过程抽象

快速幂，性能更好，时间复杂度是olog(n)

![image-20220725163709996](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220725163709996.png)



