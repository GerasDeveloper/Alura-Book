import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';
import MaisVendidos from './components/MaisVendidos';
import Footer from './components/Footer';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 32%, #326589 165%);

`

function App() {
  return (
    <AppContainer>
       <Header />
       <Pesquisa/>
       <UltimosLancamentos/>
       <MaisVendidos />
       <Footer />
    </AppContainer>
  );
}

export default App;
