import { Fragment, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/design/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/design/NotFound";
import Submission from "./components/pages/Submission";

function App() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/submission" exact element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
