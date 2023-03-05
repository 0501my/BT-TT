// Viết chương trình nhập giá trị x sau tính giá trị của hàm số
// f(x) = 2x^2 + 5x + 9 khi x >= 5, f(x) = -2x^2 + 4x – 9 khi x < 5
let x = 4;
let result = 0;

if (x >= 5) {
    result = 2 * x ** 2 + 5 * x + 9;
} else {
    result = -2 * x ** 2 + 4 * x - 9;
}

console.log("Giá trị của hàm số là:", result);
