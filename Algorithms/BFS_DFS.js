//Breadth first search: go by level from left to right
//Time complexity: O(n)

//Depth First Search: go as deep as possible, come back, repeat
//Time complexity: O(n)

//If you know a solution is not far from the root of the tree: BFS
//If the tree is very deep and solutions are rare: BFS (DFS will take long time. )
//If the tree is very wide:DFS (BFS will need too much memory)
//If solutions are frequent but located deep in the tree:DFS
//Determining whether a path exists between two nodes:DFS
//Finding the shortest path: BFS



// ------- BREADTH FIRST SEARCH

const BreadthFirstSearch = () => {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

//BFS recursive
const BreadthFirstSearchRecursive = (queue, list) => {
    if (!queue.length) {
        return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }

    return this.BreadthFirstSearchRecursive(queue, list);
}


// -------- DEPTH FIRST SEARCH
//  101
//33  105
//inorder: 33, 101, 105
//preorder: 101, 33, 105
//postorder: 33, 105, 101


function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}
