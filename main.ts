function 기울기정도분류 () {
    기울기측정()
    if (0 <= 기울기정도 && 기울기정도 < 10) {
        기울기단계 = 0
    } else if (10 <= 기울기정도 && 기울기정도 < 20) {
        기울기단계 = 1
    } else {
        기울기단계 = 2
    }
}
function 정상 () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 초기기울기설정 () {
    basic.showString("hi")
    전체기울기 = 0
}
function 기울기측정 () {
    let 현재기울기 = 0
    기울기정도 = Math.abs(현재기울기 + input.rotation(Rotation.Roll))
}
function 심각 () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 기기표시 () {
    if (기울기단계 == 0) {
        정상()
    } else if (기울기단계 == 1) {
        경고()
    } else {
        심각()
    }
}
function 경고 () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
let 전체기울기 = 0
let 기울기단계 = 0
let 기울기정도 = 0
초기기울기설정()
basic.forever(function () {
    기울기정도분류()
    기기표시()
})
