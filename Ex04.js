// Viết một hàm nhận vào một mảng số và trả về một mảng chỉ chứa các số nguyên tố
// Gợi ý: sử dụng hàm filter() của mảng
//
// bước 1: khai báo một mảng rỗng
let mang = [];

// bước 2: cho người dùng nhập vào các phần tử của mảng bao nhiêu cũng được
let n = +prompt("Nhập vào số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
  let x = +prompt("mời bạn nhập vào phần tử thứ: " + i);
  if (x < 0 && isNaN(x)) {
    alert("Nhập số nguyên dương và không chứa kí tự");
    i--;
    continue;
  }
  mang.push(x);
}

// bước 3: sử dụng hàm filter() để lọc ra các số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function locSoNguyenTo(arr) {
  return arr.filter(function (item) {
    return isPrime(item);
  });
}

locSoNguyenTo(mang);

mang = locSoNguyenTo(mang);

// bước 4: kiểm tra kết quả

if (mang.length === 0) {
  alert("mảng không chứa phần tử nào ");
} else {
  alert(mang);
}
