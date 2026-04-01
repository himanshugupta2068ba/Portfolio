import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from '@mui/material';

// Lazy load pages for better code splitting
const Home = lazy(() => import('./pages/Home'))
const LandingPage = lazy(() => import('./pages/landing'))

// Loading fallback component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #151515ff, #171717ff)',
    }}
  >
    <CircularProgress sx={{ color: '#c68439ff' }} />
  </Box>
);

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
