class NodeObject {
    data: any;
    previous: NodeObject | null;
    next: NodeObject | null;

    constructor(data: any, next?: NodeObject | null, previous?: NodeObject | null) {
        this.data = (data === undefined ? 0 : data);
        this.previous = (previous === undefined ? null : previous);
        this.next = (next === undefined ? null : next);
    }
}

export default NodeObject;
