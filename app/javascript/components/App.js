import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h2>text text</h2>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
