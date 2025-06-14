class MinHeap {
    constructor() {
        this.data = [];
    }
    parentIndex(i) { return Math.floor((i - 1) / 2) };

    leftIndex(i) { return 2 * i + 1 };

    rightIndex(i) { return 2 * i + 2 };

    swap(i, j) { [this.data[i], this.data[j]] = [this.data[j], this.data[i] ]};

    size(){return this.data.length}

    heapifyUp(){
        let index = this.data.length - 1;
        while(index > 0){
            let parent = this.parentIndex(index);
            if(this.data[parent] > this.data[index]){
                this.swap(index, parent);
                index = parent;
            }else {
                break;
            }
        }
    }

    insert(value){
        this.data.push(value);
        this.heapifyUp()
    }

    heapifyDown(){
        let index = 0;
        let length = this.data.length;
        while(this.leftIndex(index) < length){
            let smallest = index;
            let left = this.leftIndex(index);
            let right = this.rightIndex(index);

            if(this.data[left] < this.data[smallest]){
                smallest = left;
            }
            if(this.data[right] < this.data[smallest]){
                smallest = right;
            }

            if(smallest !== index){
                this.swap(smallest, index);
                index = smallest;
            }else{
                break;
            }
        }
    }

    remove(){
        if(this.data.length === 0) return null;
        if(this.data.length === 1) return this.data.pop();

        let min = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
        return min

    }

    heapSort(){
        let copy = [...this.data];
        let sorted = [];
        while(this.size() > 0) {
            sorted.push(this.remove())
        }
        this.data = copy;
        return sorted;
    }
}



const h = new MinHeap();


h.insert(10)
h.insert(39)
h.insert(46)
h.insert(12)
h.insert(6)
h.insert(2)
h.insert(29)


console.log(h.heapSort());
