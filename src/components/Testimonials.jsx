import React from "react";
import { Box, Grid, Typography, Card, CardContent, Rating } from "@mui/material";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Product Manager",
      company: "Tech Startup",
      text: "Working with Himanshu was an excellent experience. His attention to detail and creative problem-solving skills delivered a product that exceeded our expectations.",
      rating: 5,
      color: "#c68439ff",
      avatar: "🧑‍💼",
    },
    {
      name: "Priya Singh",
      role: "Project Lead",
      company: "Digital Agency",
      text: "Himanshu's full-stack expertise and quick learning ability made him invaluable to our team. He consistently delivered high-quality code and met tight deadlines.",
      rating: 5,
      color: "#a57c00",
      avatar: "👩‍💻",
    },
    {
      name: "Arjun Patel",
      role: "CTO",
      company: "E-commerce Platform",
      text: "Impressed by his technical skills and communication. He took ownership of projects and delivered solutions that were both scalable and maintainable.",
      rating: 5,
      color: "#be7821ff",
      avatar: "👨‍💼",
    },
  ];

  return (
    <Box
      id="testimonials"
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
            mb: 2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          What People Say
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#b0b0b0",
            textAlign: "center",
            mb: 6,
            fontSize: "1.1rem",
          }}
        >
          Feedback from clients and colleagues
        </Typography>

        {/* Testimonials Grid */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background: `linear-gradient(135deg, rgba(198, 132, 57, 0.1), rgba(165, 124, 0, 0.05))`,
                    border: `2px solid ${testimonial.color}40`,
                    borderRadius: "20px",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      background: `linear-gradient(135deg, rgba(198, 132, 57, 0.2), rgba(165, 124, 0, 0.1))`,
                      border: `2px solid ${testimonial.color}80`,
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${testimonial.color}30`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${testimonial.color}, transparent)`,
                    },
                  }}
                >
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      color: `${testimonial.color}40`,
                      fontSize: "3rem",
                    }}
                  >
                    <FaQuoteLeft />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}>
                    {/* Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Rating
                        value={testimonial.rating}
                        readOnly
                        sx={{
                          color: testimonial.color,
                        }}
                      />
                    </Box>

                    {/* Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#d0d0d0",
                        mb: 3,
                        lineHeight: 1.8,
                        fontStyle: "italic",
                        flexGrow: 1,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    {/* Divider */}
                    <Box
                      sx={{
                        height: "1px",
                        background: `linear-gradient(90deg, transparent, ${testimonial.color}40, transparent)`,
                        mb: 2.5,
                      }}
                    />

                    {/* Author Info */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}80)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.8rem",
                        }}
                      >
                        {testimonial.avatar}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: testimonial.color,
                            fontWeight: "600",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#909090",
                            display: "block",
                          }}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
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

export default Testimonials;
