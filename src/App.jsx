import React, { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
];

export default function App() {
  const [state, setState] = useState(initialState);

  const handleInc = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1
        };
      }
      return { ...c };
    });
    setState(updateCounter);
  };

  const handleDec = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1
        };
      }
      return { ...c };
    });

    setState(updateCounter);
  };

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  return (
    <div>
      <h2 className="text-center text-2xl p-2 underline">Simple Counter App</h2>
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          inc={handleInc}
          dec={handleDec}
        />
      ))}
      <br />
      <Stats count={totalCount()} />
    </div>
  );
}
