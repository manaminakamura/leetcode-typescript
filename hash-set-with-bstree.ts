class MyHashSet {
    keyRange: number;
    bucketArray: Bucket[];

    constructor() {
        this.keyRange = 769;
        this.bucketArray = new Array(this.keyRange);
        for(let i = 0; i < this.keyRange; i++) {
            this.bucketArray[i] = new Bucket();
        }
    }
    
    hash(key): number {
        return key % this.keyRange;
    }

    add(key: number): void {
        const index = this.hash(key);
        this.bucketArray[index].insert(key);
    }

    remove(key: number): void {
        const index = this.hash(key);
        this.bucketArray[index].delete(key);
    }

    contains(key: number): boolean {
        const index = this.hash(key);
        return this.bucketArray[index].exists(key);
    }
}

class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BSTree {
    root: Node | null;  

    constructor() {
        this.root = null;
    }

    searchBST(root: Node | null, value: number): Node {
        if (root === null || value === root.value) return root;
        if (value < root.value) {
            return this.searchBST(root.left, value);
        } else {
            return this.searchBST(root.right, value);
        }
    }

    insertIntoBST(root: Node | null, value: number): Node {
        if(root === null) {
            root = new Node(value);
        }
        if(value < root.value) {
            root.left = this.insertIntoBST(root.left, value);
        } else if (value === root.value) {
             return root;
        } else {
            root.right = this.insertIntoBST(root.right, value);
        }
        return root;
    }
    successor(root: Node): number {
        root = root.right;
        while (root.left) {
            root = root.left;
        }
        return root.value;
    }
    predecessor(root: Node): number {
        root = root.left;
        while (root.right) {
            root = root.right;
        }
        return root.value;
    }
    deleteNode(root: Node | null, key: number): Node {
        if(root === null) {
            return root;
        }
        // delete from the right subtree
        if (key > root.value) {
            root.right = this.deleteNode(root.right, key);
        // delete from the left subtree
        } else if(key < root.value) {
            root.left = this.deleteNode(root.left, key);
        // delete the current node
        } else {
            // the root is leaf
            if(!root.right && !root.left) {
                root = null;
            }
            else if (root.right) {
                root.value = this.successor(root);
                root.right = this.deleteNode(root.right, key);
            } else {
                root.value = this.predecessor(root);
                root.left = this.deleteNode(root.left, key);
            }
        }
        return root;
    }
}

class Bucket {
    tree: BSTree;

    constructor() {
        this.tree = new BSTree();
    }

    insert(newValue): void {
        if (!this.exists(newValue)) {
            this.tree.root = this.tree.insertIntoBST(this.tree.root, newValue);
        }
    }
    
    delete(value) {
        if (this.exists(value)) {
            this.tree.root = this.tree.deleteNode(this.tree.root, value);
        }
    }
    
    exists(value) {
       return this.tree.searchBST(this.tree.root, value) !== null;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
