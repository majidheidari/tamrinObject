const setRate = (element) => {
    let average = 0;
    for (const item of element) {
        average = average + item.rate / element.length;
    }
    return average;
}

function food(name, type, price, time) {
    return {
        name,
        type,
        price,
        time,
        comments: [],
        rate: 0,
        isReady: false
    }
}

const pizza = new food('pizza', 'fast', 120000, 30)

function order(oldUser) {
    if (oldUser === true) return ({
        price: 0.8 * pizza.price,
        rate: pizza.rate
    }); else return ({
        price: pizza.price,
        rate: pizza.rate
    })
}

function comment(author, rate, text, oldUser) {
    return {
        author,
        date: new Date(),
        rate,
        text,
        oldUser
    }
}

const createComment1 = new comment('majid', 1, 'good bood', true);
const createComment2 = new comment('ali', 4, 'good nabood', true);

pizza.comments.push(createComment1)
pizza.comments.push(createComment2)
pizza['rate'] = setRate(pizza.comments)

console.log(pizza)
console.log(order(true))
