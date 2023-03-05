// Đếm số lần xuất hiện của các phần tử trong mảng
function countOccurrences(arr) {
    const occurrences = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        occurrences[element] = occurrences[element] ? occurrences[element] + 1 : 1;
    }
    return occurrences;
}
const arr = [1, 2, 3, 1, 2, 3, 4, 5, 4, 6];
console.log(countOccurrences(arr))
