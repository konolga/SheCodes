/* 
98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

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
 * @return {boolean}
 */
var isValidBST = function(root, lowerLimit = Number.NEGATIVE_INFINITY, upperLimit= Number.POSITIVE_INFINITY) {
    let res = true;

    if(!root) {
        return true;
    }
    
    if(root.val <= lowerLimit || root.val >= upperLimit) {
        return false;
    }
    
    if(root.left) {
        res = isValidBST(root.left, lowerLimit, root.val);
    }
    
    if(root.right) {
        res = res && isValidBST(root.right, root.val, upperLimit);
    }
          
    return res;
    
};