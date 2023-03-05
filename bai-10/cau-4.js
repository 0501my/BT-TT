// Tìm số lớn thứ 2 trong mảng chỉ dùng 1 vòng lặp
function findSecondLargestNumber(arr) {
    let max = arr[0];
    let secondMax = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

let arr = [2, 5, 1, 6, 3, 10, 11];
console.log(findSecondLargestNumber(arr));
