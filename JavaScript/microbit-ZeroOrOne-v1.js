let random_number = 0
input.onGesture(Gesture.Shake, function () {
    random_number = Math.randomRange(0, 1)
    if (random_number == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
