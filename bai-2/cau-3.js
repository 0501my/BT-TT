// Nhập một số nguyên dương n. Viết chương trình kiểm tra số n có phải là số hoàn hảo hay không?
function isPerfectNumber(n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
const n = 6;
const result = isPerfectNumber(n);
console.log(result);
