//Viết một hàm nhận vào một mảng chuỗi và trả về một mảng chỉ chứa những chuỗi có độ dài lớn hơn 5 ký tự
// Gợi ý: sử dụng hàm filter() của mảng

// bước 1: khai báo một mảng rỗng
let mang = [];

// bước 2: cho người dùng nhập vào các phần tử của mảng bao nhiêu cũng được
let n = +prompt("Nhập vào số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
  let x = prompt("Nhập vào phần tử thứ " + i);
  mang.push(x);
}

// bước 3: sử dụng hàm filter() để lọc ra các chuỗi có độ dài lớn hơn 5 ký tự
function locChuoi(arr) {
  return arr.filter(function (item) {
    return item.length > 5;
  });
}
// bước 4: gọi hàm locChuoi() và gán kết quả vào biến mang
mang = locChuoi(mang);

// bước 6: kiểm tra kết quả
if (mang.length === 0) {
  alert("Không có chuỗi nào có độ dài lớn hơn 5 ký tự");
} else {
  alert(mang);
}
