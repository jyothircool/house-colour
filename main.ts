let colour = "no"
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.pause(2000)
basic.forever(function () {
    colour = serial.readString().substr(0, 1)
    if (colour == "Class 1") {
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(2000)
    } else if (colour == "Class 2") {
        pins.digitalWritePin(DigitalPin.P15, 1)
        basic.pause(2000)
    } else {
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(2000)
})
