import React, { useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

const Game = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const move = (direction: Direction) => {
    switch (direction) {
      case 'up':
        setPosition((prev) => ({ ...prev, y: prev.y - 1 }));
        break;
      case 'down':
        setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
        break;
      case 'left':
        setPosition((prev) => ({ ...prev, x: prev.x - 1 }));
        break;
      case 'right':
        setPosition((prev) => ({ ...prev, x: prev.x + 1 }));
        break;
    }
  };

  return (
    <div>
      <div>Position: {position.x}, {position.y}</div>
      <button onClick={() => move('up')}>Up</button>
      <button onClick={() => move('down')}>Down</button>
      <button onClick={() => move('left')}>Left</button>
      <button onClick={() => move('right')}>Right</button>
    </div>
  );
};

export default Game;