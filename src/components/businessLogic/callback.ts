import NodeObject from "./NodeObject";

// for pop by biggest Integer value
export function callback(currentData: any, secondData: any) {
    // example for compare by integer size
    // console.log('callback ', currentData, '>', secondData, parseInt(currentData) > parseInt(secondData))
    return (parseInt(currentData) > parseInt(secondData));
}

// for OBJECT LIKE {id: 1, name:"Aylon" ....} pop by ID

// export function callback(currentData: any, secondData: any) {
//     console.log(currentData, secondData);
//     console.log('callback ', currentData, '>', secondData, parseInt(currentData) > parseInt(secondData))
//     return (parseInt(currentData.id) > parseInt(secondData.id));
// }

