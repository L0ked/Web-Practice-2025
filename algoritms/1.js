// возведение в степень через цикл — просто умножаем x на себя n раз
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(4, 3)); // 64
console.log(pow(5, 4)); // 625