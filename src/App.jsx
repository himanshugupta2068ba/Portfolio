import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import LandingPage from './pages/landing.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
