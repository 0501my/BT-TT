// Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
function isSymmetric(arr) {
    const n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return 0;
        }
    }

    return 1;
}

// Ví dụ sử dụng hàm isSymmetric để kiểm tra xem một mảng có đối xứng hay không
const arr = [1, 2, 3, 2, 1];
console.log(isSymmetric(arr)); // 1
