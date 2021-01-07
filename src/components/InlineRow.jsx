import React, { Fragment } from "react";
import styled from "styled-components";

import { CellComponent } from "./CellComponent";

const Row = styled.div`
  display: flex;
  padding: 0;
  margin-bottom: -4px;
`;

export const InlineRow = React.memo((props) => {
  let cells = [];
  for (let i = 0; i < 40; i++) {
    cells.push(
      <CellComponent
        key={Math.random() * 400}
        id={`Cell ${i}`}
        activeColor={props.activeColor}
      />
    );
  }
  return (
    <Fragment>
      <Row>{cells}</Row>
    </Fragment>
  );
});
