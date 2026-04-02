import React from "react";
import { Box, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
        { label: "Resume", href: "/resume.pdf", external: true },
        { label: "GitHub", href: "https://github.com/himanshugupta2068ba", external: true },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/himanshugupta2068ba",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/himanshu212b/",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/himanshu_gupta.37?igsh=d2YzZ3F6NHl1N29v",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com",
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        background: "linear-gradient(180deg, #0a0a0aff 0%, #000000ff 100%)",
        color: "white",
        py: { xs: 6, md: 8 },
        overflowX: "hidden",
        borderTop: "1px solid rgba(198, 132, 57, 0.2)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                background: "linear-gradient(90deg, #c68439ff, #a57c00)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HIMANSHU
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#b0b0b0",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Full Stack Developer | Creative Problem Solver | Tech Enthusiast
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#909090",
                fontStyle: "italic",
              }}
            >
              "Turning Ideas into Impactful Code"
            </Typography>
          </Grid>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mb: 2,
                  fontSize: "1rem",
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Typography key={linkIndex} variant="body2">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      style={{
                        color: "#b0b0b0",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#c68439ff")}
                      onMouseLeave={(e) => (e.target.style.color = "#b0b0b0")}
                    >
                      {link.label}
                    </a>
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, background: "rgba(198, 132, 57, 0.2)" }} />

        {/* Social Links & Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 2.5,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(198, 132, 57, 0.1)",
                  border: "1px solid rgba(198, 132, 57, 0.3)",
                  color: social.color,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${social.color}20`;
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${social.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(198, 132, 57, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(198, 132, 57, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </Box>

          {/* Copyright Text */}
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography
              variant="body2"
              sx={{
                color: "#909090",
                mb: 0.5,
              }}
            >
              © {new Date().getFullYear()} Himanshu Gupta
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#707070",
              }}
            >
              All Rights Reserved | Built with ❤️
            </Typography>
          </Box>
        </Box>

        {/* Scroll to Top Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "rgba(198, 132, 57, 0.15)",
              border: "1px solid rgba(198, 132, 57, 0.5)",
              color: "#c68439ff",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(198, 132, 57, 0.25)";
              e.target.style.borderColor = "#c68439ff";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(198, 132, 57, 0.15)";
              e.target.style.borderColor = "rgba(198, 132, 57, 0.5)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            ↑ Back to Top
          </button>
        </Box>
      </Box>
    </Box>
  );
}

