import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import TestCases from "./components/TestCases.jsx";
import TestCase from "./pages/TestCase.jsx";
import OtherApps from "./pages/OtherApps.jsx";

export const colors = {
  primary: "#1a3c5a",
  secondary: "#555",
  background: "#f4f4f8",
  accent: "#ff6f61",
  hoverBackground: "#acadae",
  hoverBorder: "#155bb5",
};

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    background: { default: colors.background },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: { fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } },
    body1: { fontSize: { xs: "0.9rem", md: "1rem" } },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          padding: { xs: "6px 12px", md: "8px 16px" },
          fontSize: { xs: "0.8rem", md: "1rem" },
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
          "&:hover": { backgroundColor: colors.accent },
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            width: "100vw",
            mx: 0,
            backgroundColor: colors.background,
            position: "relative",
            overflowX: "hidden",
          }}
        >
          <Header />
          <Box
            className="container"
            sx={{ pt: { xs: 10, md: 12 }, flexGrow: 1 }}
          >
            <Routes>
              {console.log("Rendering Routes")}
              <Route path="/" element={<Home />} />
              <Route path="/test-cases" element={<TestCases />} />
              <Route path="/test-case/:id" element={<TestCase />} />
              <Route path="/react-apps" element={<OtherApps />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}
