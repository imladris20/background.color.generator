var bodyBackground = document.getElementById("background");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var description = document.getElementById("colorDescription");

function changeBackGround(){
    //  ��.style�ӥh���css
    bodyBackground.style.background = "linear-gradient(to right,"
    + color1.value
    + ","
    + color2.value
    + ")";

    //  ���h3���������e
    description.textContent = bodyBackground.style.background + ";";
}


// �]�winput��event���N�s��input

color1.addEventListener("input", changeBackGround);

color2.addEventListener("input", changeBackGround);


