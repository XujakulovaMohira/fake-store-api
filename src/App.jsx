import './App.css'

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Women from "./pages/Women";
import Javelry from "./pages/Javelry";
import Men from "./pages/Men";
import Electronic from "./pages/Electronic";


import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div className="logo">
            <NavLink to="/">
            Logo🛒🛍
            </NavLink>
          </div>
          <div className="navbar-right">
            <NavLink to="/"><i class="fa-solid fa-globe"></i> All product</NavLink>
            <NavLink to="/women"><i class="fa-solid fa-person-dress"></i>Women</NavLink>
            <NavLink to="/javelry"><i class="fa-solid fa-ring"></i> Javelry</NavLink>
            <NavLink to="/men"><i class="fa-solid fa-person"></i>Men</NavLink>
            <NavLink to="/electronic"><i class="fa-solid fa-plug"></i>Electronic</NavLink>
          </div>
        </nav>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:women" element={<Women />} />
          <Route path="/javelry" element={<Javelry/>}/>
          <Route path="/men" element={<Men />} />
          <Route path="/electronic" element={<Electronic/>}/>
          <Route path="/:id" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
