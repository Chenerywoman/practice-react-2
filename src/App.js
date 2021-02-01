import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {

  /* sets out that useState returns an array with 2 elements- the first is the value, then the function that can change the value*/
  // const state = useState('red');
  // const colour = state[0];
  // const setColour = state[1];

  const [colour, setColour] = useState('blue');

  return (
    <div className={`App`} style={{
      backgroundColor:colour
    }}>
        <div className="container">
            <h1>Hello World!</h1>
            < Button colour="red" setColour={setColour}/>
            < Button colour="yellow" setColour={setColour}/>
            < Button colour="blue" setColour={setColour}/>
            < Button colour="purple" setColour={setColour}/>
        </div>
    </div>
  );
}

export default App;
