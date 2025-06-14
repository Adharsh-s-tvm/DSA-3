class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    peek() {
        return this.data[0];
    }

    size() {
        return this.data.length;
    }
}


class MinHeap extends Heap {
    insert(value) {
        this.data.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parent = this.getParentIndex(index);
            if (this.data[index] < this.data[parent]) {
                this.swap(index, parent);
                index = parent;
            } else break;
        }
    }

    remove() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.size()) {
            let smallest = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);
            if (right < this.size() && this.data[right] < this.data[smallest]) {
                smallest = right;
            }
            if (this.data[index] > this.data[smallest]) {
                this.swap(index, smallest);
                index = smallest;
            } else break;
        }
    }


    heapifyMin(arr, length, i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < length && arr[left] < arr[smallest]) {
            smallest = left;
        }
        if (right < length && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [arr[i], arr[smallest] = [arr[smallest], arr[i]]];
            heapifyMin(arr, length, smallest)
        }

    }

    buildMinHeap(arr) {
        const length = arr.length;
        for (let i = Math.floor(length / 2) - 1; i >= 0; i++) {
            this.heapifyMin(arr, length, i)
        }
    }


    heapSortDesc(arr) {
    buildMinHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Move min to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyMin(arr, i, 0);
    }

    return arr;
}



build(array) {
    this.data = [];
    array.forEach(val => this.insert(val));
}



}

class MaxHeap extends Heap {
    insert(value) {
        this.data.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.data.length - 1;
        while (index > 0) {
            let parent = this.getParentIndex(index);
            if (this.data[index] > this.data[parent]) {
                this.swap(index, parent);
                index = parent;
            } else break;
        }
    }

    remove() {
        if (this.data.length === 0) return null;
        if (this.data.length === 1) return this.data.pop();

        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.size()) {
            let largest = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);
            if (right < this.size() && this.data[right] > this.data[largest]) {
                largest = right;
            }
            if (this.data[index] < this.data[largest]) {
                this.swap(index, largest);
                index = largest;
            } else break;
        }
    }

    build(array) {
        this.data = [];
        array.forEach(val => this.insert(val));
    }
}




const minHeap = new MinHeap();
minHeap.build([10, 5, 3, 2, 7]);
console.log(minHeap.data); // [2, 5, 3, 10, 7]
console.log(minHeap.remove()); // 2
console.log(minHeap.data); // [3, 5, 7, 10]

const maxHeap = new MaxHeap();
maxHeap.build([10, 5, 3, 2, 7]);
console.log(maxHeap.data); // [10, 7, 3, 2, 5]
console.log(maxHeap.remove()); // 10
console.log(maxHeap.data); // [7, 5, 3, 2]
