const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {
  constructor() {
    super();
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
    //npm run test test/queue.test.js
    //throw new NotImplementedError('Not implemented');
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
    } else {
      this.head.next = this.enque(this.head.next, value);
      console.dir(this.head);
      console.dir(this.head.next);
    }

    //throw new NotImplementedError('Not implemented');
  }

  enque(item, val) {
    if (item === null) {
      item = new ListNode(val);
    } else {
      item.next = this.enque(item.next, val);

    }
    return item;
  }

  dequeue() {
    let temp;
    if (this.head !== null) {

      temp = this.head;;
      this.head = this.head.next;
      return temp.value;
    }


    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
