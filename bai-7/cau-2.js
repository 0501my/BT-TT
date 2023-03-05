// Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1 chiều các số thực:
function lietKeViTriAm(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(lietKeViTriAm([-1,-2,3,4,5,-5,6,-7]))
