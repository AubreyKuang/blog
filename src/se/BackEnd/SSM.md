#### SSM: Spring + Spring MVC + MyBatis



表现层 springmvc

⬇️

业务层 service接口

⬇️

持久层 mybatis

⬇️

mysql

![image-20230110122809137](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110122809137.png)

![截屏2022-08-20 14.47.23](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2022-08-20%2014.47.23.png)



### （1） controller

控制层

相当于MVC的C层，controller通过service的接口来**控制业务流程**，也可通过接收前端传过来的参数进行业务操作。

### （2） model 

数据模型层

相当于MVC的M层，**存放实体类**，与数据库中的属性值基本保持一致。

### （3） service

业务逻辑层

主要是针对具体的问题的操作，把一些数据层的操作进行组合，间接与数据库打交道（**提供操作数据库的方法**）。

要做这一层的话，要先设计接口，在实现类。

### （4） mapper

**数据存储对象**

相当于DAO层，mapper层直接与数据库打交道（执行SQL语句），接口提供给service层。









#### 联系：

spring在刚开始的时候使用工厂模式（DI）和代理模式（AOP）解耦应用组件进而开发出适用于Web开发的SpringMVC

在实际开发过程当中会使用到很多样板代码，就开发出了懒人版的SpringBoot

#### 区别：

1、springMVC是Spring的一个模式，是一个Web框架，提供了一个轻度耦合的方式来开发Web应用；

2、SpringBoot是习惯优于配置，降低了项目搭建的难度；

3、springMVC需要使用到TomCat服务器，SpringBoot内嵌了Tomcat服务器

#### Spring

分层的java SE/EE应用full-stack轻量级框架，以反转控制loc、面向切面编程aop为内核

展现了众多企业级应用技术：展现层、持久层、业务层事务管理

为开发Java应用程序提供了全面的基础架构支持。它包含一些很好的功能，如依赖注入和开箱即用的模块，如： Spring JDBC 、Spring MVC 、Spring Security、 Spring AOP 、Spring ORM
、Spring Test

> 在Java Web开发的早期阶段，我们需要编写大量的代码来将记录插入到数据源中
>
> 但是通过使用Spring JDBC模块的JDBCTemplate，我们可以将这操作简化为只需配置几行代码。

##### 开发步骤：

1. 导入spring开发的基本包坐标

   ![image-20220215112411676](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215112411676.png)

2. 编写Dao借口和实现类（Bean）

   > 实现习惯放在一个包（Impl）下面

3. 创建spring核心配置文件

   ![image-20230110122856473](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110122856473.png)

   

   在⬆️中配置UserDaolmpl

   ![image-20220215162023770](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215162023770.png)

5.
使用spring的API获得bean实例

![image-20220215163226946](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220215163226946.png)

#### Spring Bean

被实例的，组装的及被Spring 容器管理的Java对象。

Spring 容器会自动完成@bean对象的实例化。

创建应用对象之间的协作关系的行为称为：**装配(wiring)**，这就是依赖注入的本质。

#### 注解开发

可以简化配置，提高开发效率

Spring原始注解：取代\<Bean\>的配置

讲解：先xml配置，再注解配置

text/java

1. 在要创建spring的对象中注入

2. 在配置文件中加入组件扫描

   > ````java
   > <context: component-scan base-package=""/>
   > ````

![image-20220221142033663](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20220221142033663.png)

除了最后两个，都是重点

1. 按照**数据类型**从spring容器中匹配：@Autowired

2. 按照**id值（名称）**从spring容器中匹配：@Autowired @Qualifier (结合auto一起使用)
3. 前四个是一组的
4. @Resource 相当于@Auto+@Quali
5. 在spring容器中寻找对应的key，赋值给下面的字符串

