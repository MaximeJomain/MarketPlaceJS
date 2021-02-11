function getCourseById(id) {
    $.ajax({
        url: 'data/bdd.php',
        dataType: 'json',
        method: 'post',
        data: {
            id: id
        },
        success: (data) => {
            console.log(data);
        },
    })
}

function getAllCourses() {
    $.ajax({
        url: 'data/bdd.php',
        dataType: 'json',
        method: 'post',
        success: (data) => {
            console.log(data);
        },
    })
}

$('#idBtn').on('click', () => {
    let id = $('#courseIdInput').val()
    getCourseById(id)
})
