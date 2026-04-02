import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const EducationPath = () => {
  const education = [
    {
      year: "2023-2027",
      title: "B.Tech in Computer Science",
      school: "RKGIT Ghaziabad",
      description: "3rd Year | GPA 7.5+ | Core courses in DSA, DBMS, Web Development",
      color: "#c68439ff",
    },
    {
      year: "2024",
      title: "MERN Stack Development",
      school: "Self-Learning",
      description: "React, Node.js, Express, MongoDB | Built multiple full-stack projects",
      color: "#a57c00",
    },
    {
      year: "2023-2024",
      title: "Web Development Foundations",
      school: "Practice & Project-Based",
      description: "HTML, CSS, JavaScript, React fundamentals | Created first projects",
      color: "#be7821ff",
    },
    {
      year: "2022",
      title: "Learning to Code",
      school: "College Coursework",
      description: "C++, Java, Python basics | Algorithms and data structures foundation",
      color: "#9b6b00",
    },
  ];

  return (
    <Box
      id="education"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 4 },
        pt: { xs: "56px", sm: "64px" },
        overflowX: "hidden",
      }}
    >
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
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "white",
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          Education & Learning
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: "relative" }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "30px", md: "50%" },
              top: 0,
              bottom: 0,
              width: "2px",
              background: "linear-gradient(180deg, #c68439ff, transparent)",
            }}
          />

          {/* Timeline Items */}
          <Grid container spacing={4}>
            {education.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                sx={{
                  position: "relative",
                  paddingLeft: { xs: "80px", md: "0" },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "15px", md: index % 2 === 0 ? "calc(50% + 8px)" : "calc(50% - 25px)" },
                      top: "20px",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: item.color,
                      border: "4px solid #151515ff",
                      boxShadow: `0 0 20px ${item.color}80`,
                      zIndex: 10,
                    }}
                  />

                  {/* Card */}
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "16px",
                      border: `2px solid ${item.color}40`,
                      backdropFilter: "blur(8px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.12)",
                        border: `2px solid ${item.color}80`,
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${item.color}40`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      {/* Year Badge */}
                      <Box
                        sx={{
                          display: "inline-block",
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontWeight: "bold",
                          mb: 1.5,
                        }}
                      >
                        {item.year}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          color: item.color,
                          fontWeight: "bold",
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#b0b0b0",
                          fontStyle: "italic",
                          mb: 1,
                        }}
                      >
                        {item.school}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#d0d0d0",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationPath;
