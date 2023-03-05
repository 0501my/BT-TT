//Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không"
function isIncreasingDigits(n) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);

    while (n > 0) {
        let currentDigit = n % 10;
        if (currentDigit >= lastDigit) {
            return false;
        }
        lastDigit = currentDigit;
        n = Math.floor(n / 10);
    }

    return true;
}


const n = 12345;
const result = isIncreasingDigits(n);
console.log(result);
