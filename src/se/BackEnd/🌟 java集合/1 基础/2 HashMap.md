# HashMap



## 高频面试题

### 1⃣️ 底层数据结构？

1.7 数组 + 链表

1.8 数组 + 链表 ｜ 红黑树 （根据数据量多少而转换）



### 2⃣️ 为什么红黑树？为什么一上来不树化，要转化？为什么阈值是8？什么时候树化，什么时候退化成链表？

![image-20230203153742311](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203153742311.png)

退化的判定：移除之前



链表太长影响查询性能



因为容量较小时，树化性能没有优势

红黑树底层是TreeNode，内存占用更多



#### 快速查找

计算哈希码 - 少量比较



#### 树化条件

1. 链表长度 > 8

   > 但是链表长度可能超过8，因为如果总容量不够64，就不会树化

   ![image-20230203134950662](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203134950662.png)

2. 树容量 > 64





### 3⃣️ 索引计算方法？有hashcode，为什么要提供hash()方法？数组容量为什么是2的n次幂？

容量 -1取模

![image-20230203154657869](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203154657869.png)



数组容量2的n次幂：虽然**计算效率**高，但是结果的分布性不好

> 如全是偶数的极端情况



数组容量选质数，哈希分布性更好

`int[] sizes = {23};`



### 4⃣️ put方法流程，1.7，1.8版本的差异？

![image-20230203160902816](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203160902816.png)



![image-20230203161137459](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203161137459.png)



### 5⃣️ 加载因子 / 扩容因子 为什么默认是0.75f？

factor

![image-20230203161430998](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203161430998.png)





### 6⃣️ 多线程可能出现的问题？



![image-20230203162157335](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203162157335.png)



没太懂。。





### 7⃣️ key可以null吗，key的对象有什么要求？

![image-20230203174642322](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203174642322.png)



### 8⃣️ String对象的hashCode()如何设计？为什么每次乘31？

![image-20230203174721597](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230203174721597.png)

并且31可以转化为移位加减法