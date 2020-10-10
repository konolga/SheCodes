/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

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
var isSymmetric = function (root) {
    let queue = [];
    if (root) {
        queue.push(root.left);
        queue.push(root.right);
    }


    while (queue.length > 0) {
        let oneNode = queue.shift();
        let twoNode = queue.shift();

        if (!oneNode && !twoNode) continue;
        if (!oneNode || !twoNode) return false;
        if (oneNode.val != twoNode.val) return false;

        queue.push(oneNode.left);
        queue.push(twoNode.right);
        queue.push(oneNode.right);
        queue.push(twoNode.left);

    }
    return true;
};

//Time complexity : O(n). Because we traverse the entire input tree once, 
//the total run time is O(n), where n is the total number of nodes in the tree.

//Space complexity : There is additional space required for the search queue.
// In the worst case, we have to insert O(n) nodes in the queue.
// Therefore, space complexity is O(n).