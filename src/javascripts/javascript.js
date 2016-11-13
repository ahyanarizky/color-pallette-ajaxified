function changeColor() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/color',
        success: function(data) {
            console.log(data);
        }
    })
}
