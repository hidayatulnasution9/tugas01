// LoopComponent.tsx
import React from 'react';

interface LoopComponentProps {
  n: number;
  kelipatan: number;
}

const LoopComponent: React.FC<LoopComponentProps> = ({ n, kelipatan }) => {
  const perulangan = () => {
    let result = '';

    for (let i = 0; i < 10; i++) {
      if (n % 2 === 1) {
        result += n + '\n';
      }
      n++;
    }

    return result;
  };

  const jumlah = () => {
    let total = 0;
    let tempN = n - 10;

    for (let i = 0; i < 10; i++) {
      total += tempN;
      tempN++;
    }

    return total;
  };

  return (
    <div>
      <h3>Perulangan 10 ke-{kelipatan}:</h3>
      <pre>{perulangan()}</pre>
      <p>Jumlah: {jumlah()}</p>
      <hr />
    </div>
  );
};

export default LoopComponent;
