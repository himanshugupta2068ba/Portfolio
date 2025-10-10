import React from "react";
import { Box, Typography } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Box
  component="footer"
  id="contact"
      sx={{
        height: "auto",
        // width: "100vw",          // force full width
        // minwidth: "100%",
        position: "relative",
        left: 0,
        bgcolor: "black",
        color: "white",
        py: 6,
        // mt: 1,
        overflowX: "hidden",     // prevent horizontal scroll issue
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
          px: 3,
        }}
      >
        {/* Name */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Himanshu Gupta
        </Typography>

        {/* Links */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
          <a href="#home" style={{ color: "white" }}>Home</a>
          <a href="#about" style={{ color: "white" }}>About</a>
          <a href="#projects" style={{ color: "white" }}>Projects</a>
          <a href="#skills" style={{ color: "white" }}>Skills</a>
          <a href="#contact" style={{ color: "white" }}>Contact</a>
        </Box>

      {/* Icons */}
<Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 3 }}>
  <a
    href="https://github.com/himanshugupta2068ba"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/himanshu212b/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={24} />
  </a>
  <a
    href="https://www.instagram.com/himanshu_gupta.37?igsh=d2YzZ3F6NHl1N29v"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram size={24} />
  </a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshu.gupta.developer@gmail.com">
    <MdEmail size={24} />
  </a>
</Box>

        {/* Tagline */}
        <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
          "Turning Ideas into Impactful Code"
        </Typography>

        {/* Copyright */}
        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          © {new Date().getFullYear()} Himanshu Gupta | All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

