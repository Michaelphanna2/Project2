var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()";

var length = document.getElementById("length");
var numberBox = document.getElementById("number");
var specialBox = document.getElementById("special");
var submit = document.getElementById("submit");
var yourPW = document.getElementById("yourPW");

submit.addEventListener("click",function(){
    var characters = letters;
    (numberBox.checked) ? characters += numbers : '';
    (specialBox.checked) ? characters += special : '';
    yourPw.value = password(length.value, characters);
});

function password(l,characters){
    var pwd = '';
for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
}
return pwd;
}