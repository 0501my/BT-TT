// Nhập vào mảng a, loại bỏ các phần tử trùng trong mảng: VD: 1,1,1,2,3 => 1,2,3
function removeDuplicates(arr) {
    const newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const arr = [2,2, 2, 2, 3];
const newArr = removeDuplicates(arr);

console.log(newArr);
