// алгоритм Евклида — делим с остатком пока не получим ноль
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(60, 18)); // 6
console.log(gcd(200, 25)); // 25