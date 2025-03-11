import { Link } from "react-router-dom";
import { Box, Typography, Button, Chip } from "@mui/material";
import { colors } from "../App.jsx";
import { motion } from "framer-motion"; // Optional

const CustomButton = ({ variant, children, to, href }) => (
  <Link
    to={to}
    href={href}
    style={{ textDecoration: "none" }}
    target={href ? "_blank" : undefined}
  >
    <Button
      variant={variant}
      sx={{
        m: 0.5,
        fontSize: { xs: "0.8rem", md: "1rem" },
        padding: { xs: "6px 12px", md: "8px 16px" },
        borderRadius: "6px",
        backgroundColor:
          variant === "contained" ? colors.primary : "transparent",
        color: variant === "contained" ? "#fff" : colors.primary,
        borderColor: colors.primary,
        width: { xs: "100%", sm: "auto" },
        maxWidth: "200px",
        display: "block",
        mx: "auto",
      }}
    >
      {children}
    </Button>
  </Link>
);

export default function Home() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS/SASS",
    "Tailwind CSS",
    "Next.js",
    "REST APIs",
    "GraphQL",
    "Webpack / Vite",
    "Unit Testing",
    "React Testing Library",
    "Jira",
    "QA Testing",
    "Playwright",
    "Selenium",
    "End-to-End (E2E) Testing",
    "Git / GitHub / Gitlab",
    "CI/CD",
    "Performance Optimization",
    "Agile / Scrum",
  ];

  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "calc(100vh - 100px)",
        textAlign: "center",
        flexGrow: 1,
        pl: { xs: 0, md: "20px" },
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: colors.primary,
          mb: 1.5,
          fontSize: { xs: "1.5rem", md: "2rem" },
          width: "100%",
          textAlign: "center",
        }}
      >
        Thomas Scales | Front-End Developer & QA Specialist
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: colors.secondary,
          maxWidth: { xs: "90%", md: 600 },
          mb: 2,
          fontSize: { xs: "0.9rem", md: "1rem" },
          mx: "auto",
        }}
      >
        I build high-performance React applications and ensure flawless
        functionality through rigorous testing. Explore my work.
      </Typography>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              backgroundColor: colors.primary,
              color: "#fff",
              fontSize: { xs: "0.8rem", md: "0.875rem" },
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, md: 2 },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CustomButton variant="contained" to="/react-apps">
          View React Apps
        </CustomButton>
        <CustomButton variant="outlined" /*to="/test-cases"*/>
          View Test Cases (coming soon)
        </CustomButton>

        <CustomButton variant="outlined" href="/resume.pdf">
          Download Resume
        </CustomButton>
      </Box>
    </Box>
  );
}
