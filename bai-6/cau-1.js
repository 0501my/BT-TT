// Viết chương trình nhập 1 số nguyên có 2 chữ số.  Hãy in ra cách đọc của số nguyên này
let number = [93];
let units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

if (number < 10 || number > 99) {
    console.log("Số bạn vừa nhập không hợp lệ");
} else if (number % 10 === 0) {
    console.log(tens[number / 10]);
} else {
    console.log(tens[Math.floor(number / 10)] + " " + units[number % 10]);
}
