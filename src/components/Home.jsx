import { useNavigate } from "react-router-dom"

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
          <button onClick={IrParaSobre} id="Sobre">Sobre nós</button>
        </div>
      </main>
      <footer>
        <div id="direitos">
          <p>
            copyright © 2025 • All Right Reserved •
            <a href="https://github.com/MarceloAntonio"> DoxUwU</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
