input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.pause(100)
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    . . . . .
    . # . # .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . . # .
    . . # . .
    . # . . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . . . #
    . . # . .
    # . . . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . # #
    # . # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    # # # . #
    # # . # #
    # . # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # . #
    # # . # #
    # . # # #
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . # #
        # . # # #
        # # # # #
        `)
    basic.showString("temp.")
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . # #
        # . # # #
        # # # # #
        `)
    basic.showString("Licht")
    basic.showString("" + (input.lightLevel()))
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . # #
        # . # # #
        # # # # #
        `)
    basic.showString("komp.")
    basic.showString("" + (input.compassHeading()))
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . # #
        # . # # #
        # # # # #
        `)
    basic.showString("beschl.")
    basic.showString("" + (input.acceleration(Dimension.Strength)))
    basic.showLeds(`
        # # # # #
        # # # . #
        # # . # #
        # . # # #
        # # # # #
        `)
})
