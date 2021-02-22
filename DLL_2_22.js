// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    // pop from tail
    removeTail() {
        if(this.isEmpty()){
            return -1;
        } else {
            var temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
        return temp;
    }

    // return is empty
    isEmpty() {
        if(this.head == null){
            return true;
        }else{
            return false;
        }
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}
}

var myDLL = new DLList();
myDLL.addHead(new DLLNode(1));
myDLL.addHead(new DLLNode(2));
myDLL.addHead(new DLLNode(3));
myDLL.addHead(new DLLNode(4));
myDLL.removeTail();
console.log(myDLL);