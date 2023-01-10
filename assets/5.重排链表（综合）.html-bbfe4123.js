import{_ as n,V as s,W as a,a0 as p}from"./framework-91a010c2.js";const e={},t=p(`<h1 id="重排链表-综合" tabindex="-1"><a class="header-anchor" href="#重排链表-综合" aria-hidden="true">#</a> 重排链表（综合）</h1><blockquote><p>寻找链表中点、链表反转、merge操作</p></blockquote><p>不能改数值，而是节点交换</p><p>原链表的左半端和反转后的右半端合并</p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/image-20230110172313499.png" alt="image-20230110172313499" style="zoom:50%;"><p><code>mid.next 视为中点后链表的头节点，所以记为l2</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// lc143，jz026</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reorderList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">ListNode</span> mid <span class="token operator">=</span> <span class="token function">findMid</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> l1 <span class="token operator">=</span> head<span class="token punctuation">,</span> l2 <span class="token operator">=</span> mid<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  mid<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  l2 <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">mergeList</span><span class="token punctuation">(</span>l1<span class="token punctuation">,</span> l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 快慢指针找中点</span>
<span class="token comment">// 如果是偶数个节点，返回的就是更后面的中点</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">findMid</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">,</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 反转链表</span>
<span class="token comment">// prev   curr  next   next.next</span>
<span class="token comment">//  </span>
<span class="token comment">// dummy  head</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
   <span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> nxt<span class="token punctuation">;</span>
   pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span> nxt <span class="token operator">=</span> head<span class="token punctuation">;</span>
   <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     nxt <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
     cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
     pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
     cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 交错合并链表</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> l1Temp<span class="token punctuation">,</span> l2Temp<span class="token punctuation">;</span>
  
  <span class="token keyword">while</span><span class="token punctuation">(</span>l1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> l2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    l1Temp <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    l2Temp <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    
    l1<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
    l1 <span class="token operator">=</span> l1Temp<span class="token punctuation">;</span>
    
    l2<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
    l2 <span class="token operator">=</span> l2Temp
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> l1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","5.重排链表（综合）.html.vue"]]);export{d as default};
