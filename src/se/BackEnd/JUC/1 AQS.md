#  AbstractQueuedSynchronizer 

本类提供了一个用于实现阻塞锁和同步器（信号量、事件等）的框架，依 [1 AQS.md](1 AQS.md) 赖先进先出 (FIFO) 的等待队列来实现。

它为大多数通过单个 int 类型的原子值来表示状态的同步器提供了实现基础。子类必须重写更改同步器状态的 protected 方法，并定义该状态在获取或释放子类对象方面的具体含义。

此类中的其他方法实现所有排队和阻塞机制。子类可以维护其他状态字段，但就同步而言，只有使用了方法 getState、 setState 和 compareAndSetState 操作以原子方式更新的 int 值才能够被跟踪。



## 设计

AQS 本质上是一个 FIFO 的双向队列，线程被包装成结点的形式，基于自旋机制在队列中等待获取资源（这里的资源可以简单理解为对象锁）

![image-20230425122431216](https://cdn.jsdelivr.net/gh/KoryKL/pictures@main/blog/image-20230425122431216.png)

使用一个 volatile 修饰的 int 类型的 state 表示同步状态,通过内置的 FIFO 队列 CLH 完成资源获取的排队工作, 将资源封装为 Node ,通过 cas 改变 state 值

AQS同时提供了互斥模式（exclusive）和共享模式（shared）两种不同的同步逻辑。一般情况下，子类只需要根据需求实现其中一种模式，当然也有同时实现两种模式的同步类，如ReadWriteLock。



### 同步队列｜CLH

基于链表实现的双向队列，也是 CLH 锁的变种。CLH 锁是 AQS 队列同步器实现的基础。

- CLH 锁是一个自旋锁。能确保无饥饿性。提供先来先服务的公平性。
- CLH 队列锁也是一种基于链表的可扩展、高性能、公平的自旋锁，申请线程仅仅在本地变量上自旋，它不断轮询前驱的状态，假设发现前驱释放了锁就结束自旋。



### Node

以内部类 `Node` 的形式定义了同步队列结点

```java
static final class Node {

    /** 模式定义 */

    static final Node SHARED = new Node();
    static final Node EXCLUSIVE = null;

    /** 线程状态 */

    static final int CANCELLED = 1;
    static final int SIGNAL = -1;
    static final int CONDITION = -2;
    static final int PROPAGATE = -3;

    /** 线程等待状态 */
    volatile int waitStatus;

    /** 前驱结点 */
    volatile Node prev;
    /** 后置结点 */
    volatile Node next;

    /** 持有的线程对象 */
    volatile Thread thread;

    /** 对于独占模式而言，指向下一个处于 CONDITION 等待状态的结点；对于共享模式而言，则为 SHARED 结点 */
    Node nextWaiter;

    // ... 省略方法定义
}
```





## 使用

用作同步器的基础，使用 getState()/setState()/cas 这些用于检查或修改同步状态的方法对下面的方法进行重新定义：

- tryAcquire
- tryRelease
- tryAcquireShared
- tryReleaseShared
- isHeldExclusively

这些方法默认抛出 UnsupportedOperationException, 这些方法内部必须保证线程安全，并且通常应该是简短且无锁的。 其他方法因为不能独立的变化，所以声明为 final。