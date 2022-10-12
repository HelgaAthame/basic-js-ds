const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if (this.rootNode === null) {
      return false;
    } else if (data < this.rootNode.data) {
      return this.searchHas(this.rootNode.left, data);
    } else if (data > this.rootNode.data) {
      return this.searchHas(this.rootNode.right, data);
    } else if (data === this.rootNode.data) {
      return true;
    } else {
      return false;
    }



    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  searchHas(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.searchHas(node.left, data);
    } else if (data > node.data) {
      return this.searchHas(node.right, data);
    } else if (data === node.data) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    if (this.rootNode === null) {
      return null;
    } else if (data < this.rootNode.data) {
      return this.searchFind(this.rootNode.left, data);
    } else if (data > this.rootNode.data) {
      return this.searchFind(this.rootNode.right, data);
    } else if (data === this.rootNode.data) {
      return this.rootNode;
    } else {
      return null;
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  searchFind(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchFind(node.left, data);
    } else if (data > node.data) {
      return this.searchFind(node.right, data);
    } else if (data === node.data) {
      return node;
    } else {
      return null;
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  removeNode(node, data) {

    console.dir('22222 ');
    console.dir(data);
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let temp = this.findMin(node.right);
      node.data = temp/*.data*/;
      node.right = this.removeNode(node.right, temp);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    /*if (node === null) {
      return null;
    } else {
      if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
      } else if (data === node.data) {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        let newNode = this.findMin(node.right);
        node.data = newNode;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
      }
  }*/
  }

  min() {
    if (this.rootNode.left === null) {
      return this.rootNode.data;
    } else {
      return this.findMin(this.rootNode.left);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  findMin(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.findMin(node.left);
    }
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMin(node.left);
    }
  }
  findMax(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.findMax(node.right);
    }
  }

  max() {
    if (this.rootNode.right === null) {
      return this.rootNode.data;
    } else {
      return this.findMax(this.rootNode.right);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
