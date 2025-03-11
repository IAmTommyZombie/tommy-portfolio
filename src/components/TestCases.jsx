import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { testCases } from "../data/testCases.js";
import { colors } from "../App.jsx";
import { motion } from "framer-motion"; // Optional

export default function TestCases() {
  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: colors.background,
        pl: { xs: 0, md: "20px" }, // Remove left padding on mobile
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: colors.primary,
          mb: 2,
          fontSize: { xs: "1.25rem", md: "1.75rem" },
        }}
      >
        Test Cases
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: colors.secondary,
          mb: 3,
          maxWidth: { xs: "90%", md: 800 },
          fontSize: { xs: "0.85rem", md: "1rem" },
        }}
      >
        Rigorous QA testing for flawless apps—20+ cases covering functionality,
        performance, and more.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.5, md: 2 },
          width: "100%",
        }}
      >
        {testCases.map((testCase) => (
          <Box
            key={testCase.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: testCase.id * 0.1 }}
            sx={{
              p: { xs: 1.5, md: 2 },
              borderRadius: "6px",
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: colors.primary,
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.125rem" },
              }}
            >
              {testCase.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: colors.secondary,
                mb: 1.5,
                fontSize: { xs: "0.8rem", md: "0.875rem" },
              }}
            >
              {testCase.description.slice(0, 50)}...
            </Typography>
            <Button
              component={Link}
              to={`/test-case/${testCase.id}`}
              variant="contained"
              sx={{ backgroundColor: colors.primary }}
            >
              View Test Case
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
