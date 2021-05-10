+true;
!"ICT Hà Nội";
//     A: 1 and false
//     B: false and NaN
//     C: false and false
// Đáp án: A

// Toán tử + ở đây đã chuyển đổi một toán hạng thành một số. true là 1 và false là 0.
// Do trong Javascript thì chỉ có:
//     Kiểu Boolean có falsy value là false
//     Kiểu Number có falsy value là 0 và NaN
//     Kiểu String có falsy value là ''
//     Kiểu null là có falsy value null
//     Kiểu undefined có falsy value là undefined
// Vậy chúng ta có tổng cộng là 6 falsy value. Các giá trị còn lại đều là truthy value.
// Chính vì thế chuỗi 'ICT Hà Nội' là một truthy value. Do đó phủ định của truthy value. Dĩ nhiên kết quả sẽ trả về giá trị là false.
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
//     A: mouse.bird.size không hợp lệ
//     B: mouse[bird.size] không hợp lệ
//     C: mouse[bird["size"]] không hợp lệ
//     D: Tất cả đều hợp lệ
// Đáp án: A
// Trong JavaScript, tất cả các object key là chuỗi (trừ khi đó là Symbol). Mặc dù chúng ta có thể không gõ chúng dưới dạng chuỗi, chúng luôn được chuyển đổi thành chuỗi.
// JavaScript thông dịch (hoặc unboxes) các statement. Khi chúng ta sử dụng ký hiệu ngoặc vuông, nó sẽ thấy dấu ngoặc vuông mở đầu tiên [ và tiếp tục cho đến khi tìm thấy dấu đóng ]. Sau đó, nó sẽ đánh giá statement.

class Chameleon {
  static colorChange(newColor) { // được tạo chỉ để dùng trong class này và không truyền cho bất cứ hàm con nào
    this.newColor = newColor; // được đặt trước hàm constructor
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
