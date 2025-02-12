import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './Scoreboard.js';

const Game = () => {
  // State declarations using useState
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(new Array(9).fill(false));
  const [isGameRunning, setIsGameRunning] = useState(false);

  // Game logic will go here...
  useEffect(() => {
    if (!isGameRunning) return; // Exit if game is not running
    // Function to randomly show a mole
    const highlightMole = () => {
      const newGrid = new Array(9).fill(false);
      const randomIndex = Math.floor(Math.random() * 9);
      newGrid[randomIndex] = true;
      setGrid(newGrid);
    };
  
    // Initial mole placement
    highlightMole();
  
    // Set up interval for mole movement
    const moleTimer = setInterval(highlightMole, 1000);
  
    // Cleanup function
    return () => {
        clearInterval(moleTimer);
        setGrid(new Array(9).fill(false)); // Hide all moles
    };
  }, [isGameRunning]);
  
    // Function to handle mole clicks / Click event handler
    const handleMoleClick = (index) => {
        if (grid[index]) {
        setScore(score + 1);
        }
    };

    // Fuction to toggle start/stop game
    const handleStartGame = () => {
        if (isGameRunning) {
        setScore(0); // Reset score on new game
    }
    setIsGameRunning(!isGameRunning); // Toggle game state
    };

// JSX to render the game
  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <button
        className="start-button"
        onClick={handleStartGame}
    >
        {isGameRunning ? 'Stop Game' : 'Start Game'}
    </button>
      <ScoreBoard score={score} />
      <Grid grid={grid} onMoleClick={handleMoleClick} />
    </div>
  );
};

export default Game;