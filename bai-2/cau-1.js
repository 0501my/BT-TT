// Liệt kê tất cả các “ước số” của số nguyên dương n 
function findFactors(n) {
    let factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}
const n = 24;
const result = findFactors(n);
console.log(result);
