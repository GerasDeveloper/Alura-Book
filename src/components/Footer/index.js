import styled from "styled-components";

const FooterContainer = styled.footer`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextConteiner = styled.div`
  color: #FFF;
  display: block;
  margin-right: 40px;

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    width: 220px;
  }
`

const BotaoLogin = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    height: 55px;

    &:hover {
        cursor: pointer;
    }
`

const BotaoCadastro = styled.button`
    background: transparent;
    color: #EB9B00;
    border: 2px solid #EB9B00;
    padding: 10px 0px;
    font-size: 16px;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    height: 55px;
    margin-right:10px;

    &:hover {
        cursor: pointer;
    }
`


export default function Footer(){
  return (
    <FooterContainer>
      <TextConteiner>
        <h2>Já possui uma conta?</h2>
        <p>Com um conta você pode criar sua própria estante de livros e e-books</p>
      </TextConteiner>
      <BotaoCadastro>Criar conta</BotaoCadastro>
      <BotaoLogin>Fazer login</BotaoLogin>
    </FooterContainer>
  )
}