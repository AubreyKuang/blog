import{_ as e,V as i,W as n,a0 as l}from"./framework-91a010c2.js";const s={},d=l(`<h1 id="刷题总结" tabindex="-1"><a class="header-anchor" href="#刷题总结" aria-hidden="true">#</a> 刷题总结</h1><h2 id="层序遍历" tabindex="-1"><a class="header-anchor" href="#层序遍历" aria-hidden="true">#</a> 层序遍历</h2><blockquote><p>Problem: 剑指 Offer 32 - I. 从上到下打印二叉树</p></blockquote><p>打印结果不用存储层次信息，所以只用一层List</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int[] levelOrder(TreeNode root) {

        // List&lt;List&lt;Integer&gt;&gt; results = new ArrayList&lt;&gt;();
        List&lt;Integer&gt; results = new ArrayList&lt;&gt;();

        if (root == null) {
            return new int[0];
        }

        Queue&lt;TreeNode&gt; queue = new ArrayDeque&lt;&gt;();
        queue.offer(root);
        // int levelIndex = 0;

        while (!queue.isEmpty()) {
            // List&lt;Integer&gt; level = new ArrayList&lt;&gt;();
            int size = queue.size();
            for (int i = 0; i &lt; size; i++) {
                TreeNode node = queue.poll();
                results.add(node.val);
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }
            // results.add(level);
            // levelIndex++;

        }

        int[] answer = new int[results.size()];
        for (int i = 0 ; i &lt; results.size(); i++) {
            answer[i] = results.get(i);
        }
        return answer;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[d];function v(a,u){return i(),n("div",null,r)}const c=e(s,[["render",v],["__file","0 刷题总结.html.vue"]]);export{c as default};
