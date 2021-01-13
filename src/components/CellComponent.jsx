import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  cursor: crosshair;
  width: 14px; //total width of 15px
  height: 14px; //total height of 15px
  border: solid 0.5px grey;
  display: inline-block;
  margin-top: 0;
  padding: 0;
`;

export const CellComponent = (props) => {
  const [filled, setFilled] = React.useState(true);
  const activeColor = props.activeColor;
  const handleClick = (event) => {
    setFilled((filled) => !filled);
    if (filled === false) {
      event.target.style.backgroundColor = "white";
    } else {
      event.target.style.backgroundColor = props.colorPalette[activeColor];
    }
  };

  return (
    <div>
      <Cell key={props.key} id={props.cell} onClick={handleClick} />
    </div>
  );
};
