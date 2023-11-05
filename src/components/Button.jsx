import React, { Children } from 'react';

export default function Button({ children, handler }) {
  return (
    <button className="py-1 px-3 m-1 rounded-md bg-gray-400" onClick={handler}>
      {children}
    </button>
  );
}
