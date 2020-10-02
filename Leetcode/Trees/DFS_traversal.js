//Databricks: Given a TreeNode defined with an additional parent pointer, 
//print all nodes of a given tree in any order using constant space.
// You are not allowed to modify the tree structure itself.


//using Post Order Traversal
function PostOrder(root) {
    let currentNode = root;
    let prevNode = null;

    while (currentNode != null) {
        if (currentNode.left && currentNode != prevNode.parent) {
            //go down
            currentNode = currentNode.left;
        } else if (currentNode.right && currentNode != prevNode.parent) {
            //go down
            currentNode = currentNode.right;
        } else {
            Console.log(currentNode);
            //go up
            prevNode = currentNode;
            currentNode = currentNode.parent;
        }
    }
}

//Notes:
//space complexity of recursive algorithm is proportinal
// to maximum depth of recursion tree generated: O(nm)