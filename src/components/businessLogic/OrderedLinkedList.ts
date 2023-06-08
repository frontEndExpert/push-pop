import NodeObject from "./NodeObject";
import { callback } from "./callback";

class OrderedLinkedList {
  head: NodeObject | null;

  newNode = new NodeObject({
    data: null,
    next: null,
    previous: null,
  });

  constructor(node?: NodeObject | null) {
    this.head = (node === undefined) ? null : node;
  }

  // Iterates through the linked list and calls the callback function for each node.
  // callback(data: any, pos: number) update the NodeObject.position
  // placeHead() {
  //   if (this.head === null) {
  //     return this;
  //   }

  //   // Find the biggest node in the linked list.
  //   let biggestNode = this.head;
  //   for (let node = this.head.next; node !== null; node = node.next) {
  //     if (callback(node.data, biggestNode.data)) {
  //       biggestNode = node;
  //     }
  //   }
  //   console.log('biggestNode = ', biggestNode.data);
  //   // Move the biggest node to the head of the linked list.
  //   if (biggestNode !== this.head) {
  //     if (biggestNode.previous !== null && biggestNode.next !== null) {
  //       biggestNode.previous.next = biggestNode.next;
  //       biggestNode.next.previous = biggestNode.previous;
  //       this.head.previous = biggestNode;
  //       biggestNode.next = this.head;
  //       this.head = biggestNode;
  //     } else {
  //     //   biggestNode.previous = null;
  //     //   this.head.previous = biggestNode;
  //     //   this.head = biggestNode;

  //     //   // biggestNode.previous.next = biggestNode.next;
  //     //   // biggestNode.next.previous = biggestNode.previous;
  //     // } else {
  //       this.head = biggestNode;
  //     }
  //   }

  //   return this;
  // }

  placeHead() {
    // Check if the linked list is empty.
    if (this.head === null) {
      // The linked list is empty, so there is nothing to do.
      return this;
    }

    // Find the biggest node in the linked list.
    let biggestNode = this.head;
    for (let node = this.head.next; node !== null; node = node.next) {
      if (callback(node.data, biggestNode.data)) {
        // The current node is bigger than the biggest node so far.
        biggestNode = node;
      }
    }

    // Move the biggest node to the head of the linked list.
    if (biggestNode !== this.head) {
      // The biggest node is not already at the head of the linked list.

      // Update the previous node's next property.
      if (biggestNode.previous) biggestNode.previous.next = biggestNode.next;

      // Update the next node's previous property.
      if (biggestNode.next) biggestNode.next.previous = biggestNode.previous;

      // Update the head node's previous property.
      this.head.previous = biggestNode;

      // Update the biggest node's next property.
      biggestNode.next = this.head;

      // Update the head node to point to the biggest node.
      this.head = biggestNode;
    }

    // Return the linked list.
    return this;
  }


  printLinkedList(message: string, head: NodeObject | null) {
    let output = '' + message + ': ';
    while (head !== null) {
      console.log(head.data as number);
      output += head.data + ' -->';
      head = head.next;
    }
    return output;
  }

}

export default OrderedLinkedList;
