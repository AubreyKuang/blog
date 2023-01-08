组合式组件：函数声明

响应式：转台变化后，不用手动修改dom



##### 原生js写UI的痛点

![截屏2022-08-04 20.11.45](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-04%2020.11.45.png)



![截屏2022-08-04 22.24.05](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-04%2022.24.05.png)

![image-20220804230410363](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220804230410363.png)



![image-20220804230604615](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220804230604615.png)



![image-20220804231705093](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220804231705093.png)

（代码梳理树）整个页面视为root

左边的不是dom树，不是js的变量

##### 当前价格只能属于root节点（因为只有父组件可以控制子组件）

为了解决状态上升问题，可以使用状态管理库

<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220804231833367.png" alt="image-20220804231833367" style="zoom:50%;" />

js的函数可以像变量一样传递



![image-20220805122406659](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805122406659.png)

Props 外部传入的

State 内部



#### hooks的写法

循环和嵌套结构中不能使用

![image-20220805133455428](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805133455428.png)

![image-20220805123334779](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805123334779.png)

实现状态更新



![image-20220805123445362](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805123445362.png)



![image-20220805133307769](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805133307769.png)



#### React的实现

![image-20220805134744325](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805134744325.png)



转译而不是编译

html本质上是树状结构

![image-20220805140108245](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805140108245.png)

![image-20220805140303624](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805140303624.png)

指令式编程：步骤详细说

声明式编程：指出事件

自己式编程：自己响应自己



Diff

![image-20220805144527486](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805144527486.png)



父组件状态改变，子组件都得递归



#### React状态管理库

![image-20220805144956549](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805144956549.png)

组件依赖于外部的状态，降低组件的复用性

组件和外部的东西强耦合



（理解成大的状态集）

![image-20220805145323986](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805145323986.png)

![image-20220805150605240](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220805150605240.png)



modern.js reduck