import React from "react";
import { Route } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Route path="/" component={Greeting} />
    </div>
  );
};

export default App;
