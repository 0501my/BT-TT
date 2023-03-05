// Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng.
// Lập chương trình để tìm ra tất cả các phương án có thể
let total = 200000;
let count = 0;

for (let i = 0; i <= total / 1000; i++) {
    for (let j = 0; j <= total / 2000; j++) {
        let k = (total - i * 1000 - j * 2000) / 5000;
        if (k >= 0 && k % 1 === 0) {
            console.log("Phương án", ++count + ":", i, "tờ 1000 đồng,", j, "tờ 2000 đồng,", k, "tờ 5000 đồng.");
        }
    }
}
