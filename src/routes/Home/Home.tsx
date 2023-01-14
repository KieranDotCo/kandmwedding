import { Container, Grid } from "@mui/material";
import React from "react";
import "./Home.scss";
import bgTop from "../../assets/images/small-bg-top.png";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import sheeneMillFront from "../../assets/images/sheene-mill-front.jpg";
import sheeneMillPav from "../../assets/images/sheene-mill-river-pav.jpg";

const Home: React.FC = (props) => {
  return (
    <div className="Home">
      <Container maxWidth="lg" disableGutters={true}>
        <div className="home-center ta-center">
          <div className="home-center-text">
            <h3 className="cali-title-text ">
              Kieran & Mallory's
              <br />
              Wedding
              <br />
              22nd May 2023
            </h3>
          </div>
        </div>
      </Container>
      <div className="bg-grey">
        <Container maxWidth="lg">
          <img src={bgTop} alt="bg top" className="bg-top" />
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={6} order={{ sm: 2, md: 1 }} className="ta-center">
              <h3 className="cali-title-text ">Our Venue</h3>
              <p className="cali-desc-text">
                Steeped in history, Sheene Mill is a magnificent 16th Century
                Mill House set on the River Mel. With outstanding views over the
                old mill pond and Cambridgeshire countryside.
                <br />
              </p>
              <address className="cali-desc-text" style={{ fontStyle: "normal" }}>
                Sheene Mill
                <br />
                37-39 Station Road
                <br /> Melbourn
                <br /> Royston
                <br /> SG8 6DX
              </address>
            </Grid>
            <Grid item md={6} order={{ sm: 1, md: 2 }}>
              <img
                src={sheeneMillFront}
                alt="lanhydrock bench"
                className="img-fluid"
                style={{
                  boxShadow: "50px -50px",
                  color: "rgb(230 249 241 / 50%)",
                }}
              />
            </Grid>
          </Grid>
          <img src={bgBottom} alt="bg bottom" className="bg-bottom" />
        </Container>
      </div>
      <Container maxWidth="lg" style={{ marginBottom: "4rem" }}>
        <Grid
          container
          spacing={3}
          style={{
            marginTop: "3rem",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={6}>
            <img
              src={sheeneMillPav}
              alt="lanhydrock bench"
              className="img-fluid"
              style={{
                boxShadow: "-50px -50px",
                color: "rgb(247 239 233 / 50%)",
              }}
            />
          </Grid>
          <Grid item md={6} className="ta-center">
            <h3 className="cali-title-text">Key Information</h3>
            <p className="cali-desc-text">
              If the weather is dry the wedding will take place outside, please
              dress smart and appropriately.
              <br />
              <br /> Guest Arrival from 1:30pm
              <br />
              Ceremony Begins at 2pm
              <br />
              Evening Guests Arrival 7pm
              <br />
              Last Dance at 11:55pm
            </p>
          </Grid>
        </Grid>
        <img src={bgBottom} alt="bg bottom" className="bg-bottom" />
      </Container>
    </div>
  );
};

export default Home;
