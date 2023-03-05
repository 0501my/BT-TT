// Cho 1 mảng arr và 1 số x, tìm phần tử trong mảng xa x nhất:
function timPhanTuXaNhat(arr, x) {
    let maxDistance = -Infinity;
    let result = null;
    for (let i = 0; i < arr.length; i++) {
        let distance = Math.abs(arr[i] - x);
        if (distance > maxDistance) {
            maxDistance = distance;
            result = arr[i];
        }
    }
    return result;
}



let arr = [3, 8, 1, 4, 6];
let x = 5;
console.log(timPhanTuXaNhat(arr, x));


