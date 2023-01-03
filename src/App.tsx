import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import PageNotFound from "./routes/PageNotFound/PageNotFound";
import Navbar from "./shared/components/Navbar/Navbar";
import bgBottom from "./assets/images/small-bg-bottom.png";
import Details from "./routes/Details/Details";
import TheWedding from "./routes/TheWedding/TheWedding";
import RSVP from "./routes/RSVP/RSVP";
import ScrollToTop from "./shared/components/ScrollToTop/ScrollToTop";
import Invite from "./routes/Invite/Invite";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/the-wedding" element={<TheWedding />} />
            <Route path="/rsvp/" element={<RSVP />} />
            <Route path="/rsvp/:id" element={<RSVP />} />
            <Route path="/invite/:id" element={<Invite />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer className="ta-center">
          <img
            src={bgBottom}
            style={{
              transform: "scaleY(-1)",
              height: "50px",
            }}
            alt=""
          />
          <p
            style={{
              display: "inline-block",
              marginLeft: "1rem",
              marginRight: "1rem",
              marginBottom: "1rem",
              verticalAlign: "bottom",
            }}
          >
            &copy; 2022 Kieran & Mallory
          </p>
          <img
            src={bgBottom}
            style={{ transform: "scaleY(-1) scaleX(-1)", height: "50px" }}
            alt=""
          />
        </footer>
      </div>
    </Router>
  );
}

export default App;
