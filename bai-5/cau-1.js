// Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.
function uocChung(a, b) {
    if (b === 0) {
        return a;
    } else {
        return uocChung(b, a % b);
    }
}
console.log(uocChung(15, 18));

