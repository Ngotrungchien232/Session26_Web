// viết chường trình sử dụng hàm cho người dùng nhập vào mảng gồm 10 phần tử là số nguyên
// in ra các phần tử lớn hơn hoặc bằng 10

// bước 1: tiến hành khai báo hàm in ra các phần tử lớn hơn hoặc bằng 10
function demPhanTu(arr) {
  // in ra các phần tử lớn hơn hoặc bằng 10
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      alert(arr[i]);
    } else {
      alert("Không có phần tử nào lớn hơn hoặc bằng 10");
    }
  }
}

//bước 2: cho người dùng nhập vào số phần tử của mảng mong muốn
let n = +prompt("Nhập vào số phần tử của mảng: ");

// bước 3: khai báo mảng arr
let arr = [];

// bước 4: cho người dùng nhập vào các phần tử của mảng
for (let i = 0; i < n; i++) {
  let x = +prompt("Nhập vào phần tử thứ " + i);
  arr.push(x);
}

// gọi hàm in ra các phần tử lớn hơn hoặc bằng 10
demPhanTu(arr);
