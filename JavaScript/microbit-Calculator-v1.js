let number = 0
input.onButtonPressed(Button.A, function () {
    number += 0 - 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    number = number / 2
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += 0 + 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltRight, function () {
    number = number * 2
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    number = 0
    basic.clearScreen()
})
