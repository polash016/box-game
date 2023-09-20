import { useState } from 'react';
import './App.css'

function App() {
  const [position, setPosition] = useState({ x: 42, y: 76 });

  const moveBox = (direction) => {
    const newPosition = { ...position };

    if (direction === 'up') {
      if (newPosition.y - 100 >= 0) {
        newPosition.y -= 100;
      }
    } else if (direction === 'down') {
      if (newPosition.y + 100 <= window.innerHeight - 100) {
        newPosition.y += 100;
      }
    } else if (direction === 'left') {
      if (newPosition.x - 100 >= 0) {
        newPosition.x -= 100;
      }
    } else if (direction === 'right') {
      if (newPosition.x + 100 <= window.innerWidth - 100) {
        newPosition.x += 100;
      }
    }

    setPosition(newPosition);
  };

  return (
    <div className='h-screen flex flex-col justify-between'>
       <button
        className="bg-sky-500 h-14 w-full"
        onClick={() => moveBox('up')}
        disabled={position.y === 0}
      >
        Up
      </button>
      <div className="bg-white flex-grow flex items-center justify-between">
      <button
          className="bg-sky-500 h-full w-20"
          onClick={() => moveBox('left')}
          disabled={position.x === 0}
        >
          Left
        </button>
        <div className='w-full h-full'>
        <div
          className="w-14 h-10 bg-red-500 absolute transform translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        ></div>
        </div>
        <button
          className="bg-sky-500 h-full w-20"
          onClick={() => moveBox('right')}
          disabled={position.x === window.innerWidth - 150}
        >
          Right
        </button>
      </div>
      <button
        className="bg-sky-500 h-14 w-full"
        onClick={() => moveBox('down')}
        disabled={position.y === window.innerHeight - 150}
      >
        Down
      </button>
    </div>
  )
}

export default App
