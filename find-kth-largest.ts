function findKthLargest(nums: number[], k: number): number {
    const heap = new Heap(nums);
    const heapArray = heap.array;
    const result = [];
    while(k--) {
        result.push(heapArray[0]);
        heapArray[0] = heapArray[heapArray.length - 1];
        heapArray.pop();
        heap.heapify(0);
    }
    return result[result.length - 1];
};

class Heap {
    array: number[];

    constructor(array: number[]) {
        this.array = array;
        for(let i = 0; i < array.length; i++) {
            this.heapify(i);   
        }
    }

    heapify(i: number) {
        let largest = i;
        const left = 2 * i + 1;
        const right =  2 * i + 2;
        const parent = Math.floor((i - 1) / 2);
        if(left < this.array.length && this.array[i] < this.array[left]) {
            largest = left;
        }
        if(right < this.array.length && this.array[i] < this.array[right] && this.array[left] < this.array[right]) {
            largest = right;
        }
        if(largest !== i) {
            const tmp = this.array[i];
            this.array[i] = this.array[largest];
            this.array[largest] = tmp;
            this.heapify(largest);
        }
        if(this.array[i] > this.array[parent]) {
            this.heapify(parent);
        }
    }
}
