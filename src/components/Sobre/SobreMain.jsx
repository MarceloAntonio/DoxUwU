import { useNavigate } from "react-router-dom"

function SobreMain() {
  const navigate = useNavigate()

  const IrParaHome = () => {
    navigate("/")
  }

  document.title = "DoxUwU - Sobre"

  return (
    <main>
      <div id="Sobre">
        <h1>Sobre</h1>
        <p>
          ° DoxUwU é uma plataforma fofa para obter dados alheios, feita para
          apresentar informações confidenciais de jeito fácil e rápido :3 <br />
          <br />
          ° Os dados nunca terão sua fonte revelada (ꈍᴗꈍ)♡ <br />
          <br />
          ° Caso tenha alguma informação confidencial sua, entre em contato
          conosco que riremos na sua cara (づ｡◕‿‿◕｡)づ (Piada) <br />
          <br />° Nós somos legais eu juro o(≧o≦)o <br />
          <br />
          ° Você pode doar seus dados para ganhar uma recompensa :3
        </p>

        <button onClick={IrParaHome}> Voltar </button>
      </div>
    </main>
  )
}
export default SobreMain
