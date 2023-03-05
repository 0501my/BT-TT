//Nhập số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1)
function sumOfSeries(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i * (i + 1);
    }

    return sum;
}
const n = 5;
const result = sumOfSeries(n);
console.log(result);
