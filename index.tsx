import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.scss';

const App = () => {
  const [showPara, setShowPara] = useState(false);

  console.log('App Running....');

  const toggleHandler = () => {
    setShowPara((prevState) => !prevState);
  };
  return (
    <div className="container">
      <h1>Hi there!</h1>
      <Hello show={showPara} />
      <button onClick={toggleHandler}>Toggle Message!</button>
    </div>
  );
};

render(<App />, document.getElementById('root'));
