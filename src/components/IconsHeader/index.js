import perfil from '../../assets/img/perfil.svg';
import sacola from '../../assets/img/sacola.svg';
import styled from 'styled-components';

const icons = [perfil, sacola];
const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`

const Icons = styled.ul`
  display:flex;
  align-items:center;
`

export default function IconsHeader(){
  return(
    <Icons>
      {icons.map((icon) => (
        <Icon><img src={icon} alt="icon" /></Icon>
      ))}
    </Icons>
  )
}