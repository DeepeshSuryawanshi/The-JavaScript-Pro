/*
interface node{
    next:value | null;
    prev:value | null;
    value : value
}
*/

class LRUCashe{
    constructor(capacity){
        this.capacity = Number(capacity);
        this.map = new Map() // <key> : <node:user>:address
        // pointers in the hash map
        this.head = null;
        this.tail = null;
    }
    
    #removeNode(node){
        if (node.prev) {
            node.prev == node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if(node === this.head) this.head = node.next;
        if(node === this.tail) this.tail = node.prev;
    }

    get(key){

    }

    put (key, value){
         // if key aready is there in cashed
        if(this.map.has(key)){
            this.#removeNode(this.map.get(key))
        }
        const node = {
            next : this.head,
            prev:null,
            value
        }
        this.map.set(key,node);
        this.head = node;
    }
}