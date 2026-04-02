import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaUsers, FaClock } from "react-icons/fa";

const Statistics = () => {
  const stats = [
    {
      icon: <FaCode size={40} />,
      value: "50+",
      label: "Projects Built",
      color: "#c68439ff",
      description: "Full-stack applications and web solutions",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      value: "12",
      label: "Live Projects",
      color: "#a57c00",
      description: "Deployed on production servers",
    },
    {
      icon: <FaUsers size={40} />,
      value: "1000+",
      label: "Happy Users",
      color: "#be7821ff",
      description: "Users across different platforms",
    },
    {
      icon: <FaClock size={40} />,
      value: "500+",
      label: "Hours Coded",
      color: "#9b6b00",
      description: "Dedicated to building quality software",
    },
  ];

  return (
    <Box
      id="stats"
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
          By The Numbers
        </Typography>

        {/* Stats Grid */}
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                    border: `1px solid ${stat.color}40`,
                    borderRadius: "16px",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: `linear-gradient(135deg, ${stat.color}25, ${stat.color}15)`,
                      border: `1px solid ${stat.color}80`,
                      transform: "translateY(-12px)",
                      boxShadow: `0 20px 40px ${stat.color}30`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        color: stat.color,
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
                      {stat.icon}
                    </Box>

                    {/* Value */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        color: stat.color,
                        mb: 1,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                      }}
                    >
                      {stat.value}
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
                      {stat.label}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#b0b0b0",
                        fontSize: "0.9rem",
                      }}
                    >
                      {stat.description}
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

export default Statistics;
