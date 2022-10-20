import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guesses, setGuesses] = useState(() => new Set());;

  const makeGuess = (event) => {
    let divClass = event.currentTarget.className;
    if (guesses.has(divClass)) {
      setScore(0);
      guesses.clear();
    } else {
      setScore(score + 1);
      const addItem = divClass => {
        setGuesses(prev => new Set(prev).add(divClass));
      }
      addItem(divClass);
    }
    randomOrder();
  }
  const randomOrder = () => {
    let classesArray = ['card blue', 'card green', 'card yellow', 'card purple', 'card orange', 'card pink', 'card red', 'card white', 'card grey', 'card black'];
    let divCards = document.querySelectorAll(".card");
    for (let x of divCards) {
      const randomIndex = Math.floor(Math.random() * classesArray.length);
      x.className = classesArray[randomIndex];
    }
  }
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h2>Best Score: <span id="bestScore">{bestScore}</span></h2>
      <h2>Score: <span id="score">{score}</span></h2>
      <div id="cards">
        <div className="card green" onClick={makeGuess}></div>
        <div className="card green" onClick={makeGuess}></div>
        <div className="card blue" onClick={makeGuess}></div>
        <div className="card blue" onClick={makeGuess}></div>
        <div className="card yellow" onClick={makeGuess}></div>
        <div className="card yellow" onClick={makeGuess}></div>
        <div className="card purple" onClick={makeGuess}></div>
        <div className="card purple" onClick={makeGuess}></div>
        <div className="card orange" onClick={makeGuess}></div>
        <div className="card orange" onClick={makeGuess}></div>
        <div className="card pink" onClick={makeGuess}></div>
        <div className="card pink" onClick={makeGuess}></div>
      </div>
    </div>
  );
}

export default App;
