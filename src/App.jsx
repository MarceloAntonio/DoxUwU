import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Home,Sobre,Registro} from "./components/Direcionador"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doxing" element={<Registro />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
