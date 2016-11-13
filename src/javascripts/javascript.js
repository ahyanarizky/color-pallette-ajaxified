function changeColor() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/color',
        success: function(data) {

            $('#box1').replaceWith(`<div class='box' id='box1'></div>`)
            $('#box2').replaceWith(`<div class='box' id='box2'></div>`)
            $('#box3').replaceWith(`<div class='box' id='box3'></div>`)
            $('#box4').replaceWith(`<div class='box' id='box4'></div>`)
            $('#box5').replaceWith(`<div class='box' id='box5'></div>`)
            $('#box6').replaceWith(`<div class='box' id='box6'></div>`)
            $('#box7').replaceWith(`<div class='box' id='box7'></div>`)
            $('#box8').replaceWith(`<div class='box' id='box8'></div>`)
            $('#box9').replaceWith(`<div class='box' id='box9'></div>`)



            $('#box1').addClass(data.box1)
            $('#box2').addClass(data.box2)
            $('#box3').addClass(data.box3)
            $('#box4').addClass(data.box4)
            $('#box5').addClass(data.box5)
            $('#box6').addClass(data.box6)
            $('#box7').addClass(data.box7)
            $('#box8').addClass(data.box8)
            $('#box9').addClass(data.box9)
        }
    })
}
