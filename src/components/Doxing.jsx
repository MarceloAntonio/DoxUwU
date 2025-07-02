import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function Doxing() {
  const [usuario, setUsuario] = useState(null)
  const [senha, setSenha] = useState('')
  const [copiado, setCopiado] = useState(false)

  const navigate = useNavigate()

const IrParaHome = () => {
    navigate("/")
  }



  // Função para gerar número aleatório de 1 até o valor máximo
  function gerarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1
  }

  // Gera uma senha numérica aleatória
  function gerarSenha() {
    let s = gerarNumeroAleatorio(10).toString()
    for (let i = 0; i < 10; i++) {
      s += gerarNumeroAleatorio(9).toString()
    }
    return s
  }

  // Função para buscar usuário da API e gerar senha
  const carregarUsuario = async () => {
    const id = gerarNumeroAleatorio(10)
    const novaSenha = gerarSenha()
    setSenha(novaSenha)

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      setUsuario(data)
      document.title = `Doxing - ${data.name}`
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error)
    }
  }

  // Executa ao montar o componente
  useEffect(() => {
    carregarUsuario()
  }, [])

  // Copia as informações para a área de transferência
  const copiarParaAreaDeTransferencia = () => {
    const texto = document.getElementById("Infos").innerText
    navigator.clipboard.writeText(texto)
    setCopiado(true)
  }

  // Recarrega o componente com novo usuário e senha
  const recarregar = () => {
    setCopiado(false)
    setUsuario(null)
    carregarUsuario()
  }

  return (
    <div>
      <main>
        <div id="Dox">
          <h1 id="Titulo">
            {usuario ? `Doxing - ${usuario.name}` : 'Carregando...'}
          </h1>
          <p id="Infos">
            {usuario ? (
              <>
                Nome Completo - {usuario.name}<br />
                Email - {usuario.email}<br />
                Senha - {senha}<br />
                Telefone - {usuario.phone}<br />
                Cidade - {usuario.address.city}<br />
                Rua - {usuario.address.street}<br />
                ID do domicílio - {usuario.address.suite}
              </>
            ) : (
              'Carregando...'
            )}
          </p>
          <button id="btnCopy" onClick={copiarParaAreaDeTransferencia}>
            {copiado ? 'Copiado!' : 'Copiar'}
          </button>
          <button onClick={recarregar}>Outra Pessoa</button>
          <button onClick={IrParaHome}> Voltar </button>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
