var book1 = {
    title : "어린왕자",
    price : 15000
}

var book2 = {
    title : "자바의 정석",
    price : 25000
}

var bookList = [book1, book2];


// 가장 비싼 책은 무엇인가요??
// 모든 책의 평균 가격은 얼마인가요??

var sumPrice = 0;
for(var i = 0; i<bookList.length;i++){
    var price = bookList[i]["price"];
    sumPrice += price;
    
}

console.log(sumPrice/bookList.length)