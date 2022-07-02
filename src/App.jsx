import { StrictMode, useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import TypingPage from './TypingPage'
import LandingPage from './LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="type" element={<TypingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </StrictMode>
  )
}

export default App
