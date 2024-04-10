export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(element) {
        const newNode = { value: element, next: null };
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.size++;
    }

    dequeue() {
        if (!this.head) return null;
        const removedNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removedNode.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (!this.head) return null;
        return this.head.value;
    }

    getSize() {
        return this.size;
    }
}
