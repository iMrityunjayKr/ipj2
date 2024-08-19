//Designing an array
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}
//insert at the beginning
LinkedList.prototype.insertAtBeginnig = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}
//insert at the end
LinkedList.prototype.inserAtEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let last = this.head
    while (last.next) {
        last = last.next
    }
    last.next = newNode
}

//insert at any given node
LinkedList.prototype.insertAtAnyNode = function (prevNode, data) {
    if (!prevNode) {
        console.log('The given prev node can not be null');
        return
    }
    const newNode = new Node(data, prevNode.data)
    prevNode.next = newNode;
}
//delete the first node

LinkedList.prototype.deleFirstNode = function () {
    if (!this.head) {
        console.log("Head is not present");

    }
    this.head = this.head.next
}
//delete last node (second last node)

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return //nothing to delete if list is empty
    }
    if (!this.head.next) {
        this.head = null //if there is only one node
        return
    }
    let secondLast = head;
    while (secondLast.next.next) {
        secondLast = secondLast.next
    }
    secondLast.next = null
}

//delete a node with given key

LinkedList.prototype.deleteByKey = function (key) {
    //list is empty
    if (!this.head) {
        console.log("list is empty");
        return;
    }
    // data is found at head
    if (this.head.data === key) {
        this.head = this.head.next
        return
    }
    //
    let current = this.head
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        } current = current.next
    }
    console.log("no node present with the given key");

}



// search operation
LinkedList.prototype.search = function (key){
    if(!this.head){
        console.log("Linked List is empty");
        return false       
    }
    let current = this.head
    while(current){
        if(current.data===key){
            return true
        }
        current = current.next
    }
    //key is not matched with the node data
    console.log("No node is found with the given key");    
    return false        
}

//traversal
LinkedList.prototype.printList = function (){
    let current = this.head;
    let listValue = []
    while(current){
        listValue.push(current.data)
        current = current.next //move to next node
    }
    if(listValue == []){
        console.log("list is empty");
        
    }else{
        console.log(listValue.join(","));
    }
    
    
}



// const linkedlist = new LinkedList;
// console.log(linkedlist);
