let email=document.getElementById("exampleDropdownFormEmail1");
let pwd=document.getElementById("exampleDropdownFormPassword1");

function validate(){
    if(email.value==""||pwd.value==""){
        alert("Fields cannot be empty");
    }
    else{
        return true;
        // alert("Validation is proper");
    }
}
