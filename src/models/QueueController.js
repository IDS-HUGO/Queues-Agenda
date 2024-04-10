export class QueueController {
    constructor() {
        this.queue = new Queue();
    }

    enqueue(element) {
        this.queue.enqueue(element);
    }

    dequeue() {
        return this.queue.dequeue();
    }

    peek() {
        return this.queue.peek();
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    getSize() {
        return this.queue.getSize();
    }
}
