class Stack{
    constructor(){
        this.stack = []
    }
    push(data){
        // console.log(`Pushing : ${data}`);
        
        this.stack.push(data)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0;
    }
    size(){
        return this.stack.length
    }
    clear(){
        this.stack = []
    }
    contain(element){
        return this.stack.includes(element)
    }

    //reverse stack

    reverse(){
        this.stack.reverse()
    }

    //print stack

    printStack(){
        let str = ""
        for(let i= 0;i<this.stack.length;i++){
            str += this.stack[i] + "  "
            
        }
        return str;
    }
}

//usage Example

let myStack = new Stack();

myStack.push(4);
myStack.push(5);
myStack.push(9);
myStack.push(11);

console.log(myStack.printStack());

myStack.pop();
myStack.pop();

console.log(myStack.printStack());
