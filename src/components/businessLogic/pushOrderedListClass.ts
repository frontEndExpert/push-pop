import NodeObject from "./NodeObject";
import OrderedLinkedList from "./OrderedLinkedList";
import { callback } from "./callback";

class pushOrderedListClass extends OrderedLinkedList {
    //head: NodeObject | null = null;

    // newNode = new NodeObject({
    //     data: null,
    //     next: null,
    //     previous: null,
    // });

    push(data: any) {
        this.newNode.data = data;

        if (this.head === null) {
            this.head = this.newNode;
            console.log("this.head.data1", this.head.data);
        } else {
            this.newNode.next = this.head;
            this.head.previous = this.newNode;

            console.log("this.newNode", data);
            console.log("this.newNode.data", this.newNode.data);
            console.log("this.head.data2", this.head.data);
        }
        let temp = this.printLinkedList("pushEnd", this.head);
        console.log(temp);
    }

    pop() {
        if (this.head === null) {
            return;
        }

        // Call the placeHead() method to find the biggest node and place it in the head of the linked list.
        let orderedWithBiggest = this.placeHead().head;
        console.log("orderedWithBiggest", orderedWithBiggest);
        this.printLinkedList("pop bigest", orderedWithBiggest);
        this.printLinkedList("head pop", this.head);
        // Remove the biggest node from the linked list.
        // if (orderedWithBiggest === console.log(orderedWithBiggest);.head) {
        //     this.head.next = null;
        //     this.head = this.head.previous;
        // } else {
        //     orderedWithBiggest.previous.next = orderedWithBiggest.next;
        //     orderedWithBiggest.next.previous = orderedWithBiggest.previous;
        // }

        // Return the data of the removed node.

        return orderedWithBiggest?.data || '';
    }


}

export default pushOrderedListClass;
