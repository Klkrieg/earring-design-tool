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
const ColorPalletteContainer = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const ColorPalletteItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background-color: ${(props) => props.inputColor};
`;

export const ColorToolSection = (props) => {
  // const palletteItemArray = [];
  // for (let i = 0; i < props.colorPallette; i++) {
  //   palletteItemArray.push(
  //     <ColorPalletteItem inputColor={props.colorPallette[i]} />
  //   );
  // }

  return (
    <ColorContainer>
      <ColorPicker
        type="color"
        name="colorTool"
        id="colorTool"
        onChange={props.handleColorChange}
        value={props.currentColor}
      />
      {props.children}
      <ColorPalletteContainer>
        {props.colorPallette.map((el) => (
          <ColorPalletteItem
            onClick={() =>
              props.handleActiveColorChange(props.colorPallette.indexOf(el))
            }
            inputColor={el}
          >
            {el}
          </ColorPalletteItem>
        ))}
      </ColorPalletteContainer>
    </ColorContainer>
  );
};
