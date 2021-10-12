const setRate = (element) => {
    let average =0;
    for (const item of element) {
        average = average + item.rate/element.length;
    }
    return average;
}

function Food(name, type, price, time) {

    this.name = name
    this.type = type
    this.price = price
    this.time = time
    this.comments = []
    this.rate = setRate(this.comments)
    this.isReady = false
}

const pizza = new Food('pizza', 'fast', 120000, 30)

function order(oldUser) {
    if (oldUser === true) return ({
        price: 0.8 * pizza.price,
        rate: pizza.rate
    }); else return ({
        price: pizza.price,
        rate: pizza.rate
    })
}

function Comment(author, rate, text, oldUser) {
    this.author = author
    this.date = new Date()
    this.rate = rate
    this.text = text
    this.oldUser = oldUser
}

const createComment1 = new Comment('majid', 1, 'good bood', true);
const createComment2 = new Comment('ali', 4, 'good nabood', true);

pizza.comments.push(createComment1)
pizza.comments.push(createComment2)
pizza['rate']=setRate(pizza.comments)

console.log(pizza)
console.log(order(true))
