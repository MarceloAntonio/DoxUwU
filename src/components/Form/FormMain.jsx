import { useNavigate } from "react-router-dom"


function FormMain(){
    
    const navigate = useNavigate()
    const IrParaHome = () => {
      navigate("/")
    }



return(  


<main>
    <div id="Form">

    <button onClick={IrParaHome}> Voltar </button>

      
    </div>
  </main>)


}

export default FormMain