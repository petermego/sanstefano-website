import { Fragment, useEffect, useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/design/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/design/NotFound";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
