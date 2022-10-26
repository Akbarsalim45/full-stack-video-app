import  { useState} from 'react'
import styled,{ThemeProvider} from 'styled-components'
import { Menu,Navbar } from './components'
import { darkTheme,lightTheme } from './utils/Theme';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Video from './pages/Video';
import Login from './components/Login'
import MediaQuery from 'react-responsive'

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

  const [videos,setVideos] =useState([])


    const [darkMode,setDarkMode] =useState(true)
    return(
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <Container>
        <BrowserRouter>
        <MediaQuery minWidth={950}>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        </MediaQuery>
          <Main>
            <Navbar darkMode={darkMode} {...{videos,setVideos}}/>
            <Wrapper>
                <Routes>
                  <Route path="/" >
                    <Route index element={ <Home type='random' {...{videos,setVideos}} /> } />
                    <Route path="trend" element={ <Home type ="trend" {...{videos,setVideos}} /> } />
                    <Route path="subscribes" element={ <Home type= "sub" {...{videos,setVideos}} /> } />
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
