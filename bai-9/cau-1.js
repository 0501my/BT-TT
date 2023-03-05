// Kiểm tra mảng có tăng dần hay không:
function isIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }
    return true;
}


console.log(isIncreasing([1,2,1,10]))
