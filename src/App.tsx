import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { FlexColumn } from "./components/shared/Flex";
import { Auth } from "./components/static/Auth";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { DashboardContextProvider } from "./contexts/DashboardContext";
import useCounter from 'React\dashboard\src\hooks\useCounter.tsx';

function App() {
  return (
      <FlexColumn
        width="100%"
      >
        <DashboardContextProvider>
          <RouterProvider router={router} />
        </DashboardContextProvider>
      </FlexColumn>
  );
}
function Counter() {
  const [counter, increment, decrement] = useCounter(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
export default Counter;





