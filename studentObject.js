// var student = function (name,kor,eng,his,math){
//     this.name =name;
//     this.kor = kor;
//     this.eng = eng;
//     this.his = his;
//     this.math = math;
// };

// student.prototype.getSum=function(){
//     return this.kor + this.eng + this.his + this.math;

// }



// student.prototype.getAvg= function(){
//     return this.getSum() / 4;
// }
// var studentList =[
// new student("김춘추",90,80,100,70),
// new student("이순신",90,90,90,90),
// new student("최영",80,70,100,100),
// ];


// for(var i=0;i<studentList.length;i++){
//     console.log(studentList[i].name);
//     console.log(studentList[i].getSum());
//     console.log(studentList[i].getAvg());
//     console.log("------------------")

// }



var student = function(name,kor,eng,his,math){
    this.name=name;
    this.kor=kor;
    this.eng=eng;
    this.his=his;
    this.math=math;
    this.getSum=function(){
        return this.kor + this.eng + this.his + this.math;
    };
    this.getAvg=function(){
        return this.getSum()/4;
    };
}




var studentList =[
new student("김춘추",90,80,100,70),
new student("이순신",90,90,90,90),
new student("최영",80,70,100,100),
];
for(var i=0;i<studentList.length;i++){
        console.log(studentList[i].name);
        console.log(studentList[i].getSum());
        console.log(studentList[i].getAvg());
        console.log("------------------")}
