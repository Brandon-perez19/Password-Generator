// Assignment code here
var passwordText = document.querySelector("#password");
var specialArray = [ `!`,`#`,`$`,`%`,`&`,`'`,`(`,`)`,`*`,`+`,`-`,`.`,`/`,`:`,`;`,`<`,`=`,`>`,`?`,`@`,`[`,`]`,`^`,`_`,`{`,`|`,`}`,`~`,`"`]
var numberArray = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`]
var lowerArray = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]
var upperArray = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]
var passwordArray = []
function generatePassword(){
  var userInput2 = parseInt( prompt('How long would you like your password to be? (Minimum of 8 character, Maximum of 126)') );
    if (isNaN (userInput2)) {
      alert("Please enter a numeric value!");
      return
    }
  
  if (userInput2 < 8 || userInput2 > 126) {
    alert("Please input a value between 8 - 126");
    return
  }

  var specialCharcters = confirm("Would you like to include special characters?");
  var numericValues = confirm("Would you like to include numeric values?");
  var lowercaseValues = confirm("Would you like to include lowercase values?");
  var uppercaseValues = confirm("would you like to include uppercase values?")
  
  if (!specialCharcters && !numericValues && !lowercaseValues && !uppercaseValues){
    alert("Please pick at least one condition!");
    return
  }

    if (specialCharcters){
      for(var i = 0; i < specialArray.length; i++){
        const element = specialArray[i]
        passwordArray[passwordArray.length] = element
        }
      }

    if (numericValues){
      for(var i = 0; i < numberArray.length; i++){
        const element = numberArray[i]
        passwordArray[passwordArray.length] = element 
        }
    }

    if (lowercaseValues){
      for(var i = 0; i < lowerArray.length; i++){
        const element = lowerArray[i]
        passwordArray[passwordArray.length] = element
        }
    }

    if (uppercaseValues){
      for(var i = 0; i < upperArray.length; i++){
        const element = upperArray[i]
        passwordArray[passwordArray.length] = element
        }
    }

    var passPhrase = "";

    for (let i = 0; i < userInput2; i++) {
      var finalPassword = passwordArray[Math.floor(Math.random()* passwordArray.length)]
      passPhrase += finalPassword
    }

    return passPhrase
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);