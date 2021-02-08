var component = document.querySelector('.courses__container')
var courses = Object.keys(COURSES) // Récupération de toutes les clés de mon objet COURSES

// Pour chaque clés de COURSES, on print le cours 
for (let i = courses.length; i >= 1; i--) {
    printComponent(i)
}

function printComponent(id) {
    // On récupère l'id du cours qu'on va print
    let course = COURSES[id]
    // on insert une div avec toutes les informations de notre cours 
    component.insertAdjacentHTML('afterbegin', `
    <div class="course__item">
        <figure class="course_img">
        <img src="img/courses/${course.img}"> 
        </figure>
        <div class="info__card">
            <h4>UX/UI</h4>
            <figure class="mark m_${course.mark}">
                <img src="img/rates.png">
            </figure>
            <p>
                <span class="price">${course.initial_price} €</span>
                <span class="discount">${course.price}€</span>
            </p>
            <p>
                Disponible: <span class="stock">${course.stock}</span>
            </p>
            <a href="#" class="add-to-cart" data-id="${id}"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
        </div>
    </div>
    `)
}

