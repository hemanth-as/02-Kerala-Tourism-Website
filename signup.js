
let email2=document.getElementById("exampleDropdownFormEmail2");
let pwd2=document.getElementById("exampleDropdownFormPassword2");

function validate(){
    if(email2.value==""||pwd2.value==""){
        alert("Fields cannot be empty");
    }
    else{
        return true;
    }
}
function check(){
    var input = document.getElementById("exampleDropdownFormPassword2").value;

    if(input.length >= 8){
        document.getElementById("check0").style.color = "green";
    }
    else{
        document.getElementById("check0").style.color = "red";
    }

    if(input.search(/[0-9]/)==-1){
        document.getElementById("check1").style.color = "red";
    }
    else{
        document.getElementById("check1").style.color = "green";
    }

    if(input.search(/[A-Z]/)==-1){
        document.getElementById("check2").style.color = "red";
    }
    else{
        document.getElementById("check2").style.color = "green";
    }

    if(input.search(/[a-z]/)==-1){
        document.getElementById("check3").style.color = "red";
    }
    else{
        document.getElementById("check3").style.color = "green";
    }
    if(input.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\=\[\{\]\}\|\\\,\<\.\>\/\?\-]/)==-1){
        document.getElementById("check4").style.color = "green";
    }
    else{
        document.getElementById("check4").style.color = "red";
    }
    if(input.search(/\s/)==-1){
        document.getElementById("check5").style.color = "green";
    }
    else{
        document.getElementById("check5").style.color = "red";
    }

}
// function checknum(){
//     var input=document.getElementById("phnum").value;

//     if(input.value!=(/[0-9]/)){
//         alert("Enter a Valid Number");
//     }
//     else{
//         return true;
//     }
// }