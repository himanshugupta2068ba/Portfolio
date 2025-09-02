import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: '100vh' },
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #373737ff, #171717ff)',
        px: { xs: 0, sm: 0, md: 0 },
        overflowX: 'hidden',
        pt: { xs: '56px', sm: '64px',md:'0'}, // Add top padding for AppBar height
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ width: '100vw', maxWidth: '1400px', mx: 'auto' }}
      >
        {/* Left Side - Text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
            }}
          >
            Hi, I’m{" "}
            <Box component="span" sx={{ color: "#00bcd4" }}>
              Himanshu
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#cccccc",
              mb: 3,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            }}
          >
            A passionate Developer who loves building stylish web apps 🚀
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "30px",
              background: "linear-gradient(45deg, #00bcd4, #3f51b5)",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                background: "linear-gradient(45deg, #3f51b5, #00bcd4)",
              },
            }}
          >
            View My Work
          </Button>
        </Grid>

        {/* Right Side - Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src="/Himanshu.jpg"
            alt="Himanshu"
            sx={{
              width: { xs: "65%", sm: "55%", md: "70%" },
              maxWidth: "420px",
              borderRadius: "50%",
              boxShadow: "0px 8px 30px rgba(0,0,0,0.5)",
              objectFit: "cover",
            }}
          />
          <br /><br />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
