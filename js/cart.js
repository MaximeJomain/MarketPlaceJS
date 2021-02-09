var addToCartBtn = document.querySelectorAll('.add-to-cart')
var cart = document.querySelector('#cart tbody')
var notif = document.querySelector('body')

// Si le localStorage est vide quand on arrive sur la page, on y crée un tableau vide
if (localStorage.getItem('cartStockage') == null) {
    localStorage.setItem('cartStockage', '[]')
}

// A chaque initialisation de la page, on récupère le contenu du tableau dans une variable objet cartStockage
var cartStockage = JSON.parse(localStorage.getItem('cartStockage'))

// On réajoute dans le panier tous les objets deja présents dans cartStockage
for (let i = 0; i < cartStockage.length; i++) {
    addToCart(cartStockage[i])
}

// Ici, on attends un évenement clic sur les boutons d'ajout au panier, on récupère l'ID du bouton puis on ajoute l'objet dans le panier et dans cartStockage
for (let i = 0; i < addToCartBtn.length; i++) {
    const btn = addToCartBtn[i];
    btn.addEventListener('click', () => {
        let cardId = btn.getAttribute('data-id')
        addToCart(cardId)
        cartStockage.push(cardId)
        localStorage.setItem('cartStockage', JSON.stringify(cartStockage))
    })
}

// On met a jour le tableau présent dans le localStorage après ajout ou suppression d'objets dans le panier
localStorage.setItem('cartStockage', JSON.stringify(cartStockage))


function addToCart(id) {
    let course = COURSES[id]
    console.log(`Add ${course.title} to cart`);
    cart.insertAdjacentHTML('afterbegin', `
        <tr>
            <td><img src="img/courses/${course.img}" alt="${course.title} logo"></td>
            <td>${course.title}</td>
            <td>${course.price}€</td>
            <td>1</td>
            <td><img src="img/cross.png" class="remove-course" data-id="${id}" style="width:25px;height:auto;cursor:pointer"></td>
        </tr>
    `)
    // Apparition d'une notif quand tu ajoute un cours au panier
    notif.insertAdjacentHTML('afterbegin', `
    <div class="alert">
        <span class="alertaddcart"></span>
        ${course.title} à été ajouté au panier !
    </div>
    `)
    //setTimeout( ,3000)

    
}