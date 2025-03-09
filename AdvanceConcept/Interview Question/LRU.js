class LRUCashe {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.length = 0;
        this.map = new Map() // <key> : <node:address>
        // pointers in the hash map
        this.head = null;
        this.tail = null;
    }

    #removeNode(node) {
        if(!node) return;   
        // console
        console.log(`removing the node ${node.key}: ${node.value}`);
        if (node.prev) {
            console.log(`setting previous the node ${node.key}: ${node.value}`);
            node.prev = node.next
        }
        if (node.next) {
            console.log(`setting Next the node ${node.key}: ${node.value}`);
            node.next.prev = node.prev
        }
        if (node === this.head) {
            console.log(`Updating the head ${node.key}: ${node.value}`);
            this.head = node.next;
        }
        if (node === this.tail){ 
            console.log(`updating the tail ${node.key}: ${node.value}`);
            this.tail = node.prev;
        }
        this.map.delete(node.key    )
    }

    get(key) {
        if(!this.map.has(key)) return null;
        const node = this.map.get(key);
        this.#removeNode(node)
        node.next = this.head
        node.prev = null;
        if(this.head !== null){
            this.head.pre = node;
        }
        return node.value;
    }

    // put method in the LRU
    put(key, value) {

        const node = {
            next:this.head,
            prev:null,
            key,
            value
        }

        // check capacity 
        if (this.length === this.capacity) {
            // chack the key is exist if not so remove the last node 
            if (!this.map.has(key)) {
                this.#removeNode(this.tail);
                this.length --;
            }
        }

        // if key aready is there in cashed
        if (this.map.has(key)) {
            this.#removeNode(this.map.get(key))
        }

        // map /link list 
        this.map.set(key, node);

        // pointing in the head 
        this.head = node;

        // setting the head preview
        if(this.head !== null){
            this.head.prev = node;
        }

        // checking the tail 
        if (this.tail === null) this.tail = this.head

        // increasing the length of list 
        this.length += 1;

    }

    // for degugginr
    debug() {
        let current = this.head;
        const arr = [];
        while (current) {
            arr.push(current)
            current = current.next;
        }
        return arr.reduce((arr, curr) => arr.concat(`-->[{${curr.key} : ${curr.value}}]`), "")
        // return arr;
    }
}
const cache = new LRUCashe(2)
cache.put(1, 10)
cache.put(2, 20)
cache.put(3, 30)
cache.put(4, 40)
console.log(cache.debug())