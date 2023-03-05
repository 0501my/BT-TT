// Hãy tính tổng các chữ số của số nguyên dương n
function sumDigits(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}
const n = 12345;
const result = sumDigits(n);
console.log(result);
