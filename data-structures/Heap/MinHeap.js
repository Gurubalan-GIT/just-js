class MinHeap {
    constructor(nums, size) {
        this.heap = [];
        this.size = size;
        this.length = 0;
        for(let num of nums)
            this.add(num);
    }
    
    calculateParent(i) {
        return Math.floor((i - 1)/ 2);
    }
    
    calculateLeftChild(i) {
        return 2*i + 1;
    }

    calculateRightChild(i) {
        return 2*i + 2;
    }
    
    bubbleUp(i) {
        let heap = this.heap;
        let parent = this.calculateParent(i);
        while(i > 0 && heap[parent] > heap[i]) {
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
            parent =  this.calculateParent(i);
        }
    }
    
    getMin() {
        return this.heap[0];
    }
    
    bubbleDown(i) {
        let length = this.length;
        let heap = this.heap;
        let child = this.calculateLeftChild(i);
        
        while(child < length) {
            let rightCh = child + 1;
            if(rightCh < length && heap[rightCh] < heap[child]) {
                child++;
            }
            
            if(heap[i] <= heap[child]) return;
            
            [heap[i], heap[child]] = [heap[child], heap[i]];
            i = child;
            child = this.calculateLeftChild(i);
        }
    }
    
    add(num) {
        if(this.length < this.size) {
            this.length++;
            this.heap.push(num);
            this.bubbleUp(this.length - 1);
        } else if(num > this.heap[0]) {
            this.heap[0] = num;
            this.bubbleDown(0);
        }
    }
}