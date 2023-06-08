import NodeObject from "./NodeObject";
import OrderedLinkedList from "./OrderedLinkedList";


// class NodeObject {
//   data: any;
//   previous: NodeObject | null;
//   next: NodeObject | null;
//   position: number;

//   constructor(data: any, position: number) {
//       this.data = data;
//       this.previous = null;
//       this.next = null;
//       this.position = position;
//     }
//   }

// class PopOrderedListClass extends OrderedLinkedList {
//     head: NodeObject | null;
//     tail: NodeObject | null;


//     constructor() {
//         super();
//         this.head = null;
//         this.tail = null;
//     }

//     push(data: any) {
//         const newNode = new NodeObject(data);

//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             // Find the node that should come after the new node.
//             newNode.previous = this.head;
//             newNode.next = null;
//             this.head = newNode;
//             this.tail = newNode.previous
//             this.placeHead();
//         }
//     }

//     pop() {
//         if (this.head === null) {
//             return false;
//         } else {
//             // The head of the linked list is the only node in the linked list.
//             this.head = null;
//             this.tail = null;
//         }

//         return true;
//     }

// }

// export default PopOrderedListClass;



class PopOrderedListClass extends OrderedLinkedList {
    head: NodeObject | null;

    constructor() {
        super();
        this.head = null;
    }

    push(data: any) {
        const newNode = new NodeObject(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            // Insert the new node after the head of the linked list.
            newNode.previous = this.head;
            newNode.next = this.head.next;
            this.head.next = newNode;
            this.placeHead();
        }
    }

    pop() {
        if (this.head === null) {
            return false;
        } else {
            // The head of the linked list is the only node in the linked list.
            const removedNode = this.head;
            this.head = removedNode.next;
            removedNode.next = null;
            return true;
        }
    }



}

export default PopOrderedListClass;
