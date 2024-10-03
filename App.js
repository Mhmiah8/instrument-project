import React, { useState } from 'react';
import './App.css';

// List of drum and piano sounds
const drumSounds = [
  { key: 'Q', sound: 'Kick', url: 'https://www.soundjay.com/button/sounds/button-3.mp3' },
  { key: 'W', sound: 'Snare', url: 'https://www.soundjay.com/button/sounds/button-4.mp3' },
  { key: 'E', sound: 'Hi-Hat', url: 'https://www.soundjay.com/button/sounds/button-5.mp3' },
  { key: 'A', sound: 'Tom 1', url: 'https://www.soundjay.com/button/sounds/button-6.mp3' },
  { key: 'S', sound: 'Tom 2', url: 'https://www.soundjay.com/button/sounds/button-7.mp3' },
  { key: 'D', sound: 'Crash', url: 'https://www.soundjay.com/button/sounds/button-8.mp3' },
  { key: 'Z', sound: 'Ride', url: 'https://www.soundjay.com/button/sounds/button-9.mp3' },
  { key: 'X', sound: 'Clap', url: 'https://www.soundjay.com/button/sounds/button-10.mp3' },
  { key: 'C', sound: 'Percussion', url: 'https://www.soundjay.com/button/sounds/button-11.mp3' }
];

const pianoSounds = [
  { key: 'Q', sound: 'C', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { key: 'W', sound: 'D', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { key: 'E', sound: 'E', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { key: 'A', sound: 'F', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { key: 'S', sound: 'G', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { key: 'D', sound: 'A', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { key: 'Z', sound: 'B', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
  { key: 'X', sound: 'C2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
  { key: 'C', sound: 'D2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' }
];

function App() {
  const [sounds, setSounds] = useState(drumSounds);
  const [mode, setMode] = useState('Drum');

  const playSound = (url, sound) => {
    const audio = new Audio(url);
    audio.play();
    document.getElementById('display').innerText = sound;
  };

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      const soundObj = sounds.find(s => s.key === e.key.toUpperCase());
      if (soundObj) {
        playSound(soundObj.url, soundObj.sound);
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [sounds]); // Adding sounds as a dependency

  const toggleMode = () => {
    if (mode === 'Drum') {
      setSounds(pianoSounds);
      setMode('Piano');
    } else {
      setSounds(drumSounds);
      setMode('Drum');
    }
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>{mode} Machine  by mhmiah8</h1>
        <div id="display">Press a Key</div>
        <div className="pad-container">
          {sounds.map((sound) => (
            <button
              key={sound.key}
              className="drum-pad"
              id={sound.sound}
              onClick={() => playSound(sound.url, sound.sound)}
            >
              {sound.key}
              <audio className="clip" id={sound.key} src={sound.url} />
            </button>
          ))}
        </div>
        <button onClick={toggleMode}>Switch to {mode === 'Drum' ? 'Piano' : 'Drum'} Mode</button>
      </div>
    </div>
  );
}

export default App;


   