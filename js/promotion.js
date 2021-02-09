let promotionContainers = document.querySelectorAll('.promotion')
let discountContainer = document.querySelectorAll('.price')

function startPromotion() {
    console.log('promotion activated');

    // Get a random course, display the promotion message and the discount price on it
    let id = Math.floor(Math.random() * promotionContainers.length)
    promotionContainers[id].style.display = 'block'
    discountContainer[id].style.opacity = '1'


    // Start countdown
    setCountDown(id)
}

function setCountDown(id) {
    let countDownContainer = document.querySelectorAll('.promotion span')[id]
    let finishTime = new Date().getTime() + 1 * 60000

    let countDown = setInterval(() => {
        let actualTime = new Date().getTime()
        let distance = finishTime - actualTime

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        countDownContainer.innerHTML = `${minutes}:${seconds}`

        if (distance < 0) {
            promotionContainers[id].style.display = 'none'
            promotion = false
            clearInterval(countDown)
        }

    }, 1000)
}

