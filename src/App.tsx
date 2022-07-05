import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import Navbar from "./shared/components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
