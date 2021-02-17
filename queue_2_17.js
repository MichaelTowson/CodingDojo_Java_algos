// Queue
// FIFO (First in, first out)

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    // add nodes to the rear of the queue
    enqueue(node) {
        if(this.length == 0){
            this.back = node;
            this.front = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }
    // remove nodes from the front of the queue
    dequeue() {
        if (this.front === this.back) {
            this.back = null;
        }
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    // check the front of the queue without removing it
    peek() {
        console.log(this.front);
        return this.front;
    }

    // return true / false if queue is empty
    isEmpty() {
        if(this.length == 0){
            return true;
        }
        return false;
    }

    // return length
    count() {
        return this.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
    var tempQueue = new Queue();

    while(!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }
    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

}

function readQueue2(queue) {
    var length = queue.count();

    while (length) {
        var node = queue.dequeue();
        console.log(node.data);
        queue.enqueue(node);
        length--;
    }
}

//Create the Queue and test code
var myQueue = new Queue;
myQueue.enqueue(new Node(1));
myQueue.peek();
myQueue.enqueue(new Node(2));
myQueue.peek();
myQueue.enqueue(new Node(3));
myQueue.peek();
myQueue.dequeue();
myQueue.peek();