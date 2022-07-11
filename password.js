let password = "formulas1iscool!"
// let passwordMin = "1234567890"
let passwordMax = "12345678901234567892"

// this checks for the length of the password being at least 10 digits, that it contains a letter, a number, **(additional check)** a special charecter, AND **(additional check)** a maximum length.
 if (password.length >= 10 && password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{3,}$/) && password.length < passwordMax.length){
    console.log("Password Accepted")
} else {
    console.log("Please enter valid password")
}

