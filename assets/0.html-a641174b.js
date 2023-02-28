import{_ as n,V as s,W as a,a0 as e}from"./framework-91a010c2.js";const t={},p=e(`<h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h1><p>反转整个链表</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pubic <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> nxt<span class="token punctuation">;</span>
  pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span> nxt <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nxt <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> nxt<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","0.html.vue"]]);export{r as default};
