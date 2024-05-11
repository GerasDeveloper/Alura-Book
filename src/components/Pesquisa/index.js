import Input from "../Input"
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 50px 0;
    height: 450px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 200;
    margin-bottom: 40px;
`
const ResultadoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    border:none;

    p {
        width: 200px;
        color:#000;
    }

    img {
        width: 150px;
        border-radius:12px;
    }
`

const Resultado = styled.section`
    background-color:#FFFF;
    width:400px;
    border-radius:30px;
    display:flex;
    align-items:center;
    justify_content:center;
`

export default function Pesquisa(){
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  console.log(livrosPesquisados)

  return(
    <PesquisaContainer>
      <Titulo>Já sabe por onde começa?</Titulo>
      <SubTitulo>Encontre o seu livro na nossa estante</SubTitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={event => {
          const textoDigitado  = event.target.value;
          const resultadoPesquisa = livros.filter(
            livro => livro.nome.includes(textoDigitado)
          )
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map( livro => (
         <ResultadoContainer>
            <Resultado>
              <p>{livro.nome}</p>
              <img src={livro.src} alt="Imagem de Livro" />
            </Resultado>
         </ResultadoContainer>
      )
    )}
    </PesquisaContainer>
  )
}