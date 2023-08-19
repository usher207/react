import React from "react";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/Flex";

export const Landing = () => {
  return (
    <FlexColumn width="100%">
      <FlexRow
        as="header"
        width="100%"
        background="grey"
        padding="10px"
        alignItems="center"
      >
        <Link to="/login">Login</Link>
      </FlexRow>
    </FlexColumn>
  );
};
