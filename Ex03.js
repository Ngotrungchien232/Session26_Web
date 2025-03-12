//viết chương trình sử dụng hàm cho một danh sách email,viết hàm lọc ra các email hợp lệ( chỉ có chứa ký tự "@" và không có khoảng trắng )

let arr = [];

let n = +prompt("Nhập vào số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
  let x = prompt("Nhập vào phần tử thứ " + i);
  arr.push(x);
}

function checkEmail(arr) {
  return arr.filter(function (item) {
    return item.includes("@") && !item.includes(" ");
  });
}

arr = checkEmail(arr);
if (arr.length === 0) {
  alert("mảng không chứa phần tử nào ");
  //nếu trong chuỗi không có chứa @ và khoảng trắng in ra email nhập vào không hợp lệ
} else {
  alert(arr);
}
