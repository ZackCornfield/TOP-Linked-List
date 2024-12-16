import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.listHead = null; // first node
    }

    prepend(value) {
        let tmp = null;
        if(this.listHead != null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp; 
    }

    append(value) {
        if (this.listHead === null) {
            this.listHead = new Node(value);
            return; 
        }

        let current = this.listHead;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = new Node(value); 
    }

    size() {
        let count = 0;
        let current = this.listHead;
        while (current !== null) {
            count++; 
            current = current.nextNode; 
        }
        return count; 
    }

    head() {
        return this.listHead;   
    }

    tail() {
        let current = this.listHead;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current; 
    }

    at(index) {
        let count = 0;
        let current = this.listHead;
        for (let i = 0; i < index; i++) {
            if (current.nextNode === null) return null;
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        let current = this.listHead;
        let previous = null;
        while (current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        return current; 
    }

    contains(value) {
        let current = this.listHead;
        while (current !== null) {  
            if (current.value === value) return true;
            current = current.nextNode; 
        }

        return false; 
    }

    find(value) {
        let current = this.listHead;
        let index = 0;
        while (current !== null) {  
            if (current.value === value) return index;
            current = current.nextNode; 
            index++;
        }

        return null; 
    }

    toString() {
        let tmp = this.listlistHead;
        let stringList = "";
        while (tmp != null) {
          stringList += `(${tmp.value}) -> `;
          tmp = tmp.nextNode;
        }
        return (stringList += "null");
    }

    insertAt(value, index) {
        if (this.listHead == null) this.prepend(value);
        else {
          let cur = this.listHead;
          let prev = null;
          for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.nextNode;
            if (cur == null) break; // if index is bigger than end of list, add node at end of list
          }
          const tmp = new Node(value);
          prev.nextNode = tmp;
          tmp.nextNode = cur;
        }
    }

    removeAt(index) {
        if (this.listHead == null) return "List is already empty";
    
        let cur = this.listHead;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = cur;
          cur = cur.nextNode;
          if (cur == null) return "There is no item for this index";
        }
        prev.nextNode = cur.nextNode;
    }
}