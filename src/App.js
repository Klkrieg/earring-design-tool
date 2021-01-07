import React from "react";
import "./App.css";
import styled from "styled-components";

import { BeadGrid } from "./components/BeadGrid";
import { ColorToolSection } from "./components/ColorToolSection";

const Button = styled.button`
  width: 200px;
  font-size: 20px;
  border: none;
  background-color: #7ba5b5;
  cursor: pointer;
  display: block;
`;

const App = () => {
  const [color, setColor] = React.useState("#62664E");
  const [activeColor, setActiveColor] = React.useState("#62664E");
  const [colorPallette, setColorPallette] = React.useState([]);
  const [donePickingFormat, setDonePickingFormat] = React.useState(false);

  React.useState(() => {
    console.log(activeColor);
  }, [activeColor]);
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleColorPalletteChange = () => {
    setColorPallette((colorPallette) => [...colorPallette, color]);
  };
  const handleActiveColorChange = (index) => {
    //sets active color to the index in the color palatte of the clicked color div
    console.log(index);
    setActiveColor(colorPallette[index]);
  };
  const handleDonePickingFormat = () => {
    setDonePickingFormat(!donePickingFormat);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maple's Maker Corner</h1>
      </header>
      {donePickingFormat && <BeadGrid activeColor={activeColor} />}
      <ColorToolSection
        handleColorChange={handleColorChange}
        handleActiveColorChange={handleActiveColorChange}
        colorPallette={colorPallette}
        currentColor={color}
      >
        <Button onClick={handleColorPalletteChange}>Add Color!</Button>
        <Button onClick={handleDonePickingFormat}>Done </Button>
      </ColorToolSection>
    </div>
  );
};

export default App;
