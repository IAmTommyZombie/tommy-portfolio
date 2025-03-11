import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../App.jsx";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: { xs: "0.9rem", md: "1rem" },
    transition: "color 0.3s",
    "&:hover": { color: colors.accent },
  };

  const drawerList = (
    <Box
      sx={{ width: 250, backgroundColor: colors.primary, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "Test Cases", "React Apps"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={
              text === "Home"
                ? "/"
                : text === "Test Cases"
                ? "/test-cases"
                : "/react-apps"
            }
            sx={{
              color: "white",
              "&:hover": { backgroundColor: colors.accent },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: `linear-gradient(to right, ${colors.primary}, #12344d)`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: { xs: 1, md: 2 },
          minHeight: { xs: "auto", md: 64 },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.25rem" },
            flexGrow: 1,
          }}
        >
          Thomas Scales - Front End Developer
        </Typography>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: { xs: 1, md: 2 },
            alignItems: "center",
          }}
        >
          <Link to="/" style={navStyle}>
            Home
          </Link>
          <Link to="/react-apps" style={navStyle}>
            React Apps
          </Link>
          <Link /*to="/test-cases" */ style={navStyle}>
            Test Cases <br />
            (coming soon)
          </Link>
        </Box>
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
