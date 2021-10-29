const generate = document.querySelector("#generate")
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const num = ["1","2","3","4","5","6","7","8","9","0"]
const special = ["!","@","#","$","%","^","&","*","(",")"]
let wip = []
let finalPassword = [];

function writePassword() {
    let password = makePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
};

function makePassword() {
    let length = parseInt(prompt("How many characters? (8-128)"));
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid number dingus");
        return "invalid"
    }

    if(confirm("Include uppercase letters?")) {
        wip = wip.concat(upperCase);
    }

    if(confirm("Lowercase?")) {
        wip = wip.concat(lowerCase);
    }

    if(confirm("Numbers?")) {
        wip = wip.concat(num);
    };

    if(confirm("Special characters?")) {
        wip = wip.concat(special);
    }

    for (let i = 0; i < length; i++) {
        let randomPassword = wip[Math.floor(Math.random()*wip.length)];
        finalPassword.push(randomPassword);
    }

    return finalPassword.join("").toString();
}


generate.addEventListener("click", writePassword);

