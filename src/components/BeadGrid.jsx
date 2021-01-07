import React from "react";
import styled from "styled-components";

import { InlineRow } from "./InlineRow";
import { OffsetRow } from "./OffsetRow";

const BigBox = styled.div`
  margin-right: 50px;
  padding: 0;
  width: 600px;
  height: 3000px;
  border: 10px solid black;
  position: absolute;
  left: 400px;
  z-index: 1000000;
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

export const BeadGrid = (props) => {
  const topRows = [];
  const bottomRows = [];
  for (let i = 0; i < 40; i++) {
    //FIXME: CHANGE THESE NUMBERS!
    i % 2 === 0
      ? topRows.push(<InlineRow activeColor={props.activeColor} />)
      : topRows.push(<OffsetRow activeColor={props.activeColor} />);
  }
  for (let i = 0; i < 100; i++) {
    bottomRows.push(<InlineRow activeColor={props.activeColor} />);
  }
  return (
    <div>
      <BigBox>
        {topRows}
        <Divider />
        {bottomRows}
      </BigBox>
    </div>
  );
};
