let steps = 0
input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
