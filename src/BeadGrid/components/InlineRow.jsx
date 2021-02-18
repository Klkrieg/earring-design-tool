import React, { Fragment } from "react";
import styled from "styled-components";

import { CellComponent } from "./CellComponent";

const Row = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: -7px;
`;

export const InlineRow = (props) => {
  //inline rows line up to form solid columns
  //not sure I need a seperate cell component
  //Key is there...maybe dont need

  let cells = [];
  for (let i = 0; i < 40; i++) {
    cells.push(
      <CellComponent
        key={i}
        id={i}
        activeColor={props.activeColor}
        colorPalette={props.colorPalette}
      />
    );
  }

  //using Fragment for styling..gets janky without it.
  return (
    <Fragment>
      <Row>{cells}</Row>
    </Fragment>
  );
};
