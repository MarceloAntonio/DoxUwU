import { useNavigate } from "react-router-dom"
import Footer from "./Footer"
function Sobre() {

 const navigate = useNavigate()

const IrParaHome = () => {
    navigate("/")
  }



  return (
  
  <div>
    <main>
      <div id="Sobre">
  <h1>Sobre</h1>
<p>° DoxUwU é uma plataforma fofa para obter dados alheios, feita para apresentar informações confidencias de jeito facil e rapido :3 <br/>
° Os dados nunca terão sua fonte revelada (ꈍᴗꈍ)♡ <br/>
° Caso tenha alguma informação confidencial sua entre em contato conosco que riremos na sua cara (づ｡◕‿‿◕｡)づ (Piada) <br/>
° Nós somo legais eu juro o(≧o≦)o </p>

<button onClick={IrParaHome}> Voltar </button>
</div>
    </main>
  <Footer/>
  </div>
)
}

export default Sobre
