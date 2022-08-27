const password = document.getElementById("password");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("length",length.value);

})

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase="ABCDEFGHIJKLMONOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*_+|?-=/,.";

function getLowerCase(){
    return lowerCase[Math.floor(Math.random()*lowerCase.length)];
}
function getUpperCase(){
    return upperCase[Math.floor(Math.random()*upperCase.length)];
}
function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(e){
    e.preventDefault();
    let passWord="";
    let len=length.value;

  while(len>0){
    if(lower.checked){
     len--;
     passWord+=getLowerCase();
     if(len<=0)break;

    }
    if(upper.checked){
        passWord+=getUpperCase();
        len--;
        if(len<=0)break;

    }     
    if(number.checked){
         passWord+=getNumber();
         len--;
         if(len<=0)break;
    }
    if(symbol.checked){
        passWord+=getSymbols();
        len--;
        if(len<=0) break;
    }    
  } 
   for(let i=0;i<passWord.length;i++){
    password.value += "x";

   }
   password.innerText=passWord;
}
generate.addEventListener("click",generatePassword);

copy.addEventListener("click",()=>{
    const textarea = document.createElement("textarea");
    textarea.value = password.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copied to clipboard");
})



