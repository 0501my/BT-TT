// Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không"
function isSubset(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            return false;
        }
    }
    return true;
}

const arrA = [1, 2, 7];
const arrB = [3, 2, 1, 4, 5];
console.log(isSubset(arrA, arrB));
