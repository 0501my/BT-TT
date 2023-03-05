//Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực:
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,2,3,5,4,6,8]))
