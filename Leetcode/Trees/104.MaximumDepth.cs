public class Solution
{
    // Iterative solution
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }

        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        int depth = 0;

        while (queue.Any())
        {
            int len = queue.Count;
            for (int i = 0; i < len; i++)
            {
                TreeNode item = queue.Dequeue();
                if (item.left != null) queue.Enqueue(item.left);
                if (item.right != null) queue.Enqueue(item.right);
            }
            depth++;
        }
        return depth;
    }

    // Recursive solution
    public int MaxDepth(TreeNode root)
    {
        if (root == null)
        {
            return 0;
        }
        return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
    }
}