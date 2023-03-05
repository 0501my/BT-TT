//Hãy liệt kê các giá trị có số lần xuất hiện nhiều nhất trong mảng
function countMaxOccurrence(arr) {
    let obj = {};
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
        if (obj[arr[i]] > maxCount) {
            maxCount = obj[arr[i]];
        }
    }
    let result = [];
    for (let key in obj) {
        if (obj[key] === maxCount) {
            result.push(key);
        }
    }
    return result;
}
let arr = [1, 2, 3, 3, 4, 4, 4, 5];

console.log(countMaxOccurrence(arr))
