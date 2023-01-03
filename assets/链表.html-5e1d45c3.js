import{_ as n,V as s,W as a,a0 as p}from"./framework-91a010c2.js";const t={},e=p(`<h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1><h3 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h3><h4 id="有序合并" tabindex="-1"><a class="header-anchor" href="#有序合并" aria-hidden="true">#</a> 有序合并</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>⚠️此处为了防止空指针，引入虚拟头节点（有+1的操作，节点也+1）</p>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","链表.html.vue"]]);export{d as default};
