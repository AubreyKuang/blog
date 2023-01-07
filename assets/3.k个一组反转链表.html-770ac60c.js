import{_ as n,V as s,W as a,a1 as e}from"./framework-a2b1dd72.js";const t={},p=e(`<h1 id="k个一组反转链表" tabindex="-1"><a class="header-anchor" href="#k个一组反转链表" aria-hidden="true">#</a> K个一组反转链表</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 反转以 a 为头结点的链表</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","3.k个一组反转链表.html.vue"]]);export{r as default};
