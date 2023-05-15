function init(){
    var tr = document.getElementById("b04");
        console.log(tr);

    var th = document.getElementsByTagName("th");
        console.log(th);

    var div = document.getElementsByClassName("content");
        console.log(div);
}

function changeColor(trElement){
    var tr = document.getElementsByName("tr");
    // var trElement = document.getElementById("b01");
    //배경색 초기화
    for(var i = 0; i<tr.length;i++){
        tr[i].style.backgroundColor= "";
    }
    trElement.style.backgroundColor ="yellow";
}



// for(var i = 0; i<tr.length;i++){
//     if(i%2==0){
//         tr[i].style.backgroundColor= "red";
//     }
// }