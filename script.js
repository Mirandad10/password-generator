// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercharacters = ['abcdefghijklmnopqrstuvwxyz']
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var numbers = ['0123456789']
var special = ['!@#$%&*']

var passwordLength;

var chosenCharacter = ''
var generateBtn = document.querySelector("#generate")


//characters and length

function chosenCharacters(){
 var  lengthPrompt = window.prompt("how many characters would you like your password to contain?");
     passwordLength= parseInt(lengthPrompt)

     if(passwordLength<8 || passwordLength > 128){
      alert('password must be ...')
      return false
     }
     

  var uppercaseprompt = window.confirm("do you want uppercase characters?")

  if (uppercaseprompt){
    chosenCharacter += uppercase;
   
  }
  var lowercaseprompt = window.confirm("do you want lowercase characters?")

  if (lowercaseprompt){
    chosenCharacter += lowercharacters;}
  
    var numbersprompt = window.confirm ("do you want numbers?");
       if(numbersprompt){
       chosenCharacter += numbers;}

    var specialprompt = window.confirm("do you want to choose special characters?")
     if(specialprompt){
      chosenCharacter += special
     }
     
       
  return true
  }
function generatePassword(){
  password = '';
  while(password.length < passwordLength){
    password += chosenCharacter[Math.floor(Math.random()* chosenCharacter.length)]
   
  }
  return password
}

// Write password to the #password input
function writePassword() {
var isValid = chosenCharacters()
if(isValid){

  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  
  passwordText.value = password;}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




