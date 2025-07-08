import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Home,Sobre,Registro,Form} from "./components/Direcionador"

function App() {

  const Usuarios = {
    usuarios: 10
  }
  
  localStorage.setItem("QuantidadeUsers", JSON.stringify(Usuarios))
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
