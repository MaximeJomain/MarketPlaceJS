function getCourseById(id) {
    let course
    $.ajax({
        url: 'data/bdd.php',
        dataType: 'json',
        method: 'post',
        data: {
            id: id
        },
        async: false,
        success: (data) => {
            console.log(data);
            course = data
        },
    })
    return course
}

function getAllCourses() {
    let courses
    $.ajax({
        url: 'data/bdd.php',
        dataType: 'json',
        method: 'post',
        async: false,
        success: (data) => {
            console.log(data);
            courses = data
            
        },
        
    })
    return courses
}

$('#idBtn').on('click', () => {
    let id = $('#courseIdInput').val()
    getCourseById(id)
})
