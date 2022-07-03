import { StrictMode, useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import TypingPage from './TypingPage'
import LandingPage from './LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from './FormComponent'
import TransitionsModal from './TransitionsModal';
import End from './End'


function App() {
  const [count, setCount] = useState(0)

  return (
    <StrictMode>
      <BrowserRouter>
         <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/typing" element={<TypingPage />} />
              <Route path="/message" element={<TransitionsModal/>} />
              <Route path="/end" element={<End/>} />
          </Routes> 
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
