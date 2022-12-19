function loginform(e)
{
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var regex = /^([a-zA-Z0-9\._]+)@([A-Za-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(regex.test(email)){
        if(password.length>=6){
            alert("logged in ");
            console.log("email: ",email);
            console.log(password);
        }
        else{
            document.getElementById("password-err-mesg").innerHTML = "Please enter valid password";
        }
    }
    else{
        if(password.length>=6){
            document.getElementById("email-err-mesg").innerHTML = "Please enter valid email";
        }
        else{
            document.getElementById("email-err-mesg").innerHTML = "Please enter valid email";
            document.getElementById("password-err-mesg").innerHTML = "Please enter valid password";
        }
    }

}

