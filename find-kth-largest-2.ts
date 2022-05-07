function findKthLargest(nums: number[], k: number): number {
    const heap = new Heap();
    for(const num of nums) {
        heap.add(num);
        if(heap.size() > k) {
            heap.poll();   
        }
    }
    return heap.poll();
};

class Heap {
    _heap: number[];

    constructor() {
        this._heap = new Array();
    }
    add(value: number) {
        this._heap.push(value);
        this.heapifyUp(this._heap.length - 1);
    }

    size(): number {
        return this._heap.length;
    }

    poll(): number {
        const val = this._heap[0];
        this._heap[0] = this._heap[this._heap.length - 1];
        this._heap.pop();
        this.heapifyDown(0);
        return val;
    }

    heapifyDown(i: number) {
        let min = i;
        const left = 2 * i + 1;
        const right =  2 * i + 2;
        const parent = Math.floor((i - 1) / 2);
        if(left < this._heap.length && this._heap[i] > this._heap[left]) {
            min = left;
        }
        if(right < this._heap.length && this._heap[i] > this._heap[right] && this._heap[left] > this._heap[right]) {
            min = right;
        }
        if(min !== i) {
            const tmp = this._heap[i];
            this._heap[i] = this._heap[min];
            this._heap[min] = tmp;
            this.heapifyDown(min);
        }
    }
    heapifyUp(i: number) {
        let min = i;
        const parent = Math.floor((i - 1) / 2);
        if(this._heap[i] < this._heap[parent]) {
            min = parent;
            const tmp = this._heap[i];
            this._heap[i] = this._heap[min];
            this._heap[min] = tmp;
            this.heapifyUp(min);
        }
    }
}
