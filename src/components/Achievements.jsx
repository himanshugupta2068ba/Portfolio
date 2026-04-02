import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaMedal, FaClock } from "react-icons/fa";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <FaLaptopCode size={40} />,
      value: "15+",
      label: "Projects Completed",
      color: "#c68439ff",
      description: "Full-stack and frontend projects",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      value: "4",
      label: "Live Projects",
      color: "#a57c00",
      description: "Deployed on production",
    },
    {
      icon: <FaMedal size={40} />,
      value: "5+",
      label: "Tech Skills",
      color: "#be7821ff",
      description: "React, Node.js, MongoDB, etc.",
    },
    {
      icon: <FaClock size={40} />,
      value: "1000+",
      label: "Hours Learning",
      color: "#9b6b00",
      description: "Coding practice & study",
    },
  ];

  return (
    <Box
      id="achievements"
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #0a0a0aff, #151515ff)",
        py: { xs: 6, md: 4 },
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "90%",
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
          My Journey So Far
        </Typography>

        {/* Achievements Grid */}
        <Grid container spacing={4} justifyContent="center">
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${achievement.color}15, ${achievement.color}05)`,
                    border: `1px solid ${achievement.color}40`,
                    borderRadius: "16px",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: `linear-gradient(135deg, ${achievement.color}25, ${achievement.color}15)`,
                      border: `1px solid ${achievement.color}80`,
                      transform: "translateY(-12px)",
                      boxShadow: `0 20px 40px ${achievement.color}30`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        color: achievement.color,
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                        animation: "float 3s ease-in-out infinite",
                        "@keyframes float": {
                          "0%, 100%": { transform: "translateY(0px)" },
                          "50%": { transform: "translateY(-10px)" },
                        },
                      }}
                    >
                      {achievement.icon}
                    </Box>

                    {/* Value */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        color: achievement.color,
                        mb: 1,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      {achievement.value}
                    </Typography>

                    {/* Label */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: "600",
                        mb: 1,
                      }}
                    >
                      {achievement.label}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b0b0b0",
                        fontSize: "0.9rem",
                      }}
                    >
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AchievementsSection;
