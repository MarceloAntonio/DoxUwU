import { useNavigate } from "react-router-dom"
function HomeMain() {
  const navigate = useNavigate()

  const IrParaDoxing = () => {
    navigate("/Doxing")
  }

  const IrParaSobre = () => {
    navigate("/Sobre")
  }

  return (
    <main>
      <div id="Home">
        <img src="src\assets\FaceMuahaha.png" alt="" />
        <h3> Clique e faça um DOXING em uma pessoa aleatória </h3>
        <button onClick={IrParaDoxing}>Doxing</button>
        <button onClick={IrParaSobre} id="SobreBtn">
          Sobre nós
        </button>
      </div>
    </main>
  )
}
export default HomeMain
