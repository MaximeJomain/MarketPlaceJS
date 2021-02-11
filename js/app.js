var component = document.querySelector('.courses__container')
// var coursesList = Object.keys(COURSES)

var coursesList = getAllCourses() // Get all courses from the db

// From the db for each courses 
for (let i = coursesList.length - 1; i >= 0 ; i--) {
    printComponent(coursesList[i])
}

function printComponent(course) {
    // Insert of a div with all the information of the courses
    component.insertAdjacentHTML('afterbegin', `
    <div class="course__item">
        <figure class="course_img">
        <img src="img/courses/${course.img}"> 
        </figure>
        <div class="info__card">
            <h4>${course.title}</h4>
            <figure class="mark m_${course.mark}">
                <img src="img/rates.png">
            </figure>
            <p>
                <span class="price">${course.initial_price} €</span>
                <span class="discount">${course.initial_price}€</span>
            </p>
            <p class="promotion">Article en promotion ! <span></span></p>
            <p>
                Disponible: <span class="stock">${course.stock}</span>
            </p>
            <a href="#" class="add-to-cart" data-id="${course.id}"><i class="fa fa-cart-plus"></i>Ajouter au panier</a>
        </div>
    </div>
    `)
}