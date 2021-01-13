import React from "react";
import styled from "styled-components";

const ColorContainer = styled.div`
  position: fixed;
  left: 30px;
  top: 100px;
`;

const ColorPicker = styled.input`
  width: 200px;
  height: 100px;
`;
const ColorPaletteContainer = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const ColorPaletteItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  font-size: 23px;
  background-color: ${(props) => props.inputColor};
  cursor: pointer;
  border: none;
`;
const ColorText = styled.p`
  font-size: 20px;
  margin-top: -2px;
  margin-bottom: 0;
`;

const Button = styled.button`
  width: 200px;
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

export const ColorToolSection = (props) => {
  return (
    <ColorContainer>
      <ColorPicker
        type="color"
        name="colorTool"
        id="colorTool"
        onChange={props.handleColorChange}
        value={props.currentColor}
      />
      <Button onClick={props.handleColorPaletteChange}>Add Color!</Button>
      <Button onClick={props.handleDonePickingFormat}>Done </Button>
      <ColorPaletteContainer>
        {props.colorPalette.map((el) => {
          let textDeco =
            props.colorPalette[props.activeColor] === el ? "underline" : "";
          return (
            <>
              <ColorPaletteItem
                onClick={() =>
                  props.handleActiveColorChange(props.colorPalette.indexOf(el))
                }
                inputColor={el}
                style={{ textDecoration: textDeco }}
              ></ColorPaletteItem>
              <ColorText style={{ textDecoration: textDeco }}>{el}</ColorText>
            </>
          );
        })}
      </ColorPaletteContainer>
    </ColorContainer>
  );
};
