// 임의의 날짜에서 100일되는 날을 계산해보세요.
var day = new Date(2023, 0, 1);
day.setDate(day.getDate()+100);


console.log(day.getMonth()+1);
console.log(day.getDate());


console.log(day);