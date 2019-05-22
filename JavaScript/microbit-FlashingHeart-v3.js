let _break = 0
input.onButtonPressed(Button.A, function () {
    _break = 0
    while (_break == 0) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    _break += 1
})
