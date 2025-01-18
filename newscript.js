let slider = document.querySelector("#length")

let lenghtOutput = document.querySelector(".lenghtOutput")

lenghtOutput.textContent = slider.value


slider.addEventListener('input', () => {
    lenghtOutput.textContent = slider.value
});

let toggleSwitchLower = document.getElementById("toggleSwitchLower")
let toggleSwitchUpper = document.getElementById("toggleSwitchUpper")
let toggleSwitchNumber = document.getElementById("toggleSwitchNumber")
let toggleSwitchSymbols = document.getElementById("toggleSwitchSymbols")
let outputContent = document.querySelector(".outputContent")

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

var  charOfPassword = ''
toggleSwitchLower.addEventListener('change', () => {
    if (toggleSwitchLower.checked) {
        charOfPassword += lowerChars;
    }
});

toggleSwitchUpper.addEventListener('change', () => {
    if (toggleSwitchUpper.checked) {
        charOfPassword += upperChars;
    }
});

toggleSwitchNumber.addEventListener('change', () => {
    if (toggleSwitchNumber.checked) {
        charOfPassword += allNumbers;
    }
});

toggleSwitchSymbols.addEventListener('change', () => {
    if (toggleSwitchSymbols.checked) {
        charOfPassword += allSymbols;
    }
});


function Password() {

    let finalPassword = ''

    let i = 1;
    while(i<=slider.value){
        finalPassword+= charOfPassword.charAt(Math.floor(Math.random() * charOfPassword.length));
        i++;
    }

    console.log(finalPassword);

    console.log(charOfPassword);
    outputContent.innerHTML = finalPassword
}


const generatebutton = document.getElementById('generatebutton')


generatebutton.addEventListener("click",()=>{
    Password()
})

let copyIcon = document.getElementById("copyIcon")


copyIcon.addEventListener('click', ()=>{
    if(outputContent.innerHTML != "" || outputContent.innerHTML.length >=1){
        navigator.clipboard.writeText(outputContent.innerHTML);
        // alert("Password Copied!")
        
}
});