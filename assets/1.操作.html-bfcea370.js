import{_ as n,V as s,W as a,a0 as e}from"./framework-91a010c2.js";const o={},t=e(`<h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><p>不可分割的操作集合、同时成功或失败</p><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><ul><li>执行了 begin/start transaction 命令后，并不代表事务启动了。只有在执行这个命令后，执行了增删查改操作的 SQL 语句，才是事务真正启动的时机；</li><li>执行了 start transaction with consistent snapshot 命令，就会马上启动事务。</li></ul><h2 id="事务的操作" tabindex="-1"><a class="header-anchor" href="#事务的操作" aria-hidden="true">#</a> 事务的操作</h2><h3 id="方式一-关闭自动提交" tabindex="-1"><a class="header-anchor" href="#方式一-关闭自动提交" aria-hidden="true">#</a> 方式一：关闭自动提交</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#设置手动提交</span>
<span class="token keyword">set</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


<span class="token comment">#查询转账人a余额</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> acount <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#a扣钱</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">1000</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#b加钱</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">1000</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>


<span class="token comment">#把操作提交到数据库</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">#如果报错，回滚</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式二-手动开启事务" tabindex="-1"><a class="header-anchor" href="#方式二-手动开启事务" aria-hidden="true">#</a> 方式二：手动开启事务</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">#改回自动提交</span>
<span class="token keyword">set</span> @<span class="token variable">@autocommit</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#开启事物，二选一</span>
<span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span><span class="token punctuation">;</span>

<span class="token comment">#查询转账人a余额</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> acount <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#a扣钱</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">1000</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>

<span class="token comment">#b加钱</span>
<span class="token keyword">update</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">1000</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>


<span class="token comment">#把操作提交到数据库</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">#如果报错，回滚</span>
<span class="token keyword">rollback</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[t];function l(c,i){return s(),a("div",null,p)}const d=n(o,[["render",l],["__file","1.操作.html.vue"]]);export{d as default};
