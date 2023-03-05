// Cho 2 số nguyên dương a và b. Hãy tìm bội chung nhỏ nhất của 2 số này
function boiChung(a, b) {
    let uocChung = a;
    while (a % uocChung !== 0 || b % uocChung !== 0) {
        uocChung --;
    }
    let boiChung = (a * b) / uocChung;
    return boiChung;
}


console.log(boiChung(4, 5));
