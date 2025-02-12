import React from 'react';
import Mole from './Mole';

const Grid = ({ grid, onMoleClick }) => {
    return (
        <div className="game-grid">
            {grid.map((isMole, index) => (      // grid.map() is a JS array method creating React components
                <Mole // Mole is a React component
                    key={index} // key is a prop
                    isVisible={isMole} // isVisible is a prop
                    onClick={() => onMoleClick(index)}  // onMoleClick() is a prop function
                />
            ))}
        </div>
    );
};

export default Grid;