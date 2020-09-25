//572. Subtree of Another Tree

/* Given two non-empty binary trees s and t, check whether tree t has exactly 
the same structure and node values with a subtree of s. A subtree of s is
 a tree consists of a node in s and all of this node's descendants. 
The tree s could also be considered as a subtree of itself. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    if(s == null) return false;
    return isSameTree(s, t) || isSubtree(s.right, t) || isSubtree(s.left, t);
};

var isSameTree = function (s, t) {
    if (s == null && t == null) {
        return true;
    }
    if (s == null || t == null || s.val !== t.val) {
        return false;
    }
    return isSameTree(s.right, t.right) && isSameTree(s.left, t.left);
}

// Time complexity : O(m*n)O(m∗n)