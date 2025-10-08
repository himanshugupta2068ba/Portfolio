import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";
import { Button } from "@mui/material";
import "./Home.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const handleHireClick = () => {
    console.log("Hire Me button clicked");
   window.open(
  "https://mail.google.com/mail/?view=cm&fs=1&to=himanshu.gupta.developer@gmail.com&su=Hiring%20Inquiry%20from%20Portfolio&body=Hi%20Himanshu,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.",
  "_blank"
);
  };
  const navigate = useNavigate();

  return (
    <div className="landing-page">
    <div className="right-panel">
  <div className="buttons-container">
    <Button
      variant="contained"
      className="btn"
      sx={{
        background: "linear-gradient(90deg, #a57c00, #c68439ff)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "30px",
        px: 4,
        py: 1.2,
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(165,124,0,0.4)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 15px rgba(165,124,0,0.6)",
        },
      }}
      onClick={() => navigate("/home")}
    >
      Portfolio
    </Button>

    <Button
      variant="contained"
      className="btn"
      sx={{
        background: "linear-gradient(90deg, #a57c00, #c68439ff)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "30px",
        px: 4,
        py: 1.2,
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(165,124,0,0.4)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 15px rgba(165,124,0,0.6)",
        },
      }}
      onClick={handleHireClick}
    >
      Hire Me
    </Button>

    <Button
      variant="contained"
      className="btn"
      sx={{
        background: "linear-gradient(90deg, #a57c00, #c68439ff)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "30px",
        px: 4,
        py: 1.2,
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(165,124,0,0.4)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 15px rgba(165,124,0,0.6)",
        },
      }}
      onClick={() => window.open("/resume.pdf", "_blank")}
    >
      View Resume
    </Button>

    <Button
      variant="contained"
      className="btn"
      sx={{
        background: "linear-gradient(90deg, #a57c00, #c68439ff)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "30px",
        px: 4,
        py: 1.2,
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "0px 4px 10px rgba(165,124,0,0.4)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 6px 15px rgba(165,124,0,0.6)",
        },
      }}
      href="/resume.pdf"
      download="Himanshu_Gupta_Resume.pdf"
    >
      Download Resume
    </Button>

    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <a
        href="https://github.com/himanshugupta2068ba"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#ffd966" }}
      >
        <Github size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/himanshu212b/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#ffd966" }}
      >
        <Linkedin size={28} />
      </a>
      <a
          href="https://www.instagram.com/himanshu_gupta.37?igsh=d2YzZ3F6NHl1N29v"
          target="_blank"
          rel="noopener noreferrer"
           style={{ color: "#ffd966" }}
        >
          <FaInstagram size={24} />
        </a>
    </div>
<div className="content">
  <h1 className="name">Himanshu Gupta</h1>
  <p className="role">
    <span style={{ color: "#be793dff", fontWeight: "bold" }}>Full Stack Developer</span> |{" "}
    <span style={{ fontStyle: "italic" }}>Bringing pixels and APIs together</span>
  </p>
  <p style={{ marginTop: "8px", color: "#403e3eff", fontSize: "0.9rem" }}>
    Passionate about building scalable web applications and crafting seamless user experiences.
  </p>
</div>

  </div>
</div>

      <div className="left-panel"></div>
    </div>
  );
}
