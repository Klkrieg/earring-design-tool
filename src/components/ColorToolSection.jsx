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

export const ColorToolSection = (props) => {
  
  return (
    <ColorContainer>
      <label htmlFor="colorTool"></label>
      <ColorPicker
        type="color"
        name="colorTool"
        id="colorTool"
        onChange={props.handleColorChange}
        value={props.currentColor}
      />
    </ColorContainer>
  );
};
