import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Material UI.",
    image: "portfolio.png",
    link: "#",
  },
  {
    title: "HIMX Meet",
    description: "Video conferencing app with real-time chat.",
    image: "Himxmeet.png",
    link: "#",
  },
  {
    title: "Wonder-Lost",
    description: "Hotel booking website with admin panel.",
    image: "wonderlost.png",
    link: "#",
  },
  // {
  //   title: "Mobile Game",
  //   description: "Puzzle game made with Unity.",
  //   image: "/projects/game.png",
  //   link: "#",
  // },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 4 },
        pt: { xs: "56px", sm: "64px" },
         overflowX: "hidden",
      }}
    >
      {/* Glass Box */}
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 5,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          My Projects
        </Typography>

        {/* Cards Grid */}
        <Grid container spacing={6} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "18px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.6)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ddd" }}>
                    {project.description}
                  </Typography>
                  <Button
                    href={project.link}
                    target="_blank"
                    sx={{
                      mt: 2,
                      alignSelf: "flex-start",
                      background: "linear-gradient(90deg, #a57c00, #c68439ff)",
                      color: "white",
                      textTransform: "none",
                      fontWeight: "bold",
                      "&:hover": {
                        background: "linear-gradient(45deg, #46096fff, #a2421cff)",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
