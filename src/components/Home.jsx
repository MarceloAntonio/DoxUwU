import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function Home() {
  const navigate = useNavigate()

  const IrParaDoxing = () => {
    navigate("/Doxing")
  }

  const IrParaSobre = () => {
    navigate("/Sobre")
  }

  return (
    <div>
      <main>
        <div id="Home">
          <img src="src\assets\FaceMuahaha.png" alt="" />
          <h3> Clique e faça um DOXING em uma pessoa aleatória </h3>

          <button onClick={IrParaDoxing}>Doxing</button>
          <button onClick={IrParaSobre} id="SobreBtn">Sobre nós</button>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
