// https://www.laptrinhonline.club/problem/2019banhdanem
function countBanhDaNem(N) {
    if (N % 9 === 0) {
        return N / 9;
    } else {
        return Math.ceil(N / 9);
    }
}
const N = 17;
const result = countBanhDaNem(N);
console.log(result); // Kết quả: 2
