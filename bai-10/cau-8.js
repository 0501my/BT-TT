// Ta định nghĩa 1 mảng có tính chất lẻ, khi tổng của 2 phần tử liên tiếp luôn là lẻ. Kiểm tra mảng có tính chất lẻ hay không
function isOddArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + arr[i + 1]) % 2 === 0) {
            return false;
        }
    }
    return true;
}
const arr = [1,2,3,4,5]
console.log(isOddArray(arr))
