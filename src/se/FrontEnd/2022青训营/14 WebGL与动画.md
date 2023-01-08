#### 概念

3d的标准

涉及硬件底层，所以比较复杂

![image-20220810110611606](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810110611606.png)

![image-20220810110653364](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810110653364.png)

![image-20220810110926370](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810110926370.png)



WebGL是OpenGL对应在web上子集



#### 流程

![image-20220810111019730](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111019730.png)

不是js语言，是一种webgl program



1.创建上下文

![image-20220810111116922](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111116922.png)

考虑浏览器版本兼容：

![image-20220810111140565](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111140565.png)



2.写折射器

其一：负责处理轮廓

![image-20220810111210627](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111210627.png)

其二：映射像素点，处理颜色

![image-20220810111238024](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111238024.png)



![image-20220810111303344](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111303344.png)

![image-20220810111453338](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810111453338.png)



分解成小图形，然后通过图形变换绘制

![image-20220810134619323](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220810134619323.png)