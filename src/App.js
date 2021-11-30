import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
