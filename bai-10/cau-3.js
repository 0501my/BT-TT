// Hãy viết hàm tìm chữ số xuất hiện ít nhất trong mảng
function findLeastFrequentDigit(arr) {
    let digitCount = {};
    let leastFrequentDigit = null;
    let leastFrequentCount = arr.length;
    for (let i = 0; i < arr.length; i++) {
        let digits = arr[i].toString().split('');
        for (let j = 0; j < digits.length; j++) {
            let digit = parseInt(digits[j]);
            if (!digitCount[digit]) {
                digitCount[digit] = 1;
            } else {
                digitCount[digit]++;
            }
        }
    }
    for (let digit in digitCount) {
        if (digitCount[digit] < leastFrequentCount) {
            leastFrequentDigit = digit;
            leastFrequentCount = digitCount[digit];
        }
    }

    return leastFrequentDigit;
}


let arr = [1,23,234,156,56];
console.log(findLeastFrequentDigit(arr));
