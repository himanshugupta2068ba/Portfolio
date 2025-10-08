import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  // Responsive icon sizes
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:900px)");

  const iconSize = isXs ? 30 : isSm ? 55 : 80;

  const skills = [
    { name: "C++", icon: <SiCplusplus size={iconSize} color="#00599C" /> },
    { name: "JavaScript", icon: <SiJavascript size={iconSize} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={iconSize} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={iconSize} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={iconSize} color="#fff" /> },
    { name: "MongoDB", icon: <SiMongodb size={iconSize} color="#47A248" /> },
    { name: "Java", icon: <FaJava size={iconSize} color="#f89820" /> },
    { name: "Python", icon: <FaPython size={iconSize} color="#3776AB" /> },
    { name: "CSS3", icon: <FaCss3Alt size={iconSize} color="#264de4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} color="#38BDF8" /> },
    { name: "Next.js", icon: <SiNextdotjs size={iconSize} color="#fff" /> },
    { name: "GitHub", icon: <FaGithub size={iconSize} color="#fff" /> },
  ];

  return (
    <Box
  id="skills"
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
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1200px",
          width: "90%",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
          backdropFilter: "blur(8px)",
          textAlign: "center",
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
          My Skills
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.2, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  cursor: "pointer",
                  padding: "20px",
                }}
              >
                {/* Icon */}
                {skill.icon}

                {/* Skill Name (shown on hover of parent) */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: -35,
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    background: "linear-gradient(90deg, #a57c00, #c68439ff)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;



