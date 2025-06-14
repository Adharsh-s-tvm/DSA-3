class MaxHeap {
    constructor() {
        this.data = [];
    }

    _parent(i) { return Math.floor((i - 1) / 2) }

    _left(i) { return 2 * i + 1 }

    _right(i) { return 2 * i + 2 }

    swap(i, j) {[this.data[i], this.data[j]] = [this.data[j] , this.data[i]]}

    size(){return this.data.length}

    heapifyUp(){
        let index = this.data.length - 1;
        while(index > 0){
            let parent = this._parent(index);
            if(this.data[index] > this.data[parent]){
                this.swap(index, parent);
                index = parent;
            }else break;
        }
    }

    insert(value){
        this.data.push(value);
        this.heapifyUp()
    }

    heapifyDown(){
        let index = 0;
        let length = this.data.length
        while(this._left(index) < length){
            let largest = index;
            let left = this._left(index);
            let right = this._right(index);

            if(this.data[largest] < this.data[left] && left < length){
                largest = left
            }
            if(this.data[largest] < this.data[right] && right < length){
                largest = right
            }

            if(largest !== index){
                this.swap(index, largest);
                index = largest;
            }else break;
        }
    }

    removeMax(){
        if(this.data.length === 0) return null;
        if(this.data.length === 1) return this.data.pop();

        let max = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return max;
    }

    build(arr){
        for(let i=0 ; i<arr.length ; i++){
            this.insert(arr[i])
        }
    }

    heapSort(){
        let copy = [...this.data];
        let result = [];

        while(this.size() > 0){
            result.push(this.removeMax())
        }

        this.data = copy
        return result;
    }
}


const h = new MaxHeap();

h.insert(25)
h.insert(10)
h.insert(20)
h.insert(5)
h.insert(40)
h.insert(50)
h.insert(70)
h.insert(100)
h.insert(300)

// console.log(h.removeMax());

console.log(h.heapSort());
