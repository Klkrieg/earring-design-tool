import React from "react";
import styled from "styled-components";

const ColorContainer = styled.div`
  margin: 50px auto;
  width: 30vw;
  min-width: 280px;
  min-height: 80vh;
  max-height: 80vh;
  display: flex;
  position: absolute;
  right: 10px;
  top: 58px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 40px 50px;
  border-left: solid 2px #333;
  overflow: scroll;
`;

const ColorPicker = styled.input`
  min-width: 200px;
  min-height: 200px;
  padding: 0;
  border: none;
  cursor: pointer;
`;
const ColorPaletteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const ColorPaletteItem = styled.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 10px 10px 0 0;
  font-size: 23px;
  background-color: ${(props) => props.inputColor};
  cursor: pointer;
  border: none;
`;
const ColorText = styled.p`
  font-size: 20px;
  color: white;
  text-decoration-color: white;
  margin-top: -2px;
  margin-bottom: 0;
`;

const Button = styled.button`
  width: 150px;
  color: #eee;
  font-size: 20px;
  padding: 5px;
  border: none;
  background-color: #414a4c;
  cursor: pointer;
  display: block;
  margin-top: 5px;
  &:hover {
    background-color: #3a4244;
  }
`;

export const ColorToolSection = ({
  handleActiveColorChange,
  handleColorChange,
  handleColorPaletteChange,
  handleDonePickingFormat,
  currentColor,
  colorPalette,
  activeColor,
  //donePickingFormat,
}) => {
  return (
    <ColorContainer>
      <ColorPicker
        type="color"
        name="colorTool"
        id="colorTool"
        onChange={handleColorChange}
        value={currentColor}
      />
      <Button onClick={() => handleColorPaletteChange(currentColor)}>
        Add Color!
      </Button>
      <Button onClick={handleDonePickingFormat}>Done </Button>

      <ColorPaletteContainer>
        {colorPalette.map((el, index) => {
          let textDeco = colorPalette[activeColor] === el ? "underline" : "";
          return (
            <>
              <ColorPaletteItem
                onClick={() =>
                  handleActiveColorChange(colorPalette.indexOf(el))
                }
                inputColor={el}
                style={{ textDecoration: textDeco }}
                key={index}
              >
                <ColorText style={{ textDecoration: textDeco }}>{el}</ColorText>
              </ColorPaletteItem>
            </>
          );
        })}
      </ColorPaletteContainer>
    </ColorContainer>
  );
};
