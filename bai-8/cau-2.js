// Viết hàm tìm giá trị dương đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về -1:
function findFirstPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i];
        }
    }
    return -1;
}

console.log(findFirstPositive([-1,1,2,3,5,4,6,8]))
