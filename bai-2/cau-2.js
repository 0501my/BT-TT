//Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25
function findLargestOddFactor(n) {
    for (let i = Math.floor(n / 2); i >= 1; i--) {
        if (n % i === 0 && i % 2 !== 0) {
            return i;
        }
    }
    return 1;
}
const n = 100;
const result = findLargestOddFactor(n);
console.log(result);
