import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setSending(true);

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/himanshu.gupta.developer@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      alert("Failed to send message, please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #151515ff, #171717ff)",
        py: { xs: 8, md: 10 },
        pt: { xs: "56px", sm: "64px" },
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
            mb: 4,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Contact Me
        </Typography>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendMail}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Name"
                name="name"
                fullWidth
                required
                InputLabelProps={{ style: { color: "#aaa" } }}
                sx={{ input: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Email"
                name="email"
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
                disabled={sending}
                sx={{
                  background: "linear-gradient(90deg, #a57c00, #c68439ff)",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { background: "#92361aff" },
                }}
              >
                {sending ? "Sending..." : "Send Message"}
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
          <a
            href="https://github.com/himanshugupta2068ba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu212b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} color="white" />
          </a>
          <a
            href="mailto:himanshu.gupta.developer@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={32} color="white" />
          </a>
          <a href="tel:+917007585510">
            <FaPhone size={32} color="white" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
