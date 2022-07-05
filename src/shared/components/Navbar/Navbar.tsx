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
      <h1 className="ta-center caligraphy name-header">Kieran & Mallory</h1>
      <h2 className="ta-center caligraphy sub-header">22nd May 2023 &bull; Sheene Mill</h2>
      <h2 className="ta-center caligraphy sub-header">{getRemainingTime()} Days To Go!</h2>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                margin: "auto",
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                  className={
                    (location.pathname === page.url ? "active" : "") +
                    " nav-link"
                  }
                  component={Link}
                  to={page.url}
                >
                  {page.name}
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
