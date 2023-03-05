//Nhập vào chuỗi, đếm số từ (Không dùng split)
function countWords(str) {
    let count = 0;
    let isWord = false;


    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n') {
            if (!isWord) {
                count++;
                isWord = true;
            }
        } else {

            isWord = false;
        }
    }

    return count;
}
const str = 'Tôi đang học tại CodeGym';
const wordCount = countWords(str);
console.log(wordCount); // Kết quả: 6
