import { Box, Typography, Link as MuiLink, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { colors } from "../App.jsx";

export default function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: colors.primary,
    transition: "color 0.3s",
    fontSize: { xs: "0.8rem", md: "1rem" },
    "&:hover": { color: colors.accent, textDecoration: "underline" },
  };

  return (
    <Box
      className="container"
      sx={{
        textAlign: "center",
        py: { xs: 1.5, md: 3 },
        mt: 2,
        pl: { xs: 0, md: "20px" }, // Remove left padding on mobile
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: colors.secondary,
          mb: 1,
          fontSize: { xs: "0.75rem", md: "0.875rem" },
          mx: "auto",
          maxWidth: { xs: "90%", md: "auto" },
        }}
      >
        <p>© 2025 Thomas Scales | Front-End Developer</p>
        <p>Built with React & Tailwind CSS | Optimized for Performance</p>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, md: 2 },
          alignItems: "center",
          width: "100%",
          maxWidth: { xs: "90%", md: "auto" },
          mx: "auto",
        }}
      >
        <MuiLink
          href="https://www.linkedin.com/in/thomasscales/"
          target="_blank"
          rel="noopener"
          sx={linkStyle}
        >
          <LinkedInIcon
            sx={{
              verticalAlign: "middle",
              mr: 0.5,
              fontSize: { xs: 16, md: 20 },
            }}
          />{" "}
          LinkedIn
        </MuiLink>
        <MuiLink
          href="https://github.com/IAmTommyZombie"
          target="_blank"
          rel="noopener"
          sx={linkStyle}
        >
          <GitHubIcon
            sx={{
              verticalAlign: "middle",
              mr: 0.5,
              fontSize: { xs: 16, md: 20 },
            }}
          />{" "}
          GitHub
        </MuiLink>
        <MuiLink href="mailto:your.email@example.com" sx={linkStyle}>
          <EmailIcon
            sx={{
              verticalAlign: "middle",
              mr: 0.5,
              fontSize: { xs: 16, md: 20 },
            }}
          />{" "}
          Contact Me
        </MuiLink>
      </Box>
    </Box>
  );
}
