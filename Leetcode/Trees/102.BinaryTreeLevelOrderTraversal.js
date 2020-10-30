/**Given a binary tree, return the level order traversal 
 * of its nodes' values. (ie, from left to right, level by level).
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let results = [];
    while (queue.length) {
        let level = [];
        let nodes = queue;
        queue = [];
        nodes.forEach(node=>{
            if(node){
                level.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        });
        if(level.length){results.push(level)};
    }
    return results;
};