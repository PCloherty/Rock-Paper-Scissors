import React from 'react'; 
import {RPS, RPSCapsule} from './v1functions.js'
import '../App.css';


export default function App() {
  return (
    
    <div className="content">
      <button type='button' id="startReset" onLoad={RPSCapsule} onClick={RPSCapsule}>Start/Reset</button>
      <button type='button' id="rock" className="selection" onClick={RPS} >Rock </button>
      <button type='button' id="paper" className="selection" onClick={RPS}>Paper </button>
      <button type='button' id="scissors" className="selection" onClick={RPS}>Scissors </button>
      <div className="scoreBoard">
        <p id="yourScore">0</p>
        <p>:</p>
        <p id="botScore">0</p>
      </div>
      <p>You chose: <span id='yourChoice'></span></p><br />
      <p>Machine chose: <span id='machine'></span> </p><br />
      <br />
      <p id="result">Result: </p>

      <p>The code behind the game is <a href="https://github.com/PCloherty/rock-paper-scissors" rel="noopener noreferrer" target="_blank">available here</a>.</p>

    </div>


  )
}