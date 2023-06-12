import NodeObject from "./NodeObject";
import OrderedLinkedList from "./OrderedLinkedList";
import { callback } from "./callback";

class PopOrderedListClass extends OrderedLinkedList {

    push(data: any) {
        if (!data || data.length === 0 || data == null) return;

        const newNode = new NodeObject({
            data: data,
            next: null,
            previous: null
        });
        if (this.head === null) {
            newNode.data = data;
            newNode.previous = null;
            newNode.next = null;
            this.head = newNode;
        } else {
            // Insert the new node after the head of the linked list.

            let placedAlready = false;
            let currentNode = this.head as NodeObject | null;
            while (currentNode !== null) {

                if (currentNode.data === data || callback(data, currentNode.data)) {
                    //place in front of the head
                    newNode.previous = currentNode.previous;
                    newNode.next = currentNode;
                    newNode.data = data;
                    if (currentNode === this.head) this.head = newNode;
                    if (currentNode.previous) currentNode.previous.next = newNode;
                    currentNode.previous = newNode;
                    currentNode = newNode;
                    //
                    placedAlready = true;
                    break;
                } else {
                    placedAlready = false;
                    if (currentNode.next === null) {
                        // place at the end
                        newNode.previous = currentNode;
                        newNode.next = null;
                        newNode.data = data;
                        currentNode.next = newNode;
                        break;
                    }
                }
                currentNode = currentNode.next;
            }
        }
        // optional printing - let printThis = this.printLinkedList(this.head);
        // console.log(printThis)
    }

    pop() {
        if (this.head === null) {
            return false;
        } else if (this.head.next === null) {
            // The head of the linked list is the only node in the linked list.
            const output = this.head.data;
            this.head.previous = null;
            this.head = null;
            let printThis = this.printLinkedList(this.head);
            //console.log(printThis)
            return output;
        } else {
            // The head of the linked list is the only node in the linked list.
            const output = this.head.data;
            this.head.next.previous = null;
            this.head = this.head.next;
            // let printThis = this.printLinkedList(this.head);
            // console.log(printThis)
            return output;
        }
    }



}

export default PopOrderedListClass;
