import styled from "styled-components";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const Opcoes = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
`

export default function OpcoesHeader() {
  return(
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao><p>{texto}</p></Opcao>
      )
      )}
    </Opcoes>
  )
}