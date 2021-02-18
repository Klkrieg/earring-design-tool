import React from "react";
import styled from "styled-components";

import { InlineRow } from "./components/InlineRow";
import { OffsetRow } from "./components/OffsetRow";

const BigBox = styled.div`
  margin-right: 50px;
  padding: 30px 0 0 0;
  /* width: 600px; */
  height: 86vh;
  /* border: 10px solid black; */
  position: absolute;
  left: 350px;
  z-index: 100000;
  overflow-x: hidden;
  overflow-y: scroll;
`;
// const Divider = styled.div`
//   width: 100%;
//   height: 2px;
//   background-color: black;
// `;

export const BeadGrid = (props) => {
  //rows must shift of offset to inline after 40 rows for earring design
  const topRows = [];
  const bottomRows = [];
  //loop to render 40 rows alternating inline & offset
  for (let i = 0; i < 40; i++) {
    //FIXME: CHANGE THESE NUMBERS!
    i % 2 === 0
      ? topRows.push(
          <InlineRow
            row={i}
            colorPalette={props.colorPalette}
            activeColor={props.activeColor}
          />
        )
      : topRows.push(
          <OffsetRow
            row={i}
            colorPalette={props.colorPalette}
            activeColor={props.activeColor}
          />
        );
  }
  //renders the next 100 rows inline
  for (let i = 0; i < 100; i++) {
    bottomRows.push(
      <InlineRow
        row={i}
        activeColor={props.activeColor}
        colorPalette={props.colorPalette}
      />
    );
  }
  return (
    <div>
      <BigBox>
        {topRows}
        {/* <Divider /> */}
        {bottomRows}
      </BigBox>
    </div>
  );
};
