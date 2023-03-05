//Cho mảng 1 chiều các số thực, hãy tìm giá trị x sao cho đoạn [-x, x] chứa tất cả các giá trị trong mảng:
function timGiaTriX(arr) {
    return Math.max(...arr.map(Math.abs));
}



let arr = [-3, 5, -4, 2, -3];
console.log(timGiaTriX(arr));

