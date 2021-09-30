
// time of first timespan
var x = new Date('01/01/2001 8:30:00').getTime();
var y = new Date('01/01/2001 9:30:00').getTime();

// time of second timespan
var a = new Date('01/01/2001 5:00:00').getTime();
var b = new Date('01/01/2001 9:20:00').getTime();
console.log(x,y,a,b, "gia tri ")
if (Math.min(x, y) <= Math.max(a, b) && Math.max(x, y) >= Math.min(a, b)) {
    console.log("trung thoi gian")
} else {
    console.log("k trung")
}
// lấy giá start oldevent <= giá tị end của newevent
// giá trị end  oldevent  >= giá trị start của newevent
