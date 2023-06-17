
let wood1 = document.querySelector('#construction1')
let wood2 = document.querySelector('#construction2')
let wood3 = document.querySelector('#construction3')
let head = document.querySelector('#hangman-head')
let body = document.querySelector('#hangman-body')
let arm1 = document.querySelector('#hangman-left-arm')
let arm2 = document.querySelector('#hangman-right-arm')
let leg1 = document.querySelector('#hangman-left-leg')
let leg2 = document.querySelector('#hangman-right-leg')
let gameStatus = document.querySelector('.game-status')
let gamePassword = document.querySelector('.password')
let passwordTab = ['dog', 'cat', 'duck', 'bannana', 'apple', 'cherry']
let chosePassword = Math.floor(Math.random()*passwordTab.length)
let Password = passwordTab[chosePassword]
let correctLetters = []
let wrongLetters = []
let pressedKeys = []


for(i=0; i < Password.length; i++){
   correctLetters.push("_")
}

function category(){
   let category = document.querySelector('.category')
   if(Password === 'dog' || Password === 'cat' || Password === 'duck'){
      category.innerHTML = 'Category Animals'
   }
   else{
      category.innerHTML = 'Category Fruits'
   }
   
}
category()

let startTab1 = String(correctLetters)
let startTab2 = startTab1.replaceAll(',', ' ')
gamePassword.innerHTML = startTab2



function check(e){
   if (pressedKeys.includes(e.key)) {
      return; 
    }
  
    pressedKeys.push(e.key);
    
if(Password.includes(e.key)){
    let keydown = e.key
    const indexes = [];
for (let index = 0; index < correctLetters.length; index++) {
  if (Password[index] === keydown) {
    indexes.push(index);
    correctLetters[index] = keydown.toUpperCase() 
  }
}
let correctString = String(correctLetters)
gamePassword.innerHTML = correctString.replaceAll(',', ' ')
let uppercasePassword = Password.toUpperCase()
let isEqual = true
for (let i = 0; i < correctLetters.length; i++) {
   if (uppercasePassword[i] !== correctLetters[i]) {
     isEqual = false;
     break;
   }
 }
 if (isEqual) {
   setTimeout(Win, 1);
 }

}
else{
   wrongLetters.push(e.key)
    
     if(wrongLetters.length === 1){
       wood1.style.opacity = 1
       wood2.style.opacity = 1    
     }
     else if(wrongLetters.length === 2){
        wood3.style.opacity = 1
        head.style.opacity = 1
     }
     else if(wrongLetters.length === 3){
        body.style.opacity = 1       
     }
     else if(wrongLetters.length === 4){
        arm1.style.opacity = 1          
     }
     else if(wrongLetters.length === 5){         
        arm2.style.opacity = 1       
     }
     else if(wrongLetters.length === 6){
        leg1.style.opacity = 1            
     }
     else if(wrongLetters.length === 7){
        leg2.style.opacity = 1                
     }
     else if(wrongLetters.length === 8){
        leg2.style.opacity = 1   
        setTimeout(Lose, 1)              
     }
     
}
}

function Lose(){
   gameStatus.innerHTML = 'U Lost'
   removeEventListener('keydown', check)
   
}
function Win(){
   gameStatus.innerHTML = 'U Won'
   removeEventListener('keydown', check)
}



addEventListener('keydown', check)