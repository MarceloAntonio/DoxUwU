import { useEffect,useState } from "react"

function Doxing(){
 
  
  const Refresh = () => {
    window.location.reload()
  }
 

  //Função para gerar um numero aleatório de uma certa quanntidade começando por 1
  function NumeroAleatorio(QuantidadeDesejada) {
    let geradorDeNumero = Math.floor(Math.random() * QuantidadeDesejada + 1)

    return geradorDeNumero
  }

  //Gera um local para onde a senha será gerada
  let senha = NumeroAleatorio(10)

  //Gera uma senha com apenas numeros
  function SenhaAleatoria() {
    for (let i = 0; i < 10; i++) {
      let digitoSenha = NumeroAleatorio(9)

      senha = `${senha}` + `${digitoSenha}`
    }
  }

  /*

Função de conexão com API

°Gera um numero entre 1 a 10 (quantidades de IDs na API)
°Chama a função de gerar senha
°Conecta na API com o id aleatório
°Coloca no titulo o nome da pessoa
°Escreve no paragrafo as informações da pessoa do ID gerado
°Altera o titulo da pagina para Doxing - Nome da pessoa

*/
  window.onload = function () {
    const idUsuario = NumeroAleatorio(10)

    SenhaAleatoria()
    console.log(idUsuario)

    fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}`)
      .then((response) => response.json())
      .then((data) => {
        const lista = document.getElementById("Infos")
        const titulo = document.getElementById("Titulo")
        titulo.innerHTML = `Doxing - ${data.name}`

        lista.innerHTML = ` 
      Nome Completo - ${data.name}<br>
      Email - ${data.email} <br>
      Senha - ${senha}        <br>
      Telefone: ${data.phone}<br>
      Cidade - ${data.address.city}<br>
      Rua - ${data.address.street} <br>
      identificação numérica do domicílio - ${data.address.suite}
      `
        document.title = `Doxing - ${data.name}`
      })
  }

  //Função para que quando o botão seja clicado copie as informações no campo
  function BotaoCopiar() {
    const lista = document.getElementById("Infos").innerText
    navigator.clipboard.writeText(lista)

    const botao = document.getElementById("btnCopy")
    botao.innerHTML = "Copiado"
  }



  return (
    <div>
      <main>
        <div id="Dox">
          <h1 id="Titulo">Doxing - Carregando ...</h1>
          <p id="Infos">Carregando ...</p>
          <button id="btnCopy" onClick={BotaoCopiar}>
            Copiar
          </button>
          <button onClick={Refresh}>Outra Pessoa</button>
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

export default Doxing