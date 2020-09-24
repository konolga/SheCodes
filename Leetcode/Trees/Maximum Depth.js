//104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left,right) + 1
};

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            let item = queue.shift()
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
        depth++;        
    }
    return depth;
};