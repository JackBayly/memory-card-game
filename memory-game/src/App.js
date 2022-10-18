import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const makeGuess = (event) => {
  
   let divClass = event.currentTarget.id;
    setGuesses(current => [...current, divClass]);
    setCurrentGuess(divClass)
    if(guesses.length===0){
      setScore(score+1);
    }
    
    //loop through guesses array
    for(let x = 0;x<guesses.length; x++){
     
       if (guesses[x]=== currentGuess){
      //  setScore(0);
    // setGuesses([]);
     
        
      } else if ((guesses[x]!== currentGuess)||(guesses.length == 0)||(guesses[x]==undefined)){
console.log("It works!")
setScore(score+1)
      }

    }
    

    //if the current guess class equals a class/element in the previousclass array
    //score is set to 0
    //can use guesses as a variable array
  }
useEffect(() => {
  console.log(guesses);

 // console.log(currentGuess);
  
  if(score>bestScore){
    setBestScore(score);
  }
  /*if (guesses.length !== new Set(guesses).size) {
    console.log(true);
    setScore(score+1)
  } else {
    console.log(false);
    setScore(0)
  }
*/
  
  });
   
  
  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h2>Best Score: <span id="bestScore">{bestScore}</span></h2>
      <h2>Score: <span id="score">{score}</span></h2>
      <div id="cards">
        <div className="card green" id="green" onClick={makeGuess}></div>
        <div className="card green" id="green" onClick={makeGuess}></div>
        <div className="card blue" id="blue" onClick={makeGuess}></div>
        <div className="card blue" id="blue" onClick={makeGuess}></div>
        <div className="card yellow" id="yellow" onClick={makeGuess}></div>
        <div className="card yellow" id="yellow" onClick={makeGuess}></div>
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
