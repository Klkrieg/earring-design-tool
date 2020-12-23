import React, { Fragment } from "react";

import { CellComponent } from "./CellComponent";

export const OffsetRow = (RowNum) => {
    
  let cells = [];
  for (let i = 0; i < 41; i++) {
    cells.push(
      <CellComponent key={Math.random() * 400} id={`Row:${RowNum} Cell:${i}`} />
    );
  }
  return <Fragment>{cells}</Fragment>;
};
