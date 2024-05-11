import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconsHeader from "../IconsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`

export default function Header(){
  return(
     <HeaderContainer>
       <Logo />
       <OpcoesHeader />
       <IconsHeader />
     </HeaderContainer>
  )
}