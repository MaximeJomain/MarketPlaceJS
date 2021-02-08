let input      = document.querySelector('#search-item input')
let courses    = document.querySelectorAll('.courses__container .course__item')
let errorMsg   = document.querySelector('#no_course')

input.addEventListener('input', () => {
    let toSearch = input.value.toLowerCase()
    
    for (let i = 0; i < courses.length; i++) {
        // Get the course name
        const course = courses[i]
        const courseName = course.querySelector('h4').innerHTML.toLowerCase();

        // If the course name doesn't match with the user input, hide the course
        if (courseName.indexOf(toSearch) == -1) {
            course.style.display = 'none'
        } else {
            course.style.display = 'flex'
        }
    }

    // If all courses are hiden, display the error message
    let hiddenCourse = 0

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].style.display == 'none') {
            hiddenCourse++
        }
    }
    if (hiddenCourse == courses.length) {
        errorMsg.classList.remove('hidden')
    }

    // If the input is empty, display all courses
    if (toSearch == '') {
        // Hide the error message
        errorMsg.classList.add('hidden')

        for (let i = 0; i < courses.length; i++) {
            courses[i].style.display = 'flex'
        }
    }
})