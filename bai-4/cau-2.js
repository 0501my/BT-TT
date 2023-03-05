// Bạn được cho 2 số nguyên N và S. Nhiệm vụ của bạn là đếm số bộ 3 X, Y, Z (0<= X,Y,Z <=  N thỏa mãn X + Y + Z =S
function countXYZ(N, S) {
    let count = 0;

    for (let X = 0; X <= N; X++) {
        for (let Y = 0; Y <= N; Y++) {
            for (let Z = 0; Z <= N; Z++) {
                if (X + Y + Z === S) {
                    count++;
                }
            }
        }
    }

    return count;
}
const N = 5;
const S = 8;
const result = countXYZ(N, S);
console.log(result);
// function countXYZ(N, S) {
//     let count = 0;
//     for (let x = 0; x <= N; x++) {
//         for (let y = 0; y <= N; y++) {
//             const z = S - x - y;
//             if (z >= 0 && z <= N) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const N = 5;
// const S = 6;
// const result = countXYZ(N, S);
// console.log(result);
