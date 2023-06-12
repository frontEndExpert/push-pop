import NodeObject from "./NodeObject";
import OrderedLinkedList from "./OrderedLinkedList";
import { callback } from "./callback";

class PushOrderedListClass extends OrderedLinkedList {

    push(data: any) {
        if (!data || data.length === 0 || data == null) return;

        const newNode: NodeObject = new NodeObject({
            data: data,
            next: this.head,
            previous: null,
        });

        if (this.head === null) {
            newNode.data = newNode.data.data
            newNode.next = null;
            newNode.previous = null;
            this.head = newNode;
        } else {
            newNode.data = newNode.data.data
            newNode.next = this.head;
            newNode.previous = null;
            this.head.previous = newNode;
            newNode.next.previous = newNode;
        }
        this.head = newNode;


        let printThis = this.printLinkedList(this.head) as string;
        return printThis;
    }

    pop() {
        this.head = this.head;
        if (this.head === null) {
            return;
        }

        let output = this.head.data;

        // if only head remove head from list
        if (this.head.next === null) {
            this.head = null;
            let printThis = this.printLinkedList(this.head);
            return output;
        }
        let specialNode = {
            data: this.head.data,
            next: null as NodeObject | null,
            previous: null as NodeObject | null,
        }

        let current = this.head as NodeObject | null;
        // finding the special one
        while (current !== null && specialNode !== null) {
            if (callback(current.data, specialNode.data)) {
                specialNode.data = current.data;
            }
            current = current.next;
        }
        output = specialNode?.data;

        //if special is in the head
        if (JSON.stringify(output) === JSON.stringify(this.head.data)) {
            if (this.head.next !== null) this.head.next.previous = null;
            this.head = this.head.next;
            // optional printing of list - let printThis = this.printLinkedList(this.head); 
            // console.log(printThis)
            return output;
        }

        current = this.head as NodeObject | null;
        while (current !== null && specialNode !== null) {
            if (JSON.stringify(current.data) === JSON.stringify(output)) {
                specialNode.data = current.data;
                specialNode.previous = current.previous;
                specialNode.next = current.next;
                break;
            }
            current = current.next;
        }

        //remove the specialNode
        if (specialNode.previous) specialNode.previous.next = specialNode.next;
        if (specialNode.next) specialNode.next.previous = specialNode.previous;

        // removing the special node from the list
        current = this.head;

        // let printThis = this.printLinkedList(this.head);
        // console.log(printThis)
        return JSON.stringify(output);
    }

}

export default PushOrderedListClass;
