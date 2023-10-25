import React, { useState } from 'react';
import Nmr1 from './Nmr1';
import Nmr2 from './Nmr2';
import Nmr3 from './Nmr3';

const App: React.FC = () => {
  const [showNmr1, setShowNmr1] = useState(false);
  const [showNmr2, setShowNmr2] = useState(false);
  const [showNmr3, setShowNmr3] = useState(false);

  const handleNmr1ButtonClick = () => {
    setShowNmr1(true);
    setShowNmr2(false); 
    setShowNmr3(false);
  };

  const handleNmr2ButtonClick = () => {
    setShowNmr1(false);
    setShowNmr2(true);
    setShowNmr3(false);
  };

  const handleNmr3ButtonClick = () => {
    setShowNmr1(false);
    setShowNmr2(false);
    setShowNmr3(true);
  }

  return (
    <div className="App">
      <button onClick={handleNmr1ButtonClick}>Jawaban Nomor 1</button>
      <button onClick={handleNmr2ButtonClick}>Jawaban Nomor 2</button>
      <button onClick={handleNmr3ButtonClick}>Jawaban Nomor 3</button>
      {showNmr1 && <Nmr1 />}
      {showNmr2 && <Nmr2 />}
      {showNmr3 && <Nmr3 />}
    </div>
  );
}

export default App;
