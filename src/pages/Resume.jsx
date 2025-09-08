import React from "react";
import { Box, Grid, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* Main Resume Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 8, md: 6 },
          px: 2,
        }}
      >
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "24px",
            padding: { xs: 3, sm: 5, md: 7 },
            maxWidth: "1100px",
            width: "95%",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 4,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Resume
          </Typography>

          {/* Objective */}
          <Typography variant="h5" sx={{ color: "#8300d4", mb: 2, fontWeight: "bold" }}>
            Objective
          </Typography>
          <Typography sx={{ color: "#f2e1e1ff", mb: 4, lineHeight: 1.8 }}>
            Motivated web development student with a strong foundation in HTML,
            CSS, JavaScript, Node.js, Express.js, REST and SQL, eager to
            contribute to front-end and back-end projects in a collaborative
            tech team.
          </Typography>

          {/* Education */}
          <Typography variant="h5" sx={{ color: "#8300d4", mb: 2, fontWeight: "bold" }}>
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="RKGIT, Ghaziabad — B.Tech in IT (2023 - 2027)"
                secondary="Focus on Web Development, Data Structures, and Software Engineering Fundamentals"
                primaryTypographyProps={{ style: { color: "white", fontWeight: "bold" } }}
                secondaryTypographyProps={{ style: { color: "#f2e1e1ff" } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Vertex Global School, Gorakhpur — Class 10th & 12th (2019 - 2023)"
                secondary="Scored 87% in PCM (12th) & 91.2% in 10th"
                primaryTypographyProps={{ style: { color: "white", fontWeight: "bold" } }}
                secondaryTypographyProps={{ style: { color: "#f2e1e1ff" } }}
              />
            </ListItem>
          </List>

          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Projects */}
          <Typography variant="h5" sx={{ color: "#8300d4", mb: 2, fontWeight: "bold" }}>
            Projects
          </Typography>

          <Typography sx={{ color: "white", fontWeight: "bold" }}>ShareSphere</Typography>
          <Typography sx={{ color: "#f2e1e1ff", mb: 2 }}>
            A donation and support platform connecting donors with individuals in need. Built with HTML, CSS, JS.  
            <br />
            <a href="https://sharespheres.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#8300d4" }}>
              View Project
            </a>
          </Typography>

          <Typography sx={{ color: "white", fontWeight: "bold" }}>Weather App</Typography>
          <Typography sx={{ color: "#f2e1e1ff", mb: 2 }}>
            Real-time weather app using React.js & OpenWeather API with a clean UI using Material-UI/Tailwind CSS.  
            <br />
            <a href="https://weatherbycitiesname.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#8300d4" }}>
              View Project
            </a>
          </Typography>

          <Typography sx={{ color: "white", fontWeight: "bold" }}>HimxMeet</Typography>
          <Typography sx={{ color: "#f2e1e1ff", mb: 2 }}>
            A real-time video conferencing and chat platform built with WebRTC, Socket.io, and Node.js. Includes screen
            sharing, group chat, and secure meeting rooms with a responsive UI.  
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "#8300d4" }}>
              View Project
            </a>
          </Typography>

          <Typography sx={{ color: "white", fontWeight: "bold" }}>Wonderlost</Typography>
          <Typography sx={{ color: "#f2e1e1ff", mb: 4 }}>
            A travel diary and storytelling platform where users can share experiences, photos, and explore new journeys.
            Built with MERN stack and enhanced with dynamic content rendering.  
            <br />
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "#8300d4" }}>
              View Project
            </a>
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Skills */}
          <Typography variant="h5" sx={{ color: "#8300d4", mb: 2, fontWeight: "bold" }}>
            Skills
          </Typography>
          <Grid container spacing={2} sx={{ color: "#f2e1e1ff" }}>
            <Grid item xs={12} sm={6} md={4}>Express.js, Node.js</Grid>
            <Grid item xs={12} sm={6} md={4}>React, HTML5, CSS3, JavaScript (ES6+)</Grid>
            <Grid item xs={12} sm={6} md={4}>MySQL, SQL, MongoDB</Grid>
            <Grid item xs={12} sm={6} md={4}>Git & GitHub</Grid>
            <Grid item xs={12} sm={6} md={4}>RESTful APIs</Grid>
            <Grid item xs={12} sm={6} md={4}>Responsive Web Design</Grid>
            <Grid item xs={12} sm={6} md={4}>Problem Solving (DSA in C++/Java)</Grid>
            <Grid item xs={12} sm={6} md={4}>Bootstrap, Tailwind, EJS</Grid>
            <Grid item xs={12} sm={6} md={4}>Basic Java & Spring Boot</Grid>
            <Grid item xs={12} sm={6} md={4}>Communication & Team Collaboration</Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Awards */}
          <Typography variant="h5" sx={{ color: "#8300d4", mb: 2, fontWeight: "bold" }}>
            Awards
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1st prize at Tech Trivia 3.0" primaryTypographyProps={{ style: { color: "white" } }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Participation in Binary Hackathon 3.0, Blank Coding, Bi-Blitz Hackathon" primaryTypographyProps={{ style: { color: "white" } }} />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Resume;
