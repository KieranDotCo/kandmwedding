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
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
      variant: "text",
    },
    {
      name: "Details",
      url: "/details",
      variant: "text",
    },
    {
      name: "The Wedding",
      url: "/the-wedding",
      variant: "text",
    },
    {
      name: "RSVP",
      url: "/rsvp",
      variant: "outlined",
    },
  ];

  return (
    <div className="Navbar">
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ fontFamily: "Bad Script, cursive", fontSize: "36px" }}
            >
              Kieran & Mallory
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {pages.map((item) => (
                <Button
                  className={
                    "nav-link " +
                    (item.url === location.pathname ? "active" : "")
                  }
                  key={item.name}
                  sx={{ color: "black", ml: 1, mr: 1 }}
                  variant={item.variant as any}
                  component={Link}
                  to={item.url}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
              <IconButton
                id="basic-button"
                aria-controls={anchorElNav !== null ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElNav !== null ? "true" : undefined}
                onClick={handleOpenNavMenu}
                style={{color: 'black'}}
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorElNav}
                open={anchorElNav !== null}
                onClose={handleCloseNavMenu}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {pages.map((item) => (
                  <MenuItem
                    key={item.name}
                    sx={{ color: "black"}}
                    component={Link}
                    to={item.url}
                    onClick={handleCloseNavMenu}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
