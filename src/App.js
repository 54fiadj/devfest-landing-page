import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Register from './components/Register';

function App() {

  const targetDate = new Date('2023-12-26T00:00:00+01:00');

  return (
    <div className="App">
      <Header />
      <Countdown targetDate={targetDate} />
      <Register />
    </div>
  );
}

export default App;
