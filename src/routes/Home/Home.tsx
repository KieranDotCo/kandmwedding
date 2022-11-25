import { Container, Grid } from "@mui/material";
import React from "react";
import "./Home.scss";
import bgTop from "../../assets/images/small-bg-top.png";
import bgBottom from "../../assets/images/small-bg-bottom.png";

const Home: React.FC = (props) => {
  return (
    <div className="Home">
      <Container maxWidth="lg">
        <div className="home-center ta-center">
          <div className="home-center-text">
            <h3 className="cali-title-text ">
              Kieran & Mallory
              <br />
              22nd May 2023
              <br />
              Sheene Mill
            </h3>
          </div>
        </div>
      </Container>
      <div className="bg-grey">
        <Container maxWidth="lg">
          <img src={bgTop} alt="bg top" className="bg-top" />
          <Grid container spacing={3}>
            <Grid item md={6}>
              <h3 className="cali-title-text ">Venue</h3>
              <p className="cali-desc-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
          <img src={bgBottom} alt="bg bottom" className="bg-bottom" />
        </Container>
      </div>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          style={{
            marginTop: "3rem",
          }}
        >
          <Grid item md={6}></Grid>
          <Grid item md={6}>
            <h3 className="cali-title-text ">Venue</h3>
            <p className="cali-desc-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid>
        </Grid>
        <img src={bgBottom} alt="bg bottom" className="bg-bottom" />
      </Container>
    </div>
  );
};

export default Home;
