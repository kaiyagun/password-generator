var length = +chars.value;
    var yesLower = checkLower.checked;
    var yesUpper= checkUpper.checked;
    var yesNumber = checkNumber.checked;
    var yesSpecialChar = checkSpecialChar.checked; 
    password.innerText = generatePassword(yesLower, yesUpper, yesNumber, yesSpecialChar, length);
    password = '';
    function generatePassword() {
      password += (getLower() + getUpper() + getNumber() + getSpecialChar());
    }
    
generate.addEventListener('click', () => {
    generatePassword();
});
  
  var charset1 = "abcdefghijklmnopqrstuvwxyz";
  var charset2 = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var charset3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charset4 = "1234567890";
  
  // generator functions
  function getLower() {
    return charset1.charAt(Math.floor(Math.random() * 26));
  }
  
  function getSpecialChar() {
    return charset2.charAt(Math.floor(Math.random() * 29));
  }
  
  function getUpper() {
    return charset3.charAt(Math.floor(Math.random() * 26));
  }
  
  function getNumber() {
    return charset4.charAt(Math.floor(Math.random() * 10));
  }
  