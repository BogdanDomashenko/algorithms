class NodeChild<T> {
    private _data: T;
    private _next?: NodeChild<T>;

    constructor(data: T, next?: NodeChild<T>) {
        this._data = data;
        this._next = next;
    }

    setNext(node: NodeChild<T>) {
        this._next = node;
    }

    getData() {
        return this._data;
    }

    getNext() {
        return this._next;
    }
}

class LinkedList<T> {
    private _size: number = 0;
    private _head?: NodeChild<T>;
    private _last?: NodeChild<T>;

    constructor(arr?: T[]) {
        if(arr) {
            arr.forEach(item => this.push(item))
        }
    }

    getHead() {
        return this._head?.getData();
    }

    getLast() {
        return this._last?.getData();
    }

    getSize() {
        return this._size;
    }

    push(data: T) {
        const node = new NodeChild<T>(data);
        if (!this._head) this._head = node;
        if (this._last) this._last.setNext(node);
        this._last = node;
        this._size += 1;
    }

    pushFront(data: T) {
        const node = new NodeChild<T>(data, this._head);
        this._head = node;
        this._size += 1;
    }

    popFront() {
        if (!this._head) return;
        const head = this._head;
        this._head = this._head.getNext();
        this._size -= 1;
        return head;
    }

    forEach(callback: (item: T, index: number) => void) {
        let index = 0;
        const iter = (node?: NodeChild<T> | null) => {
            if (!node) return;
            callback(node.getData(), index);
            index++;
            iter(node.getNext());
        }
        iter(this._head);
    }
}

const list = new LinkedList<number>([1,2,3,4]);

list.forEach((item, index) => console.log(item, index));