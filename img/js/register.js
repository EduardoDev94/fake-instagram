console.log("start JS")
const nameInput = document.querySelector('.form-auth #name')
const usernameInput = document.querySelector('.form-auth #username')
const passwordInput = document.querySelector('.form-auth #password')
const verifyPasswordInput = document.querySelector('.form-auth #verify-password')
const emailInput = document.querySelector('.form-auth #email')


nameInput.addEventListener('keypress', blockNumbers)
usernameInput.addEventListener ('keypress', blockCaracteres)
verifyPasswordInput.addEventListener ('keypress', verificarPassword)

function blockNumbers(event) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (numbers.includes(event.key)) {
        event.preventDefault()
    }
}
function blockCaracteres(event) {
    const caractere = ['@', '!', '#', '$', '%']
    if (caractere.includes(event.key)) {
        event.preventDefault()
    }
}
function verificarPassword (event){
    if(passwordInput.value != verifyPasswordInput.value){
        passwordInput.style.border = '2px solid red';
        verifyPasswordInput.style.border = '2px solid red'
    }
    else {
        passwordInput.style.border = '2px solid green';
        verifyPasswordInput.style.border = '2px solid green'
    }
}
