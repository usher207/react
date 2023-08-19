import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FlexColumn } from "../shared/Flex";
import { DashboardContext } from "../../contexts/DashboardContext";

export const Dashboard = () => {
  const { user } = useContext(DashboardContext)!;

  if (!user) return <h1>Not authorized</h1>

  return (
    <FlexColumn width="100%">
      <h1>Dasboard, Hello {user?.email}</h1>
    </FlexColumn>
  );
};
