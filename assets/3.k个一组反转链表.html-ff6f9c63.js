import{_ as n,V as s,W as a,a0 as p}from"./framework-91a010c2.js";const e={},t=p(`<h1 id="k个一组反转链表" tabindex="-1"><a class="header-anchor" href="#k个一组反转链表" aria-hidden="true">#</a> K个一组反转链表</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 反转以 a 为头结点的链表</span>
<span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> nxt<span class="token punctuation">;</span>
  pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> a<span class="token punctuation">;</span> nxt <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    nxt <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> nxt<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//反转后的头节点</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/** 反转区间 [a, b) 的元素，注意是左闭右开 */</span>
<span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> a<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> nxt<span class="token punctuation">;</span>
  pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> a<span class="token punctuation">;</span> nxt <span class="token operator">=</span> a<span class="token punctuation">;</span>
  
  <span class="token comment">//注意不要把 cur 写成 a</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    nxt <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> nxt<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token class-name">ListNode</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 区间[a, b)包含k个待反转元素</span>
  <span class="token class-name">ListNode</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
  a <span class="token operator">=</span> b <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    b <span class="token operator">=</span> b<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  
  <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token function">reverse</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","3.k个一组反转链表.html.vue"]]);export{r as default};
