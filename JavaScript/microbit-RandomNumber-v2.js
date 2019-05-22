let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = Math.randomRange(0, 9)
    basic.showString("" + random_number)
    basic.pause(1000)
    basic.clearScreen()
})
