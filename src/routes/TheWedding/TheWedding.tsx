import React from "react";
import "./TheWedding.scss";
import bgBottom from "../../assets/images/small-bg-bottom.png";
import { Container } from "@mui/material";

const TheWedding: React.FC = () => {
  return (
    <div className="TheWedding">
      <div className="bg-grey">
        <Container maxWidth="lg" className="ta-center">
          <h2
            className="cali-title-text"
            style={{ paddingTop: "3rem", paddingBottom: "1rem" }}
          >
            The Big Day
          </h2>
          <strong>Date</strong>
          <p className="ta-center">Monday 22nd May 2023</p>
          <strong>Guest Arrive</strong>
          <p className="ta-center">1:30pm</p>
          <strong>Venue Address</strong>
          <address style={{ fontStyle: "normal" }}>
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
        <h2
          className="cali-title-text ta-center"
          style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
        >
          Order of Service
        </h2>
        <div className="order-of-service">
          <h6 className="order-text">13:30 - Day Guests Arrive</h6>
          <h6 className="order-text">14:00 - Ceremony</h6>
          <h6 className="order-text">14:30 - Drinks Reception</h6>
          <h6 className="order-text">16:00 - Seated for Meal</h6>
          <h6 className="order-text">19:00 - Evening Guests Arrive</h6>
          <h6 className="order-text">19:30 - Cutting the Cake</h6>
          <h6 className="order-text">19:30 - First Dance</h6>
          <h6 className="order-text">20:30 - Evening Food</h6>
          <h6 className="order-text">23:30 - Finish</h6>
        </div>
        <br />
      </Container>
      <div className="bg-grey">
        <Container maxWidth="lg" style={{ paddingBottom: "2rem" }}>
          <img
            src={bgBottom}
            alt="vine divider"
            className="vine-divider vine-divider1"
          />
          <h2
            className="cali-title-text ta-center"
            style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
          >
            Food/Allergies
          </h2>
          <p className="ta-center">
            A BBQ Wedding Breakfast will be provided for day guests, if you have
            any allergies or dietary requirements please let us know when
            completing your RSVP. If you've already completed your RSVP and
            haven't advised us of dietary requirements please contact us as soon
            as possible.
            <br />
            <br />
            Evening food will also be provided, please let us know of any
            dietary requirements.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default TheWedding;
