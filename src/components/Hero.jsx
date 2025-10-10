import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button, Fade } from "@mui/material";

const Hero = () => {
  const titles = ["Himanshu", "Full Stack Developer", "Coder", "Designer", "Problem Solver",];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setShow(true); // fade in
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
  id="home"
      sx={{
        marginTop: "10px",
        height: "100vh",
        // width: "100vw",
        // minwidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        pt: { xs: '56px', sm: '64px' }, // match AppBar height
         overflowX: "hidden",
      }}
    >
      {/* Rectangular Box with Curved Edges */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: { xs: 3, sm: 5, md: 8 },
          maxWidth: "1200px",
          width: "90%",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={4}
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
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Hi, I’m {" "}
              <Box sx={{ minWidth: "180px", display: "inline-block" }}>
                <Fade in={show} timeout={400}>
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(90deg, #a57c00, #c68439ff)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                      animation: "gradientFlow 3s ease infinite",
                    }}
                  >
                    {titles[index]}
                  </Box>
                </Fade>
              </Box>
            </Typography>

        <Typography
  variant="h6"
  sx={{
    color: "#f2e1e1ff",
    mb: 3,
    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
    lineHeight: 1.6,
    pl: 2,
    borderLeft: "4px solid #c46e18ff", // accent line
    background: "linear-gradient(90deg, #a57c00, #c68439ff), transparent)",
    borderRadius: "8px",
    py: 1,
    animation: "fadeIn 2s ease-in-out",
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(10px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  }}
>
  A curious mind with a keyboard.  
  Forever experimenting, learning,  
  and building the future—one app at a time. <br />
  I build ideas that live on the web.  
  Blending design, logic, and creativity  
  to turn imagination into reality.
</Typography>



          <Button
  variant="contained"
  size="large"
  sx={{
    borderRadius: "30px",
    background: "linear-gradient(90deg, #a57c00, #c68439ff)",
    px: 4,
    py: 1.5,
    textTransform: "none",
    fontSize: "1rem",
    "&:hover": {
      background: "linear-gradient(45deg, #3f51b5, #7f00d448)",
    },
  }}
  onClick={() => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  View My Work
</Button>

          </Grid>

          {/* Right Side - Image */}
          <Box
  component="img"
  src="/Himanshu2.jpg"
  alt="Himanshu"
  sx={{
    width: { xs: "65%", sm: "55%", md: "70%" },
    maxWidth: "420px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 20px rgba(207, 113, 42, 0.3)",
    transition: "all 0.5s ease",
    transform: "translateY(0px)",
    "&:hover": {
      transform: "translateY(-10px) scale(1.02)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.7), 0 0 30px rgba(181, 100, 29, 0.5)",
    },
  }}
/>

        </Grid>
      </Box>

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;




