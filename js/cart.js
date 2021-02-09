var coursesCard     = document.querySelectorAll('.course__item')
var addToCartBtn    = document.querySelectorAll('.add-to-cart')
var cart            = document.querySelector('#cart tbody')
var clearCartBtn    = document.querySelector('#empty-cart')
var notif           = document.querySelector('.notifs')
let promotion       = false


// Si le localStorage est vide quand on arrive sur la page, on y crée un tableau vide
if (localStorage.getItem('cartStockage') == null) {
    localStorage.setItem('cartStockage', '[]')
}

// A chaque initialisation de la page, on récupère le contenu du tableau dans une variable objet cartStockage
var cartStockage = JSON.parse(localStorage.getItem('cartStockage'))

// On réajoute dans le panier tous les objets deja présents dans cartStockage
for (let i = 0; i < cartStockage.length; i++) {
    addToCart(cartStockage[i])
    updateCourseStock(cartStockage[i])
}

// Ici, on attends un évenement clic sur les boutons d'ajout au panier, on récupère l'ID du bouton puis on ajoute l'objet dans le panier et dans cartStockage
for (let i = 0; i < addToCartBtn.length; i++) {
    const btn = addToCartBtn[i];
    btn.addEventListener('click', () => {
        let cardId = btn.getAttribute('data-id')

        if (COURSES[cardId].stock > 0) {
            addToCart(cardId)
    
            // Save cart data in localstorage
            cartStockage.push(cardId)
            localStorage.setItem('cartStockage', JSON.stringify(cartStockage))
    
            // Display notification
            displayNotif(cardId)
            // Update the stock of the course
            updateCourseStock(cardId)
        }
        
    })
}

// On met a jour le tableau présent dans le localStorage après ajout ou suppression d'objets dans le panier
localStorage.setItem('cartStockage', JSON.stringify(cartStockage))

// Put an eventListener on the clear cart btn
clearCartBtn.addEventListener('click', clearCart)

function addToCart(id) {
    let course = COURSES[id]

    cart.insertAdjacentHTML('afterbegin', `
        <tr class="cart-course">
            <td><img src="img/courses/${course.img}" alt="${course.title} logo"></td>
            <td class="cart-course-title">${course.title}</td>
            <td class="cart-course-price">${course.initial_price}€</td>
            <td class="cart-course-qte">1</td>
            <td><img src="img/cross.png" class="remove-course" data-id="${id}" style="width:25px;height:auto;cursor:pointer"></td>
        </tr>
    `)

    // Check if promotion is activable
    console.log(getCartAmount());
    if (getCartAmount() >= 100 && promotion == false) {
        startPromotion()
        promotion = true
    }
}
function updateCourseStock(id) {
    let newStock = COURSES[id].stock -= 1
    let stockSpan = coursesCard[id - 1].querySelector('.stock')
    stockSpan.innerHTML = newStock
} 

function clearCart() {
    var cartCoursesList = document.querySelectorAll('.cart-course')

    for (let i = 0; i < cartCoursesList.length; i++) {
        const course = cartCoursesList[i];
        cart.removeChild(course)
    }
    // Update the localstorage
    localStorage.setItem('cartStockage', '[]')
    
}

function displayNotif(cardId){
    // Apparition d'une notif quand tu ajoute un cours au panier
    notif.insertAdjacentHTML('afterbegin', `
    <div class="alert">
        <span class="alertaddcart"></span>
        ${COURSES[cardId].title} à été ajouté au panier !
    </div>
`)
    $('.alert').addClass("hide")
}
function getCartAmount() {
    let cartCourses = document.querySelectorAll('.cart-course')
    let total = 0

    for (let i = 0; i < cartCourses.length; i++) {
        // Get the price of the course
        const courseQte = parseInt(cartCourses[i].querySelector('.cart-course-qte').innerHTML)
        const courseTitle = cartCourses[i].querySelector('.cart-course-title').innerHTML
        const coursePrice = getCoursePrice(courseTitle)

        // Calcul the total amount
        const courseAmount = courseQte * coursePrice
        total += courseAmount
    }
    return total
}

function getCoursePrice(courseTitle) {
    let i = 1
    while(true) {
        if (COURSES[i].title == courseTitle) {
            break
        } else {
            i++
        }
    }
    return COURSES[i].price
}