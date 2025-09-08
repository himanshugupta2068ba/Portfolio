import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxxx", // 🔥 replace with your EmailJS Service ID
        "template_xxxxxx", // 🔥 replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // 🔥 replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 10 }, // ✅ same spacing as Skills
        pt: { xs: "56px", sm: "64px" }, // match AppBar spacing
      }}
    >
      {/* Glass Card Box */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: { xs: 4, sm: 6, md: 8 },
          maxWidth: "1200px", // ✅ aligned with About, Skills, Projects
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
            mb: 4,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Contact Me
        </Typography>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Name"
                name="user_name"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Email"
                name="user_email"
                type="email"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Your Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{ textarea: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#8300d4",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { background: "#5a00a3" },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Social Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          {/* <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color="white" />
          </a> */}
          <a href="https://github.com/himanshugupta2068ba" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/himanshu212b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} color="white" />
          </a>
          {/* <a href="mailto:himanshugupta2068ba@gmail.com">
            <FaEnvelope size={32} color="white" />
          </a> */}
          <a href="tel:+917007585510">
            <FaPhone size={32} color="white" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
