import React from "react";
import { Box, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaRocket } from "react-icons/fa";

const PersonalCTA = () => {
  const highlights = [
    {
      icon: <FaGraduationCap size={32} />,
      title: "B.Tech Student",
      description: "3rd Year | RKGIT Ghaziabad | Computer Science",
      color: "#c68439ff",
    },
    {
      icon: <FaCode size={32} />,
      title: "Self-Taught Developer",
      description: "Learning MERN Stack | Building Projects | Solving DSA",
      color: "#a57c00",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Tech Enthusiast",
      description: "Always Learning | Passionate About Web Development",
      color: "#be7821ff",
    },
  ];

  return (
    <Box
      id="get-started"
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0aff 0%, #1a1a1aff 50%, #151515ff 100%)",
        py: { xs: 6, md: 8 },
        pt: { xs: "56px", sm: "64px" },
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(198, 132, 57, 0.1), transparent)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          maxWidth: "1200px",
          width: "90%",
          zIndex: 1,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  background: "linear-gradient(90deg, #c68439ff, #a57c00)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Let's Connect
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  lineHeight: 1.2,
                }}
              >
                Have a Project or Idea?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#b0b0b0",
                  fontSize: "1.1rem",
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                I'm always excited to work on challenging projects, collaborate with other developers, or discuss tech ideas. Whether you have a project in mind or just want to chat about web development, let's connect!
              </Typography>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    background: "linear-gradient(90deg, #c68439ff, #a57c00)",
                    color: "white",
                    px: 4,
                    py: 1.8,
                    fontSize: "1.05rem",
                    fontWeight: "bold",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 20px 40px rgba(198, 132, 57, 0.3)",
                    },
                  }}
                >
                  Get In Touch
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  sx={{
                    color: "#c68439ff",
                    borderColor: "#c68439ff",
                    px: 4,
                    py: 1.8,
                    fontSize: "1.05rem",
                    fontWeight: "bold",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(198, 132, 57, 0.1)",
                      borderColor: "#a57c00",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  View Resume
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side - Highlights */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: `linear-gradient(135deg, rgba(198, 132, 57, 0.08), rgba(165, 124, 0, 0.04))`,
                      border: `1px solid ${highlight.color}30`,
                      borderRadius: "16px",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: `linear-gradient(135deg, rgba(198, 132, 57, 0.15), rgba(165, 124, 0, 0.08))`,
                        border: `1px solid ${highlight.color}60`,
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2.5,
                          alignItems: "flex-start",
                        }}
                      >
                        {/* Icon */}
                        <Box
                          sx={{
                            color: highlight.color,
                            minWidth: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 1.5,
                            background: `${highlight.color}15`,
                            borderRadius: "12px",
                          }}
                        >
                          {highlight.icon}
                        </Box>

                        {/* Content */}
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              mb: 0.5,
                            }}
                          >
                            {highlight.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#a0a0a0",
                            }}
                          >
                            {highlight.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PersonalCTA;
