import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Home,Sobre,Registro,Form} from "./components/Direcionador"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Doxing" element={<Registro />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
