import React, { Fragment } from "react";

import { CellComponent } from "./CellComponent";

export const InlineRow = (props) => {
  let cells = [];
  for (let i = 0; i < 40; i++) {
    cells.push(
      <CellComponent
        currentColor={props.currentColor}
        key={Math.random() * 400}
        id={`Cell ${i}`}
      />
    );
  }
  return <Fragment>{cells}</Fragment>;
};
