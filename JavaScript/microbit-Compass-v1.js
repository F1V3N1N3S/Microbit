let angle = 0
input.onButtonPressed(Button.A, function () {
    while (true) {
        angle = input.compassHeading()
        if (angle > 315 && angle <= 360 || angle > 0 && angle <= 45) {
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
