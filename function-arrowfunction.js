for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

//     A: 0 1 2 and 0 1 2
//     B: 0 1 2 and 3 3 3
//     C: 3 3 3 and 0 1 2
// Đáp án: C

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();

//     A: 20 and 62.83185307179586
//     B: 20 and NaN
//     C: 20 and 63
//     D: NaN and 63
// Đáp án: B

perimeter: () // đây là 1 arrow function thường dùng: map, filter, forEach,...

// function sử dụng this (function bthuong) thường dùng blind để trỏ đến đúng đối tượng
const person = {
    name:'hovaten',
    getName: function(){
        return this.name
     }
}
person.getName() // 'hovaten'

const getNamePerson = person.getName()
getNamePerson() // sai -> not function -> this trỏ tới object window 

const getNamePerson = person.getName.bind(person)
getNamePerson() // đúng
