// Hãy cho biết các phần tử trong mảng có lập thành cấp số cộng hay không? Nếu có chỉ ra
function isArithmeticProgression(arr) {
    if (arr.length < 2) {
        return false;
    }
    const diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== diff) {
            return false;
        }
    }
    return true;
}
const arr1 = [1, 3, 5, 7, 9];

console.log(isArithmeticProgression(arr1));

