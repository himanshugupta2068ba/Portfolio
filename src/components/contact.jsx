import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 4 },
        pt: { xs: "56px", sm: "64px" },
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "24px",
          padding: { xs: 4, sm: 6, md: 8 },
          maxWidth: "900px",
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
                variant="outlined"
                sx={{ bgcolor: "white", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Email"
                name="user_email"
                type="email"
                fullWidth
                required
                variant="outlined"
                sx={{ bgcolor: "white", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={5}
                fullWidth
                required
                variant="outlined"
                sx={{ bgcolor: "white", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#8300d4",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#9a00ff" },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Social Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 5,
          }}
        >
          <motion.a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram size={40} color="#E4405F" />
          </motion.a>

          <motion.a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={40} color="#fff" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={40} color="#0077B5" />
          </motion.a>

          <motion.a
            href="mailto:himanshugupta2068ba@gmail.com"
            whileHover={{ scale: 1.2 }}
          >
            <SiGmail size={40} color="#EA4335" />
          </motion.a>

          <motion.a href="tel:+917007585510" whileHover={{ scale: 1.2 }}>
            <FaPhone size={40} color="#25D366" />
          </motion.a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
