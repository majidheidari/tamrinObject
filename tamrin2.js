const isEqual = (obj1, obj2) => {
    let value = true;
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]){
            value = false;
        }
    }
    return value
}
const obj1 = {
    authr: 'majid',
    rate: 1,
    text: 'good bod',
    oldUser: true
};
const obj2 = {
    author: 'majid',
    rate: 1,
    text: 'good bod',
    oldUser: true
};
const obj3 = obj2;


const isSame = (obj1,obj2) => {
    if (obj1===obj2) return true
    return false
}
console.log(isEqual(obj1, obj2))
console.log(isSame(obj3, obj2))