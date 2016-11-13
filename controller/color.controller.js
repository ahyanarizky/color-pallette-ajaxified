module.exports = {
    changeColor: function(req, res) {
        let box1 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box2 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box3 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box4 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box5 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box6 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box7 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box8 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        let box9 = Math.floor(Math.random() * 0xFFFFFF).toString(16);
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
