import React from "react";
import styled from "styled-components";

import { BeadGrid } from "./BeadGrid/BeadGrid";
import { ColorToolSection } from "./ColorTools/ColorToolSection";

const Header = styled.header`
  text-align: center;
  height: 80px;
  color: #586b46;
  font-size: 20px;
  border-bottom: solid 2px #333;
`;
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  font-style: underline;
`;

const App = () => {
  //current color in the color picker tool
  const [color, setColor] = React.useState("#16394f");
  //active color to fill cells
  const [activeColorIndex, setActiveColorIndex] = React.useState(0);
  //color palatte to reduce re-renders?
  const [colorPalette, setColorPalette] = React.useState([]);
  //Will eventually be used to pick bead grid layout and set palatte
  const [donePickingFormat, setDonePickingFormat] = React.useState(false);

  //Find a way to determine bead grid from here.
  //40 rows of offset columns
  //top rows = [ [], [],[]] //Each nested array is a row, each nested array contains 40 or 41 cells
  //loop so that

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleColorPaletteChange = (col) => {
    if (colorPalette.indexOf(col) > 0) {
      return;
    }
    setColorPalette((colorPalette) => [...colorPalette, color]);
  };
  const handleActiveColorChange = (index) => {
    //sets active color to the index in the color palatte of the clicked color div
    console.log(index);
    setActiveColorIndex(index);
  };
  const handleDonePickingFormat = () => {
    setDonePickingFormat(!donePickingFormat);
  };

  return (
    <div className="App">
      <Header className="App-header">
        <h1>Maple's Maker Corner</h1>
      </Header>
      {/* If donePickingFormat is true, render the beadGrid */}
      {donePickingFormat && (
        <BeadGrid colorPalette={colorPalette} activeColor={activeColorIndex} />
      )}
      <ColorToolSection
        handleColorChange={handleColorChange}
        handleActiveColorChange={handleActiveColorChange}
        colorPalette={colorPalette}
        activeColor={activeColorIndex}
        currentColor={color}
        handleDonePickingFormat={handleDonePickingFormat}
        handleColorPaletteChange={handleColorPaletteChange}
        donePickingFormat={donePickingFormat}
      ></ColorToolSection>
      <Footer>Karson Krieg ©2020 </Footer>
    </div>
  );
};

export default App;
