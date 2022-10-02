import styled from 'styled-components'
import { Menu,Navbar } from './components'

const Container =styled.div`
        display:flex
`;

const Main =styled.div`
  flex:7
`;

const Wrapper =styled.div``;

function App() {

    return(
        <Container>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
                  videocards
            </Wrapper>
          </Main>
        </Container>
    )
}

export default App
