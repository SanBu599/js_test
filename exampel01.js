//자신의 주민번호를 변수에 저장한다.
//ex)000000-000000

//앞의 6자리를 잘라서 숫자로 변환하고,
//뒤의 7자리도 잘라서 숫자로 변환 후,

// 그 합이 얼마인지 결과를 출력하라.


var sum = 0;

var ssn = "123456-1234567";
var dataList = ssn.split("-");


for(i=0;i<dataList.length;i++){
    var num = parseInt(dataList[i]);
    sum += num
}
console.log(sum);
