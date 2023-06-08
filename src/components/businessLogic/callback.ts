import NodeObject from "./NodeObject";


// export function callback(node: NodeObject, position: number) {
//     if( node.previous === null ) {
//     node.position = position;
//     } else {
//         if(node.data > node.previous.data){
//             node.position = node.previous.position + 1;
//         } else {
//             node.previous.position = node.previous.position + 1;
//             node.position = node.previous.position;
//             }
//         }
//     }
// }

export function callback(currentNode: NodeObject, secondNode: NodeObject) {

    return (currentNode.data < secondNode.data);
}
