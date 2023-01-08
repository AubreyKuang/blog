隶属于spring mvc

representational state transfer 表现形式状态转换

**优点**：隐藏资源的访问行为，无法通过地址得知对资源的操作；书写简化

![image-20220227132918058](/Users/apple/Library/Application Support/typora-user-images/image-20220227132918058.png)

postman还有很多种请求

描述模块名称通常使用复数，表示此类资源

根据rest风格访问资源是restful

#### 一般操作

* 改请求方法（动词）、路径

![image-20220227140052868](/Users/apple/Library/Application Support/typora-user-images/image-20220227140052868.png)

* 形参上要对应上（两个id）

![image-20220227140126814](/Users/apple/Library/Application Support/typora-user-images/image-20220227140126814.png)

#### 简化

把value提出来（不含{}）

![image-20220227161643703](/Users/apple/Library/Application Support/typora-user-images/image-20220227161643703.png)

（@ResponseBody也要提出来,还能替换成restcontroller）

![image-20220227162923608](/Users/apple/Library/Application Support/typora-user-images/image-20220227162923608.png)

![image-20220227163016797](/Users/apple/Library/Application Support/typora-user-images/image-20220227163016797.png)

进一步简化↑