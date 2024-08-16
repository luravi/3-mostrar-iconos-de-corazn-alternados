basic.forever(function on_forever() {
    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
    }
})
