import { useParams } from "react-router-dom";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { testCases } from "../data/testCases.js";
import { colors } from "../App.jsx";

export default function TestCase() {
  const { id } = useParams();
  const [isRunning, setIsRunning] = useState(null);

  const testCase = testCases.find((tc) => tc.id === parseInt(id));
  if (!testCase)
    return (
      <Typography variant="h5" sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
        Test Case Not Found
      </Typography>
    );

  const runTest = (tool) => {
    setIsRunning(tool);
    setTimeout(() => setIsRunning(null), 2000);
  };

  return (
    <Box
      className="container"
      sx={{
        textAlign: "left",
        pl: { xs: 0, md: "20px" }, // Remove left padding on mobile
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: colors.primary,
          fontWeight: 700,
          mb: 1.5,
          fontSize: { xs: "1.25rem", md: "1.75rem" },
        }}
      >
        {testCase.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: colors.secondary,
          mb: 1.5,
          fontSize: { xs: "0.85rem", md: "1rem" },
        }}
      >
        <strong>Description:</strong> {testCase.description}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: colors.primary,
          mb: 1,
          fontSize: { xs: "1rem", md: "1.125rem" },
        }}
      >
        Steps:
      </Typography>
      <Box
        component="ul"
        sx={{
          pl: 2,
          mb: 2,
          backgroundColor: "#fff",
          borderRadius: "6px",
          p: { xs: 1, md: 2 },
        }}
      >
        {testCase.steps.map((step, index) => (
          <li key={index}>
            <Typography
              sx={{
                color: colors.secondary,
                fontSize: { xs: "0.8rem", md: "0.875rem" },
              }}
            >
              {step}
            </Typography>
          </li>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Button
          variant="contained"
          onClick={() => runTest("Selenium")}
          disabled={isRunning}
          sx={{
            backgroundColor: "#4CAF50",
            "&:hover": { backgroundColor: "#45a049" },
          }}
        >
          {isRunning === "Selenium" ? "Running..." : "Run with Selenium"}
        </Button>
        <Button
          variant="contained"
          onClick={() => runTest("Playwright")}
          disabled={isRunning}
          sx={{ backgroundColor: colors.primary }}
        >
          {isRunning === "Playwright" ? "Running..." : "Run with Playwright"}
        </Button>
      </Box>
    </Box>
  );
}
