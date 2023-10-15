radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("hi kason")
})
radio.onReceivedString(function (receivedString) {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("how are you doing")
})
radio.setGroup(1424)
