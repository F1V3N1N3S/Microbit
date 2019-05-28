let angle = 0
let Break = 0
input.onButtonPressed(Button.B, function () {
    Break = 2
    while (Break == 2) {
        angle = input.compassHeading()
        basic.showString("" + angle)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    Break = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    Break = 1
    while (Break == 1) {
        angle = input.compassHeading()
        if (angle >= 0 && angle <= 22.5) {
            basic.showString("N")
        } else if (angle > 22.5 && angle <= 67.5) {
            basic.showString("NE")
        } else if (angle > 67.5 && angle <= 112.5) {
            basic.showString("E")
        } else if (angle > 112.5 && angle <= 157.5) {
            basic.showString("SE")
        } else if (angle > 157.5 && angle <= 202.5) {
            basic.showString("S")
        } else if (angle > 202.5 && angle <= 247.5) {
            basic.showString("SW")
        } else if (angle > 247.5 && angle <= 292.5) {
            basic.showString("W")
        } else if (angle > 292.5 && angle <= 337.5) {
            basic.showString("NW")
        } else if (angle > 337.5 && angle <= 360) {
            basic.showString("N")
        }
    }
})
