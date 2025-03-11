import { Box, Typography, Button } from "@mui/material";
import { otherApps } from "../data/otherApps.js";
import { colors } from "../App.jsx";
import { motion } from "framer-motion"; // Optional

export default function OtherApps() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        textAlign: "center",
        p: { xs: 2, md: 4 }, // Less padding on mobile
        backgroundColor: colors.background,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: colors.primary,
          mb: 2,
          fontSize: { xs: "22px", md: "28px" },
        }}
      >
        React Apps
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: colors.secondary, mb: 4, maxWidth: { xs: 300, md: 800 } }}
      >
        Explore my front-end projects built with React—optimized for
        performance, designed for usability, and ready to impress.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // Single column on mobile
            sm: "repeat(auto-fit, minmax(250px, 1fr))", // Grid on larger screens
          },
          gap: { xs: 2, md: 3 },
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {otherApps.map((app) => (
          <Box
            key={app.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: app.id * 0.1 }}
            sx={{
              p: 2,
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
            }}
          >
            <img
              src={app.image}
              alt={app.name}
              style={{
                width: "100%", // Full width on mobile
                maxWidth: "150px",
                height: "150px", // Maintain aspect ratio
                borderRadius: "8px",
                mb: "10px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: colors.primary,
                fontWeight: 600,
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {app.name}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.secondary, mb: 2 }}>
              {app.description}
            </Typography>
            <Button
              variant="contained"
              href={app.link}
              sx={{ backgroundColor: colors.primary }}
            >
              Learn More
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
