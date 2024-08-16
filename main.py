def on_forever():
    for i in range(5):
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(500)

basic.forever(on_forever)
