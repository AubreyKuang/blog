import{_ as n,V as s,W as a,a1 as p}from"./framework-a2b1dd72.js";const e={},t=p(`<h1 id="链表与双指针" tabindex="-1"><a class="header-anchor" href="#链表与双指针" aria-hidden="true">#</a> 链表与双指针</h1><h4 id="有序合并" tabindex="-1"><a class="header-anchor" href="#有序合并" aria-hidden="true">#</a> 有序合并</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> l1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> l2<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span><span class="token punctuation">(</span>p1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> p2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">if</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> p2<span class="token punctuation">.</span>val<span class="token punctuation">)</span>  
    	p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1<span class="token punctuation">;</span>
    	p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        
  	<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    	p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">;</span>
    	p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

	<span class="token comment">//最后都弄完了，还有个链有剩余</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> p1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> p2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

	<span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分割链表" tabindex="-1"><a class="header-anchor" href="#分割链表" aria-hidden="true">#</a> 分割链表</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//存放小于的</span>
  <span class="token class-name">ListNode</span> dummy1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//存放大于的</span>
  <span class="token class-name">ListNode</span> dummy2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//两个指针负责生成结果链表</span>
  <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> dummy1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> dummy2<span class="token punctuation">;</span>
  <span class="token comment">//p遍历原链表</span>
  <span class="token class-name">ListNode</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
      p2<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
      p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      p1<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
      p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//断开原来链表每个节点的next指针</span>
    <span class="token comment">//暂时记录p后面一位</span>
    <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    p <span class="token operator">=</span> temp <span class="token comment">// 意思是待处理的节点p，后移</span>
  <span class="token punctuation">}</span>
  
  p1<span class="token punctuation">.</span>next <span class="token operator">=</span> dummy2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> dummy1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并k个有序链表" tabindex="-1"><a class="header-anchor" href="#合并k个有序链表" aria-hidden="true">#</a> 合并k个有序链表</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//合并k个有序链表</span>
<span class="token comment">//二叉堆、优先级队列：为了方便的获得每次的最小值</span>
<span class="token class-name">ListNode</span> <span class="token function">mergeKLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> lists<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> p <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
  
  <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> pq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>
  	lists<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>val <span class="token operator">-</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ListNode</span> head <span class="token operator">:</span> lists<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
      pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>pq<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> node <span class="token operator">=</span> pq<span class="token punctuation">.</span><span class="token function">roll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      pq<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
  
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：优先队列中的元素个数最多是<code>k</code>（链表条数），所以一次<code>poll</code>或<code>add</code>方法的时间复杂度是<code>o(logk)</code>，算法整体的时间复杂度<code>o(Nlogk)</code>，N是链表的节点总数。</p><h4 id="单链表的倒数第k个节点" tabindex="-1"><a class="header-anchor" href="#单链表的倒数第k个节点" aria-hidden="true">#</a> 单链表的倒数第k个节点</h4><h5 id="基本方法" tabindex="-1"><a class="header-anchor" href="#基本方法" aria-hidden="true">#</a> 基本方法</h5><ol><li>让一个指针p1指向头节点head，走k步</li><li>此时再用一个节点p2，指向头节点head</li><li>p1，p2同时走，走到链表末尾的空指针时，p1走了n-k步，p2从head开始走了n-k步，正好停留在倒数第k上</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">findFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">ListNode</span> p2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除倒数第k个" tabindex="-1"><a class="header-anchor" href="#删除倒数第k个" aria-hidden="true">#</a> 删除倒数第k个</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//需要找到倒数n+1</span>
  <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> x <span class="token operator">=</span> <span class="token function">findFromEnd</span><span class="token punctuation">(</span>dummy<span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  x<span class="token punctuation">.</span>next <span class="token operator">=</span> x<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token class-name">ListNode</span> <span class="token function">findFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token class-name">ListNode</span> p2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span> p1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next
    p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> p2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️此处为了防止空指针，引入虚拟头节点（有+1的操作，节点也+1）</p><h4 id="单链表的中点" tabindex="-1"><a class="header-anchor" href="#单链表的中点" aria-hidden="true">#</a> 单链表的中点</h4><p>快慢指针</p><p>我们让两个指针 <code>slow</code> 和 <code>fast</code> 分别指向链表头结点 <code>head</code>。</p><p><strong>每当慢指针 <code>slow</code> 前进一步，快指针 <code>fast</code> 就前进两步，这样，当 <code>fast</code> 走到链表末尾时，<code>slow</code> 就指向了链表中点</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">middleNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断环" tabindex="-1"><a class="header-anchor" href="#判断环" aria-hidden="true">#</a> 判断环</h4><h5 id="是否含有环" tabindex="-1"><a class="header-anchor" href="#是否含有环" aria-hidden="true">#</a> 是否含有环</h5><p>快慢指针</p><p>如果 <code>fast</code> 最终遇到空指针，说明链表中没有环；如果 <code>fast</code> 最终和 <code>slow</code> 相遇，那肯定是 <code>fast</code> 超过了 <code>slow</code> 一圈，说明链表中含有环。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">hasCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">return</span> ture<span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="找环的起点" tabindex="-1"><a class="header-anchor" href="#找环的起点" aria-hidden="true">#</a> 找环的起点</h5><ol><li><p>当快慢指针相遇时，让其中任一个指针指向头节点</p><blockquote><p>⚠️利用break跳出循环</p></blockquote></li><li><p>让它俩以相同速度前进</p></li><li><p>再次相遇时所在的节点位置就是环的起点</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//fast遇到空指针，说明无环</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fast <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">||</span> fast<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> slow<span class="token punctuation">)</span><span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> fast<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="链表是否相交" tabindex="-1"><a class="header-anchor" href="#链表是否相交" aria-hidden="true">#</a> 链表是否相交</h4><p>解决问题的关键：让两个指针同时到达相交点</p><p>让 <code>p1</code> 遍历完链表 <code>A</code> 之后开始遍历链表 <code>B</code>，让 <code>p2</code> 遍历完链表 <code>B</code> 之后开始遍历链表 <code>A</code>，这样相当于「逻辑上」两条链表接在了一起。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> p1 <span class="token operator">=</span> headA<span class="token punctuation">,</span> p2 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!=</span> p2<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p1<span class="token punctuation">.</span>next <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">else</span> p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p2<span class="token punctuation">.</span>next <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">else</span> p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> p1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️不应该用p1不为空作为退出条件</p>`,33),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","1.双指针.html.vue"]]);export{d as default};
