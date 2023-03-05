//Nhập 2 số nguyên x và y. Viết chương trình tính tổng bình phương các số từ x đến y.
function sumOfSquares(x, y) {
    let sum = 0;

    for (let i = x; i <= y; i++) {
        sum += i * i;
    }

    return sum;
}
const x = 2;
const y = 5;
const result = sumOfSquares(x, y);
console.log(result);
