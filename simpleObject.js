var test = {
    name : "홍길동",
    age : 18,
    addr : "서울"
};
test.name = "이순신"
test.aaaa = "test message"


console.log(test.name);
console.log(test["addr"]);
console.log(test.aaaa);

delete test.aaaa; //삭제
