import React, { Fragment } from "react";
import styled from "styled-components";

import { CellComponent } from "./CellComponent";

const OffRow = styled.div`
  display: flex;
  position: relative;
  right: 7px;
  padding: 0;
  margin-bottom: -4px;
`;

export const OffsetRow = (props) => {
  let cells = [];
  for (let i = 0; i < 41; i++) {
    cells.push(
      <CellComponent
        key={Math.random() * 400}
        id={`Cell:${i}`}
        activeColor={props.activeColor}
      />
    );
  }
  return (
    <Fragment>
      <OffRow>{cells}</OffRow>
    </Fragment>
  );
};
