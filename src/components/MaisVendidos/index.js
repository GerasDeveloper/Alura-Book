import styled from "styled-components";
import { livros } from "./dadosMaisVendidos";
import { Titulo } from "../Titulo";

const MaisVendidosConteiner = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const LivrosContainer = styled.div `
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function MaisVendidos() {
  return(
    <MaisVendidosConteiner>
      <Titulo
        cor="#EB9B00"
        tamanhoFonte="36px"
      >MAIS VENDIDOS</Titulo>
      <LivrosContainer>
        {livros.map(livro => (
          <img src={livro.src} alt="" />
        ))}
      </LivrosContainer>

    </MaisVendidosConteiner>
  )
}