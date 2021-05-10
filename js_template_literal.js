// Function
var cat = 'Con mèo';
function catWork() { return 'trèo cây cau!?'; }
console.log(`${cat} đang ${catWork()}`);
// Other funciton
var cat = {
    name: 'Móm',
    work: function() {
        return 'trèo cây cau!?';
    }
};
console.log(`${cat.name.toUpperCase()} đang ${cat.work()}`);


var multiLine = `Tôi dang tay ôm nước vào lòng,
    Sông mở nước ôm tôi vào dạ`;
var cat = `Con mèo`;
var embededVar = `${cat} đang bay?`; // Con mèo đang bay?
var price = 500;
var embededEx = `1 cái kem giá ${price}đ => ${cat} mua 2 cái kem phải trả ${2 * price}đ`;
