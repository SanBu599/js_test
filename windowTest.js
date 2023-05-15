function clickTest(){
    alert("alert 창을 발생시킵니다.");
}

function confirmTest(){
    var result = confirm("정말 삭제할까요?");
    console.log(result);
}

function promptTest(){
    var data = prompt("데이터를 입력하세요.");
    console.log(data);
}

function openTest(){
    open("subWindowTest.html", "","width=500, height=500");
}

function closeTest(){
    close();
}

function scrollTest(){
    scrollTo(500,50);
}