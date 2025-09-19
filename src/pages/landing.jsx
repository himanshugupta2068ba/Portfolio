import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/landing.png')",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat", // Prevent image repeating
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 w-full max-w-3xl">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
          Hi, I’m <span className="text-blue-400">Himanshu</span>
        </h1>

        <p className="mt-2 text-lg md:text-2xl max-w-2xl mb-8">
          Aspiring Developer | AI Enthusiast | Web3 Learner
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl shadow-lg transition"
          >
            See My Portfolio
          </a>
          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl shadow-lg transition"
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github className="w-7 h-7 hover:text-gray-300 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-7 h-7 hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-7 h-7 hover:text-pink-400 transition" />
          </a>
          <a href="mailto:your-email@example.com">
            <Mail className="w-7 h-7 hover:text-red-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

