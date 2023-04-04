radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        X = value
    } else {
        Y = value
    }
})
let Y = 0
let X = 0
radio.setGroup(45)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (X >= 0 && Y >= 0) {
        TPBot.setWheels(X - Y, X)
    } else if (X >= 0 && Y < 0) {
        TPBot.setWheels(X, X - Y * -1)
    } else if (X < 0 && Y < 0) {
        TPBot.setWheels(X, X - Y * -1)
    } else {
        TPBot.setWheels(X + Y, X)
    }
})
