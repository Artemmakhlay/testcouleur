function Jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
basic.forever(function () {
    Blanc()
})
