let promotionContainers = document.querySelectorAll('.promotion')
let priceContainer = document.querySelectorAll('.price')
let discountContainer = document.querySelectorAll('.discount')
let saveInitialPrice

function startPromotion() {
    // Get a random course, display the promotion message and the discount price on it
    let id = Math.floor(Math.random() * promotionContainers.length)
    promotionContainers[id].style.display = 'block'
    priceContainer[id].style.opacity = '1'
    priceContainer[id].innerHTML = COURSES[id+1].initial_price + '€'
    discountContainer[id].innerHTML = COURSES[id+1].price + '€'

    // Modify the price of the course
    saveInitialPrice = COURSES[id+1].initial_price
    COURSES[id+1].initial_price = COURSES[id+1].price

    // Notification saying that the promoion is starting
    displayNotifPromoStart()

    // Start countdown
    setCountDown(id)
}

function setCountDown(id) {
    let countDownContainer = document.querySelectorAll('.promotion span')[id]
    let finishTime = new Date().getTime() + 0.5 * 60000
    
    let countDown = setInterval(() => {
        let actualTime = new Date().getTime()
        let distance = finishTime - actualTime

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if(seconds == 11){
            displayNotifPromoEnd()
        }

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        countDownContainer.innerHTML = `${minutes}:${seconds}`

        if (distance < 0) {
            promotionContainers[id].style.display = 'none'
            priceContainer[id].style.opacity = '0'
            discountContainer[id].innerHTML = saveInitialPrice + '€'

            promotion = false
            // Reset the correct price of the course
            COURSES[id+1].initial_price = saveInitialPrice
            // Stop the countDown
            clearInterval(countDown)
            

        }

    }, 1000)
}

function displayNotifPromoStart(){
    // Display a message when the promotion start
    notif.insertAdjacentHTML('afterbegin', `
    <div class="alert" style="background-color: #d19526;">
        <span class="alertaddcart"></span>
        Une promotion de 5 minutes vient d'apparaître
    </div>
`)
    $('.alert').addClass("hide")
}

function displayNotifPromoEnd(){
    // Display a message when the promotion end
    notif.insertAdjacentHTML('afterbegin', `
    <div class="alert2" style="background-color: #d19526;">
        <span class="alertaddcart"></span>
        Votre promotion de 5 minutes va bientôt disparaître
    </div>
`)
    $('.alert2').addClass("hide2")
}