// Hàm nhập ngày từ người dùng
function getDates() {
  let dates = [];
  while (true) {
    let input = prompt("Nhập ngày (YYYY-MM-DD) hoặc để trống để dừng:");
    if (input === "" || input === null) break;
    dates.push(input);
  }
  return dates;
}

// Hàm chuyển đổi ngày
function changeDates(dates) {
  if (dates.length === 0) {
    return "Mảng không có phần tử nào";
  }

  let result = dates.map((date) => {
    let d = new Date(date);
    if (isNaN(d)) {
      return "Dữ liệu không hợp lệ";
    }
    let day = d.getDate();
    let month = d.getMonth() + 1; // Cộng 1 vì tháng bắt đầu từ 0
    let year = d.getFullYear();
    return day + "/" + month + "/" + year;
  });

  return result;
}

// Chạy chương trình
let userDates = getDates();
let output = changeDates(userDates);

alert("ngày nhập: " + userDates + "\nKết quả: " + output);
