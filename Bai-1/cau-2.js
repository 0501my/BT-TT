// Tính S = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
function sumSeries(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        let numerator = i * 2 + 1;
        let denominator = i * 2 + 2;

        sum += numerator / denominator;
    }

    return sum;
}
const n = 10;
const result = sumSeries(n);
console.log(result);
