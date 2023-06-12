import NodeObject from "./NodeObject";
import { callback } from "./callback";

class OrderedLinkedList {
  head: NodeObject | null;

  constructor(node?: NodeObject | null) {
    this.head = (node === undefined) ? null : node;
  }


  printLinkedList(head: NodeObject | null) {
    let output = '';
    if (head?.data === undefined || head.data === null) return;
    while (head !== null) {
      output += head.data + ' --> ';
      head = head.next;
    }
    return output;
  }

}

export default OrderedLinkedList;
