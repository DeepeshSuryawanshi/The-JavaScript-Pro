class LRUCache {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.length = 0;
        this.map = new Map(); // <key> : <node:address>
        // pointers in the hash map
        this.head = null;
        this.tail = null;
    }

    #removeNode(node) {
        if (!node) return;

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        this.map.delete(node.key);
    }

    #addToHead(node) {
        node.next = this.head;
        node.prev = null;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
    }

    get(key) {
        if (!this.map.has(key)) return null;

        const node = this.map.get(key);
        this.#removeNode(node);
        this.#addToHead(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.#removeNode(node);
            this.#addToHead(node);
        } else {
            if (this.length === this.capacity) {
                this.#removeNode(this.tail);
                this.length--;
            }

            const node = {
                key,
                value,
                next: null,
                prev: null,
            };

            this.map.set(key, node);
            this.#addToHead(node);
            this.length++;
        }
    }

    // for debugging
    debug() {
        let current = this.head;
        const arr = [];
        while (current) {
            arr.push(`{${current.key}: ${current.value}}`);
            current = current.next;
        }
        return arr.join(' --> ');
    }
}

const cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
cache.put(3, 30);
cache.put(4, 40);
console.log(cache.debug()); // Expected output: --> {3: 30} --> {2: 20}