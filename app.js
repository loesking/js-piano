// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout(
        function () {
            oscillator.stop();
        }, duration);
}

const pianoKeys = document.querySelectorAll('.key');

pianoKeys.forEach(key => {
    key.addEventListener('click', playSound);
})

function playSound(event) {
    playNote(calculateFrequency(event.currentTarget.id), 60);
}

function calculateFrequency(note) {
    return getBaseFrequencyOfNote(note) * (2 ** note.slice(-1));
}

function getBaseFrequencyOfNote(note) {
    const baseNote = note.slice(0, note.length - 1);
    switch (baseNote) {
        case 'c':
            return 16.35
        case 'c#':
            return 17.32
        case 'd':
            return 18.35
        case 'd#':
            return 19.45
        case 'e':
            return 20.6
        case 'f':
            return 21.83
        case 'f#':
            return 23.12
        case 'g':
            return 24.5
        case 'g#':
            return 25.96
        case 'a':
            return 27.5
        case 'a#':
            return 29.14
        case 'b':
            return 30.87

    }
}