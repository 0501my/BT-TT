// Hãy đếm giá trị trong mảng thỏa: lớn hơn tất cả các giá trị đứng đằng trước nó
function countValues(arr) {
    let count = 0;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            count++;
            max = arr[i];
        }
    }
    return count;
}


const arr = [1, 3, 5, 4, 7, 6, 9];
console.log(countValues(arr)); // 4
