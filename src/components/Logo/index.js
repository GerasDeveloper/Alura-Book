import logo from '../../assets/img/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display:flex;
  font-size: 30px;
`

const LogoImagem = styled.img`
  margin-right: 10px;
`

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImagem
        src={logo}
        alt="Logo da Alura Books"
        />
      <p><strong>Alura</strong> Books</p>
    </LogoContainer>
  )
}