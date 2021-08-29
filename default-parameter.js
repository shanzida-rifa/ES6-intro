function add(n1, n2 = 0) {
    console.log(n2);

    // n2 = n2|| 0;
    // o1
    // if (n2 == undefined) {
    //     n2 = 0;
    // }
    const total = n1 + n2;
    return total;
}
const result = add(15, 10);
console.log(result);