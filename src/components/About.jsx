import React from "react";
import { Box, Grid, Typography, Button,Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"; // assuming you're using React Router

const About = () => {
  const navigate = useNavigate();

  return (
    <Box
      id="about"
      sx={{
        // minHeight: "100vh",
        // minwidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 4 },
        pt: { xs: "56px", sm: "64px" },
        overflowX: "hidden", // match Hero/AppBar spacing
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
                borderLeft: "4px solid #be7821ff",
                background:
                 "linear-gradient(90deg, #a57c00, #c68439ff), transparent)",
                borderRadius: "8px",
                py: 1.5,
              }}
            >
              Hi, I’m <strong>Himanshu Gupta</strong>, currently pursuing a
              B.Tech at RKGIT Ghaziabad. I am a passionate MERN Stack Developer
              with hands-on experience building multiple projects using{" "}
              <strong>React, Express, Node.js, MongoDB</strong> and modern
              JavaScript technologies.
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
              Beyond coding, I enjoy building projects that blend logic,
              creativity, and modern design. I am focused on continuous
              learning, keeping up with emerging technologies, and creating
              solutions that are efficient, scalable, and visually appealing.
              <br />
              <br />
              My goal is to leverage my skills in software development and
              design to build innovative products and contribute meaningfully to
              the tech ecosystem.
            </Typography>

            <Box textAlign="center" mt={4}>
      <Stack direction="row" spacing={2} justifyContent="center">
        {/* View Resume Button */}
        <Button
          onClick={() => window.open("/resume.pdf", "_blank")}
          sx={{
            background: "linear-gradient(90deg, #a57c00, #c68439ff)",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.2,
            borderRadius: "30px",
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "0px 4px 15px rgba(209, 120, 37, 0.5)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #ff4ecd, #8300d4)",
              transform: "scale(1.05)",
            },
          }}
        >
          View Resume
        </Button>

        {/* Download Resume Button */}
        <Button
          href="/resume.pdf"
          download="Himanshu_Gupta_Resume.pdf"
          sx={{
            background: "linear-gradient(90deg, #a57c00, #c68439ff)",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.2,
            borderRadius: "30px",
            fontSize: "1rem",
            textTransform: "none",
            boxShadow: "0px 4px 15px rgba(255,78,205,0.5)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #8300d4, #ff4ecd)",
              transform: "scale(1.05)",
            },
          }}
        >
          Download Resume
        </Button>
      </Stack>
    </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;

