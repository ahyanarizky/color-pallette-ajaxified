module.exports = {
    changeColor: function(req, res) {
        arrColor = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'teal', 'brown', 'grey']
        let box1 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box2 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box3 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box4 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box5 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box6 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box7 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box8 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        let box9 = arrColor[Math.ceil(Math.random() * arrColor.length)]
        res.json({
            box1: box1,
            box2: box2,
            box3: box3,
            box4: box4,
            box5: box5,
            box6: box6,
            box7: box7,
            box8: box8,
            box9: box9
        })
    }
}
