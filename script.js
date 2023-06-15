var bodyBackground = document.getElementById("background");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var description = document.getElementById("colorDescription");

function changeBackGround(){
    //  用.style來去更改css
    bodyBackground.style.background = "linear-gradient(to right,"
    + color1.value
    + ","
    + color2.value
    + ")";

    //  更改h3元素的內容
    description.textContent = bodyBackground.style.background + ";";
}


// 設定input的event其實就叫做input

color1.addEventListener("input", changeBackGround);

color2.addEventListener("input", changeBackGround);


