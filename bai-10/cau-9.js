// Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một.
// Hãy viết hàm liệt kê tất cả các cặp giá trị (a, b) trong mảng thỏa điều kiện a <= b
function listPairs(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                console.log(`(${arr[i]}, ${arr[j]})`);
            }
        }
    }
}

let arr = [1.2, 3.4, 5.6, 7.8, 9.1];
listPairs(arr);
