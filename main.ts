input.onButtonPressed(Button.A, function () {
    if (nb != 10) {
        nb += 1
    }
    basic.showNumber(nb)
})
input.onButtonPressed(Button.B, function () {
    if (nb != 0) {
        nb += -1
    }
    basic.showNumber(nb)
})
let nb = 0
nb = 0
basic.showNumber(nb)
