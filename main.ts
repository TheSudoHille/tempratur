let temp = 0
basic.forever(function () {
    temp = input.temperature()
    if (temp > 19) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
