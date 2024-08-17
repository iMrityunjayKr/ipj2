class Queue {
    constructor() {
        this.queue = []
    }
    //add data to queue
    enqueue(data) {
        this.queue.push(data)
    }
    //remove data from queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        this.queue.shift();
    }
    //Queue is empty or not
    isEmpty(){
        return this.queue.length === 0;
    }
    //front element in the queue
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0]
    }
    //size of queue
    clear() {
        this.queue = []
    }
    //printing queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + " "
        }
        return str
    }

}
//usage example

let myQueue = new Queue();
myQueue.enqueue(20)
myQueue.enqueue(10)
myQueue.enqueue(30)
myQueue.dequeue()

console.log(myQueue.printQueue());




