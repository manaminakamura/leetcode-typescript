class Node {
    val: number;
    next: Node | null;
    constructor(val: number, next: Node | null = null) {
        this.val = val;
        this.next = next;
    }
}
class MyLinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    getTail(node): Node {
        if(!node || !node.next) return node;
        return this.getTail(node.next);
    }

    getIndex(currentIndex, targetIndex, node): Node {
        if(currentIndex === targetIndex) return node;
        if(!node) return null;
        return this.getIndex(currentIndex + 1, targetIndex, node.next);
    }

    get(index: number): number {
        const node = this.getIndex(0, index, this.head);
        return node ? node.val : -1;
    }

    addAtHead(val: number): void {
        const curr = new Node(val);
        curr.next = this.head;
        this.head = curr;
    }

    addAtTail(val: number): void {
        const curr = new Node(val);
        const tail = this.getTail(this.head);
        if(!tail) {
            this.head = curr;
            return;
        }
        tail.next = curr;
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        const curr = new Node(val);
        const prevNode = this.getIndex(0, index - 1, this.head);
        if (prevNode && prevNode.next) curr.next = prevNode.next;
        if (prevNode) prevNode.next = curr;
    }

    deleteAtIndex(index: number): void {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prevNode = index !== 0 ? this.getIndex(0, index - 1, this.head) : null;
        if (prevNode && prevNode.next) prevNode.next = prevNode.next.next;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
