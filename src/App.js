import React from 'react';
import './App.css';

import {BeadGrid} from './components/GridContainer';
import {ColorToolSection} from './components/ColorToolSection';


const App = () => {
  const [color, setColor] = React.useState("#62664E");
  
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }

 return (
    <div className="App">
      <header className="App-header">
        <h1>Maple's Maker Corner</h1>
      </header>
      <BeadGrid currentColor={color}/>
      <ColorToolSection handleColorChange={handleColorChange} currentColor={color}/>
      </div>
  );
}

export default App;
