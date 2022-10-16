import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guesses, setGuesses] = useState([]);
  
  const makeGuess = () => {
   
    setGuesses(current => [...current, 'Carl']);
    
  }
useEffect(() => {
    console.log(guesses);
  }) 
  
  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h2>Best Score: <span id="bestScore">0</span></h2>
      <h2>Score: <span id="score">0</span></h2>
      <div id="cards">
        <div className="card" value="green" onClick={makeGuess}></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default App;
