import React from "react";
import "./TheWedding.scss";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import { Container } from "@mui/material";

const TheWedding: React.FC = () => {
  const lipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <div className="Details">
      <div className="bg-grey">
        <Container maxWidth="lg" className="ta-center">
          <h2
            className="cali-title-text"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            The Big Day
          </h2>
          <strong>When</strong>
          <p className="ta-center">Monday 22nd May 2023, 13:30</p>
          <br />
          <br />
          <strong>Where</strong>
          <address>
            Sheene Mill
            <br />
            37-39 Station Road
            <br /> Melbourn
            <br /> Royston
            <br /> SG8 6DX
          </address>
          <br />
          <br />
          <br />
        </Container>
      </div>
      <Container maxWidth="lg" style={{ paddingBottom: "2rem" }}>
        <img
          src={bgBottom}
          alt="vine divider"
          className="vine-divider vine-divider1"
        />
        <h2 className="plain-title-text ta-center">Accomodation</h2>
        <p>
          {lipsum} {lipsum}
        </p>
      </Container>
      <div className="bg-grey">
        <Container maxWidth="lg" style={{ paddingBottom: "2rem" }}>
          <img
            src={bgBottom}
            alt="vine divider"
            className="vine-divider vine-divider1"
          />
          <h2 className="plain-title-text ta-center">Transportation</h2>
          <p>
            {lipsum} {lipsum}
          </p>
        </Container>
      </div>
    </div>
  );
};

export default TheWedding;
