// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var confirmLength = "";
var confirmSymbol;
var confirmNumber;
var confirmUpper;
var confirmLower;

// Start When Button Is Clicked
function generatePassword() {

    // Ask Preferences
    var confirmSymbol = confirm("Would you like symbols?");
    var confirmNumber = confirm("Would you like numbers?");
    var confirmLower = true;
    var confirmUpper = confirm("Would you like uppercase?");
    var confirmLength = (prompt("How long would you like it?"));

    // Logs
    console.log(confirmUpper);
    console.log(confirmSymbol);
    console.log(confirmNumber);
    console.log(confirmLength);
    console.log(passwordCharacters);

    // Does Size conform
    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Try again, must be between 8-128 ");
        var confirmLength = (prompt("How long would you like it?"));
    }

    // Compile pool to pick from
    var passwordCharacters = []

    if (confirmSymbol) {
        passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumber) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLower) {
        passwordCharacters = passwordCharacters.concat(lower)
    }

    if (confirmUpper) {
        passwordCharacters = passwordCharacters.concat(upper)
    }

    // Empty string to be filled based on for loop selecting random characters from the array
    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }
    return randomPassword;
}

// Output
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}