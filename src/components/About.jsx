import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 4 },
        pt: { xs: '56px', sm: '64px' }, // match Hero/AppBar spacing
      }}
    >
      {/* Rectangular Glass Box */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1200px",
          width: "90%",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Side - About Text */}
                   <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "white",
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#f2e1e1ff",
                lineHeight: 1.8,
                mb: 3,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                pl: 2,
                borderLeft: "4px solid #8300d4",
                background: "linear-gradient(90deg, rgba(131,0,212,0.15), transparent)",
                borderRadius: "8px",
                py: 1.5,
              }}
            >
              Hi, I’m <strong>Himanshu Gupta</strong>, currently pursuing a B.Tech at RKGIT Ghaziabad. I am a passionate MERN Stack Developer with hands-on experience building multiple projects using <strong>React, Express, Node.js, MongoDB</strong> and modern JavaScript technologies.
            </Typography>

           

            <Typography
              variant="body1"
              sx={{
                color: "#f2e1e1ff",
                lineHeight: 1.8,
                mb: 3,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              }}
            >
              Beyond coding, I enjoy building projects that blend logic, creativity, and modern design. I am focused on continuous learning, keeping up with emerging technologies, and creating solutions that are efficient, scalable, and visually appealing.  
              <br /><br />
              My goal is to leverage my skills in software development and design to build innovative products and contribute meaningfully to the tech ecosystem.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
