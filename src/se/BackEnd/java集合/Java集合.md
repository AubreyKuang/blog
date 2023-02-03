# ArrayList

无参构造，长度为0的数组

加了数字，使用制定容量的

如果传入集合，长度为集合大小



## 扩容

### Add自动扩容

\>\> 1找到一半 + 原来的长度



### addAll方法

在自动扩容、增加的长度之间选择较大值



## 迭代器

### failfast｜failsafe

fail-fast：一旦发现遍历同时其他修改，抛出异常

> ArrayList的模式⬆️

源码：记录了循环前后集合的**修改次数**，比较是否一致



fail-safe：发现时应对，为了完成遍历，例如牺牲一致性（遍历读取的数据不是最新）

源码：add方法复制原来的数组，长度+1，最新元素加到后面；读写分离



## 和LinkedList比较



![image-20230202183605834](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230202183605834.png)



### Arraylist

继承 RandomAccess 随机访问

随机访问快







