function checkForm() {
    return verifyStrings();
}


function verifyStrings() {

    // ***** PASSWORD VERIFICATION *****

    let pwd = document.getElementById("password").value;
    let pwd1 = document.getElementById("password2").value;


    //minimum password length validation  
    if (pwd.length == 6) {
        // check if it starts with an alphabet
        if (!((pwd.charCodeAt(0) >= 65 && pwd.charCodeAt(0) <= 90) || (pwd.charCodeAt(0) >= 97 && pwd.charCodeAt(0) <= 122))) {
            document.getElementById("sidepanel").innerHTML += "<p>Password must start with an alphabet</p>";
            return false;
        }

        // check if password contains atleast one digit
        if (pwd.search(/\d/) == -1) {
            document.getElementById("sidepanel").innerHTML += "<p>Password does not contain any digit</p>";
            return false;
        }

        // check if password contains atleast one upper case character
        if (pwd.search(/[A-Z]/) == -1) {
            document.getElementById("sidepanel").innerHTML += "<p>Password does not contain any upper case character</p>";
            return false;
        }

        // check if passwords match
        if (pwd != pwd1) {
            document.getElementById("sidepanel").innerHTML += "<p>Passwords are not matching</p>";
            return false;
        }
    } else {
        document.getElementById("sidepanel").innerHTML += "<p>Password length must be 6 characters</p>";
        return false;
    }



    // ***** USERNAME VERIFICATION *****

    let user = document.getElementById("username").value;
    // check if username is atleast 6 characters long
    if (user.length >= 6) {

        // check if username starts with an alphabet
        if (!((user.charCodeAt(0) >= 65 && user.charCodeAt(0) <= 90) || (user.charCodeAt(0) >= 97 && user.charCodeAt(0) <= 122))) {
            document.getElementById("sidepanel").innerHTML += "<p>Username must start with an alphabet</p>";
            return false;
        }
    }else{
        document.getElementById("sidepanel").innerHTML += "<p>Username must be atleast 6 characters long</p>";
        return false;
    }
}

// clear sidepanel on clicking the reset button
function clearSidepanel(){
    document.getElementById('sidepanel').innerHTML = "<p>Errors (if any):</p>";
}