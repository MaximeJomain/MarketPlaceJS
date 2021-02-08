var addToCartBtn = document.querySelectorAll('.add-to-cart')
var cart = document.querySelector('#cart tbody')

if (localStorage.getItem('cartStockage') == null) {
    localStorage.setItem('cartStockage', '[]')
}

var cartStockage = JSON.parse(localStorage.getItem('cartStockage'))
for (let i = 0; i < cartStockage.length; i++) {
    addToCart(cartStockage[i])
}

//console.log(x)
for (let i = 0; i < addToCartBtn.length; i++) {
    const btn = addToCartBtn[i];
    btn.addEventListener('click', () => {
        let cardId = btn.getAttribute('data-id')
        addToCart(cardId)
      //  cartStockage[`${cardId}`] = `${COURSES[cardId]}`
        cartStockage.push(cardId)
        localStorage.setItem('cartStockage', JSON.stringify(cartStockage))
    })
}

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

    
}