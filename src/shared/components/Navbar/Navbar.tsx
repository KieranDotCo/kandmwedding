import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const location = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function getRemainingTime() {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date() as any;
    const secondDate = new Date(2023, 5, 22) as any;

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays;
  }

  const pages = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "RSVP",
      url: "/rsvp",
    },
  ];

  return (
    <div className="Navbar">
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar style={{paddingLeft: 0, paddingRight: 0}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Kieran & Mallory
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {pages.map((item) => (
                <Button key={item.name} sx={{ color: "black" }}>
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
