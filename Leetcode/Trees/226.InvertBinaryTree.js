//226 Invert Binary Tree


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    var queue = [root];
    while (queue.length) {
        var pointer = queue.shift();

        //invert here:
        var temp = pointer.left;
        pointer.left = pointer.right;
        pointer.right = temp;

        //continue...
        if (pointer.left) queue.push(pointer.left);
        if (pointer.right) queue.push(pointer.right);
    }
    return root;
};

// O(n)