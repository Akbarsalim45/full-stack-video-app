import  { useState} from 'react'
import styled,{ThemeProvider} from 'styled-components'
import { Menu,Navbar } from './components'
import { darkTheme,lightTheme } from './utils/Theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './components/Login'

const Container =styled.div`
        display:flex
`;

const Main =styled.div`
  flex:7;
  background-color:${({theme})=>theme.bg};
`;

const Wrapper =styled.div`
  padding:20px;
`;

function App() {

    const [darkMode,setDarkMode] =useState(true)
    return(
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
                <Routes>
                  <Route path="/" >
                    <Route index element={ <Home type='random' /> } />
                    <Route path="trend" element={ <Home type ="trend" /> } />
                    <Route path="subscribes" element={ <Home type= "sub" /> } />
                    <Route path='login' element={ <Login /> } />
                    <Route path='video' >
                      <Route path=":id"  element={ <Video /> } />
                    </Route>
                  </Route>
                </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      
      </Container>
      </ThemeProvider>
    )
}

export default App
