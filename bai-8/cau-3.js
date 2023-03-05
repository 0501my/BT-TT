// Cho mảng 1 chiều các số thực. Hãy viết hàm tìm một vị trí trong mảng thỏa 2 điều kiện:
// có 2 giá trị lân cận và giá trị tại đó bằng tích 2 giá trị lân cận.
// Nếu mảng không tồn tại giá trị như vậy thì trả về giá trị -1:
function findPosition(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === arr[i - 1] * arr[i + 1]) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 4, 8, 16, 32, 64];
console.log(findPosition(arr)); // expected output: 5
