// jawaban nomor 3
import React from 'react';

const Nmr3: React.FC = () => {
  const numbers: number[] = [];

  for (let i = 1; i <= 50; i++) {
    numbers.push(i);
  }

  return (
      <div>
          <h1>Jawaban Nomor 3</h1>
      <h2>List of Numbers from 1 to 50</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nmr3;
