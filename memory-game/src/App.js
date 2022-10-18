import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guesses, setGuesses] = useState([]);
  
  const makeGuess = (event) => {
   console.log(event.currentTarget.className);
   let divClass = event.currentTarget.className;
    setGuesses(current => [...current, divClass]);
    //loop through guesses array
    //if the current guess class equals a class/element in the previousclass array
    //score is set to 0
    //can use guesses as a variable array
  }
useEffect(() => {
  console.log(guesses);
    console.log(typeof guesses);
    
  });
   
  
  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h2>Best Score: <span id="bestScore">0</span></h2>
      <h2>Score: <span id="score">0</span></h2>
      <div id="cards">
        <div className="card green" value="green" onClick={makeGuess}></div>
        <div className="card green"></div>
        <div className="card blue"></div>
        <div className="card blue"></div>
        <div className="card yellow"></div>
        <div className="card yellow"></div>
        <div className="card purple"></div>
        <div className="card purple"></div>
        <div className="card orange"></div>
        <div className="card orange"></div>
        <div className="card pink"></div>
        <div className="card pink"></div>
      </div>
    </div>
  );
}

export default App;
