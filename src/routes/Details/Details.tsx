import React from "react";
import "./Details.scss";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import { Container } from "@mui/material";

const Details: React.FC = () => {
  return (
    <div className="Details">
      <div className="bg-grey">
        <Container maxWidth="lg">
          <h3
            className="cali-title-text ta-center"
            style={{ padding: "3rem 0" }}
          >
            Getting There
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default Details;
