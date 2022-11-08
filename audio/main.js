const startButton = document.querySelector('#startButton'),
  stopButton = document.querySelector('#stopButton');

let context,
  oscillator,
  contextGain;

function start() {
  startButton.style.display = 'none';
  stopButton.style.display = 'block';

  context = new AudioContext();
  oscillator = context.createOscillator();
  contextGain = context.createGain();

  oscillator.connect(contextGain);
  contextGain.connect(context.destination);
  oscillator.start(0);
}

function stop() {
  startButton.style.display = 'block';
  stopButton.style.display = 'none';
  console.log(333, contextGain)
  contextGain.gain.exponentialRampToValueAtTime(
    0.00001, context.currentTime + 0.04
  )
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);

stopButton.style.display = 'none';
