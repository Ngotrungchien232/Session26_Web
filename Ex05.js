// Viết chương trình nhập vào mảng số nguyên có 10 phần tử.
// Thực hiện tìm ra số lớn và vị trí của số đó ra màn hình bằng các hàm có sẵn trong array methods

let arr = [];
let n = 10;

for (let i = 0; i < n; i++) {
  let x;
  while (true) {
    x = +prompt("Nhập vào phần tử thứ " + (i + 1));
    if (!isNaN(x)) {
      break;
    } else {
      alert("Dữ liệu không hợp lệ. Vui lòng nhập số nguyên.");
    }
  }
  arr.push(x);
}

if (arr.length > 0) {
  let max = Math.max(...arr);
  let index = arr.indexOf(max);

  alert("Số lớn nhất là: " + max);
  alert("Vị trí của số lớn nhất là: " + index);
} else {
  alert("không có dữ liệu");
}
