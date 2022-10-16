import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Memory Game
      </header>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h2>Score: <span id="score">0</span></h2>
      <h2>Best Score: <span id="bestScore">0</span></h2>
      <div id="cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  );
}

export default App;
