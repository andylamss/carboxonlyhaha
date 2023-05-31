blockytalky.onReceivedNumber(function (下層, receivedString) {
    // 門，自動開關
    // 放在下層飯盒地下的壓力板
    // 收到藍牙信號 下層
    // 
    // 放在下層飯盒地下的壓力板
    if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
        // 上層自動門
        servos.P0.setAngle(90)
        下層計時器 = 20
        // 計時器：下層
        // 
        // 放在下層飯盒地下的壓力板
        // 收到藍牙信號
        if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1 && 下層計時器 > 0) {
            下層計時器 += -1
            basic.pause(1000)
        }
        if (下層計時器 == 0) {
            // 揚聲器
            pins.digitalWritePin(DigitalPin.P9, 1)
        } else {
            // 揚聲器
            pins.digitalWritePin(DigitalPin.P9, 0)
        }
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.pause(10000)
        // 上層自動門
        servos.P0.setAngle(0)
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        . # # . #
        # . # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
	
})
let 下層計時器 = 0
let 上層 = 0
let 下層 = 0
bluetooth.startButtonService()
basic.forever(function () {
	
})
