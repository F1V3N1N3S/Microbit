let angle = 0
let _break = 0
input.onButtonPressed(Button.A, function () {
    _break = 0
    while (_break == 0) {
        angle = input.compassHeading()
        if (angle > 315 && angle <= 360 || angle >= 0 && angle <= 45) {
            basic.showString("N")
        } else if (angle > 45 && angle <= 135) {
            basic.showString("E")
        } else if (angle > 135 && angle <= 225) {
            basic.showString("S")
        } else if (angle > 225 && angle <= 315) {
            basic.showString("W")
        }
    }
})

// Code to break the compass loops and clear the screen
input.onButtonPressed(Button.AB, function () {
    _break = 1
    basic.clearScreen()
})


// Shows the compass heading as a value
input.onButtonPressed(Button.B, function () {
	_break = 2
})


input.onButtonPressed(Button.B, function () {
    _break = 2
})