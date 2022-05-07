function topKFrequent(words: string[], k: number) {    
    // instantiate map of words frequency
    const map = new Map();
    words.map((item) => {
        let t = map.get(item) || 0;
        map.set(item, t + 1);
    });
    
    words = [...new Set(words)];
    const heap = new Heap((a, b) => {
        if(map.get(a) === map.get(b)) {
            return a.localeCompare(b) < 0;
        }
        return map.get(b) < map.get(a);
    }, words);
    
    // get the first k results per our priority
    const result = [];
    while(k--) {
        result.push(heap.extractMin());
    }
    return result;
};


// priority queue implemention using heaps
// comparator will set the priority first
class Heap{
    comparator: Function;
    array: string[];
    constructor(comparator, array) {
        this.comparator = comparator;
        this.array = array;
        for(let i = Math.floor((this.array.length - 1) / 2); i >= 0; i--) {
            this.downHeap(i);
        }
    }
    
    left(i: number): number {
        return (2 * i) + 1;
    }
    
    right(i: number): number {
        return (2 * i) + 2;
    }
    
    downHeap(index: number){
        let temp = index;
        let left = this.left(index);
        let right = this.right(index);
        if(left < this.array.length && this.comparator(this.array[left], this.array[temp])) {
            temp = left;
        }
        if(right < this.array.length && this.comparator(this.array[right], this.array[temp])) {
            temp = right;
        }
        if (temp !== index) {
            let copy = this.array[temp];
            this.array[temp] = this.array[index];
            this.array[index] = copy;
            this.downHeap(temp);
        }
    }
    
    extractMin(): string {
        let min = this.array[0];
        this.array[0] = this.array[this.array.length - 1];
        this.array.pop();
        this.downHeap(0);
        return min;
    }
}
