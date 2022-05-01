class SinglyListNode {
    val: number;
    next: SinglyListNode | null;
    constructor(val: number, next: SinglyListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
class MyLinkedList {
    head: SinglyListNode | null;

    constructor() {
        this.head = null;
    }

    getTail(): SinglyListNode {
        let cur = this.head;
        while (cur && cur.next) {
            cur = cur.next;
        }
        return cur;
    }
    getNode(index: number): SinglyListNode | null {
        let cur = this.head;
        for (let i: number = 0; i < index; i++) {
            if(!cur.next) {
                cur = null;
                return;
            }
            cur = cur.next;
        }
        return cur;
    }
    get(index: number): number {
        const node = this.getNode(index);
        return node ? node.val : -1;
    }

    addAtHead(val: number): void {
        const curr = new SinglyListNode(val);
        curr.next = this.head;
        this.head = curr;
    }

    addAtTail(val: number): void {
        const curr = new SinglyListNode(val);
        if(this.head === null) {
            this.addAtHead(val);
            return;
        }
        const tail = this.getTail();
        tail.next = curr;
    }

    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        const curr = new SinglyListNode(val);
        const prevNode = this.getNode(index - 1);
        if(!prevNode) {
            return;
        }
        curr.next = prevNode.next;
        prevNode.next = curr;
    }

    deleteAtIndex(index: number): void {
        const cur = this.getNode(index);
        if(!cur) {
            return;
        }
        const next = cur.next;
        if (index === 0) {
            this.head = next;
            return;
        } else {
            const prevNode = this.getNode(index -1);
            prevNode.next = next;
        }
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
