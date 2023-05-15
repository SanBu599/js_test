// 여러분이 태어나서 지금까지 몇일을 살았는지 계산해보세요(getTime()을 이용하세요.)
var birth = new Date();
birth.setFullYear(1993);
birth.setMonth(8);
birth.setDate(21);

var today = new Date();
console.log(birth.getTime());
console.log(today.getTime());

var calcTime = today.getTime()-birth.getTime();

console.log(calcTime/1000/60/60/24);