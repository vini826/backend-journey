class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.value, end=" ")
            self.inorder_traversal(node.right)

binary_tree = BinaryTree()
binary_tree.insert(50)
binary_tree.insert(30)
binary_tree.insert(70)
binary_tree.insert(20)
binary_tree.insert(40)
binary_tree.insert(60)
binary_tree.insert(80)

print("Inorder Traversal:")
binary_tree.inorder_traversal(binary_tree.root)