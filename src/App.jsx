import { useState } from 'react'
import About from './components/About'
import SavePass from './components/SavePass'
import GetPass from './components/GetPass'
import {BrowserRouter, Route, Routes,NavLink} from "react-router-dom"

function App() {


  return (
    <div className='app'>
      
      <BrowserRouter>
      
        <div className="nav">
            <h1>LOCKBOX</h1>
            <NavLink to='save_passwords'>Save password</NavLink>
            <NavLink to='get_passwords'>Get password</NavLink>
            
        </div>
     <div className='back'>

        <Routes>
            <Route path="/save_passwords" element={<SavePass />} />
            <Route path="/get_passwords" element={<GetPass />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/about" element={<About />}/>
        </Routes>
     </div>

    <div className='footer'>
      <NavLink to='about'>💡About</NavLink>
      <a href="https://www.linkedin.com/in/akarshi-alankriti-16b1b3220/">👩🏻‍💻Made by Akarshi Alankriti</a>
      
    </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App
