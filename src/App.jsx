<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from 'react'
import './App.css'
>>>>>>> 668adf6482e5672eb0d5149bb6b1192079c3ba7f
import Home from "./pages/home"
import About from "./pages/about"
import Notfound from "./pages/404"
import Joinwaitlist from "./pages/joinwaitlist"
<<<<<<< HEAD
import Caro from "./pages/carousel"
=======
>>>>>>> 668adf6482e5672eb0d5149bb6b1192079c3ba7f

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/home" element={<Home/>} />
<<<<<<< HEAD
              <Route path="/caro" element={<Caro/>} />
=======
>>>>>>> 668adf6482e5672eb0d5149bb6b1192079c3ba7f
              <Route path="/about" element={<About/>} />
              <Route path="/join/waitlist" element={<Joinwaitlist/>} />
              <Route path="*" element={<Notfound/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

<<<<<<< HEAD

=======
>>>>>>> 668adf6482e5672eb0d5149bb6b1192079c3ba7f
export default App