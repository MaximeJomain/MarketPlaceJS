
function checkAll(){
    let phoneNumber = document.getElementById('phoneNumber')
    phoneNumber = phoneNumber.value
    // This function checks if the phonenumber is only with number
    let capCounter = 0
    let lowCounter = 0
    let nbCounter = 0
    for (let i = 0; i < phoneNumber.length; i++) {
        let letter = phoneNumber[i];
        if (isNumber(letter)) {
            nbCounter++
        } else if (letter === letter.toUpperCase()) {
            capCounter++
        } else if (letter === letter.toLowerCase()) {
            lowCounter++
        }
    }
    if (capCounter > 0 || lowCounter > 0) {
        alert('Un numéro de téléphone ne doit contenir que des chiffres')
        event.preventDefault()
        return false
    } else{
        checkblueCard()
    }
}

function isNumber(letter) {
    let numbers = "0123456789"
    let counter = 0

    for (let i = 0; i < numbers.length; i++) {
        if (letter == numbers[i]) {
            counter++
            return true
        }
    }
    if (counter == 0) {
        return false
    }
}

function checkblueCard(){
    let bluecard = document.getElementById('bluecard')
    bluecard = bluecard.value
    // This function checks if the blue card contains only number or not
    let capCounter = 0
    let lowCounter = 0
    let nbCounter = 0
    console.log(bluecard.length)
    for (let i = 0; i < bluecard.length; i++) {
        let letter = bluecard[i];
        if (isNumber(letter)) {
            nbCounter++
        } else if (letter === " "){

        } else if (letter === letter.toUpperCase()) {
            capCounter++
        } else if (letter === letter.toLowerCase()) {
            lowCounter++
        }
    }
    if (capCounter > 0 || lowCounter > 0) {
        alert('Un numéro de carte bleu ne s\'écrit pas avec des lettres')
        event.preventDefault()
        return false
    } else if (nbCounter != 16) {
        alert('Un numéro de carte bleue contient 16 chiffres')
        event.preventDefault()
        return false
    }else {
        checkblueCode()
    }
}

function checkblueCode(){
    let blueCode = document.getElementById('blueCode')
    blueCode = blueCode.value
    // This function checks if the blue code contains only number or not
    let capCounter = 0
    let lowCounter = 0
    let nbCounter = 0
    for (let i = 0; i < blueCode.length; i++) {
        let letter = blueCode[i];
        if (isNumber(letter)) {
            nbCounter++
        } else if (letter === letter.toUpperCase()) {
            capCounter++
        } else if (letter === letter.toLowerCase()) {
            lowCounter++
        }
    }
    if (capCounter > 0 || lowCounter > 0) {
        alert('Un code de carte bleu ne s\'écrit pas de avec des lettres')
        event.preventDefault()
        return false
    } else{
        event.preventDefault()
        window.location.href = 'index.html'
    }
}