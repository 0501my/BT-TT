// Viết chương trình cho 1 số nguyên có 3 chữ số.  Hãy in ra cách đọc của số nguyên này

let number = [110];
let units = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let hundreds = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

if (number < 100 || number > 999) {
    console.log("Số không hợp lệ!");
} else {
    let firstDigit = Math.floor(number / 100);
    let secondDigit = Math.floor((number % 100) / 10);
    let thirdDigit = number % 10;

    let readNumber = "";

    readNumber += hundreds[firstDigit];

    if (secondDigit === 0) {
        if (thirdDigit !== 0) {
            readNumber += " linh " + units[thirdDigit];
        }
    } else if (secondDigit === 1) {
        readNumber += " mười " + units[ thirdDigit];
    } else {
        readNumber += " " + units[secondDigit] + " mươi";
        if (thirdDigit !== 0) {
            readNumber += " " + units[thirdDigit];
        }
    }

    console.log("Cách đọc của số", number, "là:", readNumber);
}
