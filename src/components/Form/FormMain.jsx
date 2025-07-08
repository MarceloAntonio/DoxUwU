import { useState } from "react"
import { useNavigate } from "react-router-dom"

function FormMain() {
  const [name, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cidade, setCidade] = useState("")
  const [rua, setRua] = useState("")
  const [numeroCasa, setNumeroCasa] = useState("")

  const navigate = useNavigate()

  const IrParaHome = () => {
    navigate("/")
  }

  const GetInfos = (e) => {
    e.preventDefault()
    const infos = {
      id: 11,
      Nome: name,
      Email: email,
      Senha: senha,
      Telefone: telefone,
      Cidade: cidade,
      Rua: rua,
      Numero: numeroCasa,
    }
    localStorage.setItem("InfosConfidenciais", JSON.stringify(infos))
    const numeroDeUsers = JSON.parse(localStorage.getItem("QuantidadeUsers"))
    numeroDeUsers.usuarios = 11
    localStorage.setItem("QuantidadeUsers", JSON.stringify(numeroDeUsers))
    console.log("Numero de Users "+numeroDeUsers.usuarios)
    console.log("Informações resgatadas: "+infos)
  }

  return (
    <main>
      <div id="Form">
        <form onSubmit={GetInfos}>
          <label htmlFor="Nome">Nome</label>
          <input
            name="Nome"
            value={name}
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            value={email}
            type="email"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Senha">Senha</label>
          <input
            name="Senha"
            value={senha}
            type="text"
            placeholder="Sua senha"
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="Telefone">Telefone</label>
          <input
            name="Telefone"
            value={telefone}
            type="text"
            placeholder="Seu telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label htmlFor="Cidade">Cidade</label>
          <input
            name="Cidade"
            value={cidade}
            type="text"
            placeholder="Sua cidade"
            onChange={(e) => setCidade(e.target.value)}
          />

          <label htmlFor="Rua">Rua</label>
          <input
            name="Rua"
            value={rua}
            type="text"
            placeholder="Sua Rua"
            onChange={(e) => setRua(e.target.value)}
          />

          <label htmlFor="NumeroCasa">Numero da Casa/Apartamento</label>
          <input
            name="NumeroCasa"
            value={numeroCasa}
            type="text"
            placeholder="Numero da Casa/Apartamento"
            onChange={(e) => setNumeroCasa(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </form>
        <button onClick={IrParaHome}> Voltar </button>
      </div>
    </main>
  )
}

export default FormMain
