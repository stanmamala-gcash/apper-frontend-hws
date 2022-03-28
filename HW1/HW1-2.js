// Mamala, Stanley Jr., D.
// Front-end Development Engineering
// Homework 1-2: First In, Last Out

class Node {
    constructor() {
        this.data = ""
        this.link = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(item) {
        if (typeof item === 'string') {
            let temp = new Node()
            temp.data = item
            temp.link = this.top
            this.top = temp
        }
        else
            return console.log(`PUSH ERROR: Item ${item} is not a string.`)
    }

    pop() {
        if (this.top == null)
            return console.log(`POP ERROR: Stack is currently empty.`)
        else
            this.top = this.top.link
    }

    peek() {
        if (this.top == null)
            return console.log(`PEEK ERROR: Stack is currently empty.`)
        else
            return console.log(this.top.data)
    }

    check() {
        if (this.top == null)
            return console.log('[]')
        else {
            let string = "['"
            let temp = this.top
            while (temp != null) {
                string = string.concat(temp.data)
                string = string.concat("', '")
                temp = temp.link
            }
            string = string.slice(0, -3).concat(']')
            return console.log(string)
        }
    }
}

const my_stack = new Stack()
my_stack.push(true)
my_stack.push('Milk')
my_stack.push('Eggs')
my_stack.check()
my_stack.peek()
my_stack.pop()
my_stack.check()
my_stack.peek()
my_stack.pop()
my_stack.check()
my_stack.peek()
my_stack.pop()