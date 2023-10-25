import React, { useEffect, useState } from 'react';

const Nmr2: React.FC = () => {
  const nim = "042330108"; // Ganti dengan NIM Anda
  const lastTwoDigits = parseInt(nim.slice(-2));

  let startingValue: number | null = null;
  let output: string = '';

  if (lastTwoDigits === 13) {
    startingValue = 13;
  } else if (lastTwoDigits === 0) {
    startingValue = 0;
  } else if (lastTwoDigits % 2 === 1) { // Jika ganjil
    startingValue = lastTwoDigits;
    
    // Gunakan while loop
    let current = startingValue;
    while (current <= 20) {
      output += current + ' ';
      current++;
    }
  } else { // Jika genap
    startingValue = lastTwoDigits;
    
    // Gunakan do..while loop
    let current = startingValue;
    do {
      output += current + ' ';
      current++;
    } while (current <= 20);
  }

  // Gunakan state untuk menyimpan hasil perulangan
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    setResult(`Nilai awal perulangan: ${startingValue}`);
  }, [startingValue]);

  return (
    <div>
      <h1>Jawaban Nomor 2</h1>
      <div>{"Nim saya = " + nim}</div>
      <div id="result">{result}</div>
      <div>{output}</div>
    </div>
  );
};

export default Nmr2;
