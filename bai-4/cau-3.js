// Đọc một giá trị số nguyên tương ứng với độ tuổi của một người (tính theo ngày) và in ra hàng năm, tháng và ngày, tiếp theo là thông báo tương ứng "nam", "thang", "ngay".
//
// Lưu ý: Đây chỉ là một bài tập nhằm mục đích kiểm tra khả năng tính toán toán học. Nên để tạo thuận lợi cho tính toán, chúng ta giả thuyết rằng mỗi năm có đúng 365 ngày và mỗi tháng có đúng 30 ngày.
function tinhTuoi() {
    let day = 3650

    // tính số năm
    let year = Math.floor(day / 365);
    day = day % 365;

    // tính số tháng
    let month = Math.floor(day / 30);
    day = day % 30;

    // in kết quả
    console.log("tuổi người này là " + year + " năm " + month + " tháng " + day + " ngày");
}

tinhTuoi();

