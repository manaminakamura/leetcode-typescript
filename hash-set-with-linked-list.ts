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
    next: Node | null;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Bucket {
    head: Node;

    constructor() {
        this.head = new Node(0);
    }

    insert(newValue): void {
        if (!this.exists(newValue)) {
            const newNode = new Node(newValue, this.head.next);
            this.head.next = newNode;
        }
    }
    
    delete(value) {
        let prev = this.head;
        let curr = this.head.next;
        
        while(curr !== null) {
            if(curr.value === value) {
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }
    
    exists(value) {
        let curr = this.head.next;
        while(curr !== null) {
            if(curr.value === value) {
                return true;
            }
            curr = curr.next
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
