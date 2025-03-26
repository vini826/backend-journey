class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this._insertRecursive(this.root, value);
        }
    }

    _insertRecursive(node, value) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TreeNode(value);
            } else {
                this._insertRecursive(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(value);
            } else {
                this._insertRecursive(node.right, value);
            }
        }
    }

    inorderTraversal(node) {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);

console.log("Inorder Traversal:");
binaryTree.inorderTraversal(binaryTree.root);