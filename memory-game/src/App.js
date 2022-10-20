import { useCallback, useEffect, useState } from 'react';
import './App.css';

const colors = [
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'red',
  'white',
  'grey',
  'black',
];

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guesses, setGuesses] = useState(() => new Set());

  const addItem = useCallback((c) => {
    setGuesses((prev) => new Set(prev).add(c));
  }, []);

  const makeGuess = useCallback(
    (color) => {
      if (guesses.has(color)) {
        guesses.clear();
        setScore(0);
      } else {
        addItem(color);
        setScore(score + 1);
      }
    },
    [guesses, score, addItem]
  );

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <div className="App">
      <header className="App-header">Memory Game</header>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <h2>
        Best Score: <span id="bestScore">{bestScore}</span>
      </h2>
      <h2>
        Score: <span id="score">{score}</span>
      </h2>
      <div id="cards">
        {Array.from(Array(12)).map(() => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              className={`card ${randomColor}`}
              onClick={() => makeGuess(randomColor)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;