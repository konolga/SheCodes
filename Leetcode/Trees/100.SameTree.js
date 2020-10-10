// Given two binary trees, write a function to check if they are the same or not
// 100. Same Tree


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//recursive  solution
var isSameTree = function (p, q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};