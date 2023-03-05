// Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên:
function lietKeChan(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(lietKeChan([1,2,3,5,4,6,8]))
