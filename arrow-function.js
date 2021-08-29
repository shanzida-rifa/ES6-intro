function add(n1, n2) {
    return n1 + n2;
}

const add2 = function (n1, n2) {
    return n1 + n2;
}

const add3 = (n1, n2) => n1 + n2;
// document.getElementById('my-btn').onclick = function handleEvent(){

// }

console.log(add(15, 17));
console.log(add(23, 67), add2(15, 17));
console.log(add3(15, 17));