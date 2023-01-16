import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
export const Pages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
    // <>
    // <Hero />
    // <About />
    // <Services />
    // <Portfolio />
    // </>
  )
}
