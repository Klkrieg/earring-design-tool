import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  cursor: crosshair;
  width: 13px; //total width of 15px
  height: 13px; //total height of 15px
  border: solid 1px grey;
  display: inline-block;
  margin-top: 0;
  padding: 0;
`;

export const CellComponent = (props) => {
  const [filled, setFilled] = React.useState(true);
  const handleClick = (event) => {
    setFilled((filled) => !filled);
    if (filled === false) {
      event.target.style.backgroundColor = "white";
    } else {
      event.target.style.backgroundColor = props.currentColor;
    }
    console.log(filled);
  };

  return (
    <div>
      <Cell onClick={handleClick} />
    </div>
  );
};
