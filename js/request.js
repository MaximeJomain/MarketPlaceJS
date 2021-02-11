$('#bddBtn').on('click', () => {

    $.ajax({
        url: 'data/bdd.php',
        dataType: 'json',
        method: 'get',
        success: (data) => {
            console.log(data);
        },
        error: (error) => {
            console.log('erreur');
            console.log(error);
        }
    })
})