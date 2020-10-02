    //Linear search: time complexity O(n) -=> use for loop
    
    
    //Binary search: time complexity O(log n)
    const lookup = value => {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        while(currentNode){
          if(value < currentNode.value){
            currentNode = currentNode.left;
          } else if(value > currentNode.value){
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            return currentNode;
          }
        }
        return null
      }

