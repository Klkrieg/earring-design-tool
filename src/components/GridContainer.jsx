import React from "react";
import styled from "styled-components";

import { InlineRow } from "./InlineRow";

const BigBox = styled.div`
  margin-right: 50px;
  padding: 0;
  width: 600px;
  height: 3000px;
  border: 2px solid black;
  display: flex;
  position: absolute;
  left: 400px;
  top: 10;
`;

export const BeadGrid = (props) => {

  return (
    <div>
      <BigBox>
        <InlineRow currentColor={props.currentColor} />
      </BigBox>
    </div>
  );
};
