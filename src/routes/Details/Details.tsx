import React from "react";
import "./Details.scss";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import { Container } from "@mui/material";

const Details: React.FC = () => {
  const lipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <div className="Details">
      <div className="bg-grey">
        <Container maxWidth="lg">
          <h2
            className="cali-title-text ta-center"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            Getting There
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6954386735347!2d0.010728416038481882!3d52.08527387973419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d87f42a7bec5a5%3A0x4c319711d620b2db!2sSheene%20Mill%20Weddings!5e0!3m2!1sen!2suk!4v1669388579117!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Sheene Mill"
          ></iframe>
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

export default Details;
