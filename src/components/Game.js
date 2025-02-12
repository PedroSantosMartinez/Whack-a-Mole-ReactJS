import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  // State declarations using useState
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(new Array(9).fill(false));

  // Game logic will go here...
  useEffect(() => {
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
    return () => clearInterval(moleTimer);
  }, []); // Empty dependency array means this runs once on mount
  
    // Function to handle mole clicks / Click event handler
    const handleMoleClick = (index) => {
        if (grid[index]) {
        setScore(score + 1);
        }
    };
 
// JSX to render the game
  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <ScoreBoard score={score} />
      <Grid grid={grid} onMoleClick={handleMoleClick} />
    </div>
  );
};

export default Game;