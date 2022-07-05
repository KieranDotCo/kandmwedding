import { Container, Paper } from "@mui/material";
import React from "react";
import './Home.scss'

const Home: React.FC = (props) => {
  return <Container maxWidth="lg" className="Home">
    <div className="hero-image"></div>
  </Container>;
};

export default Home;
