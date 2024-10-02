import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home"
import About from "./pages/about"
import Notfound from "./pages/404"
import Joinwaitlist from "./pages/joinwaitlist"
import Caro from "./pages/carousel"
import Marketplace from "./pages/marketplace"
import Vendor from "./pages/vendor"
import Upload from "./pages/upload"
import Audience from "./pages/audience"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/caro" element={<Caro/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/join/waitlist" element={<Joinwaitlist/>} />
              <Route path="/marketplace" element={<Marketplace/>} />
              <Route path="/user/vendor" element={<Vendor/>} />
              <Route path="/user/upload" element={<Upload/>} />
              <Route path="/user/audience" element={<Audience/>} />
              <Route path="*" element={<Notfound/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App