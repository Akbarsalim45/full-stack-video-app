import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import  {Link} from 'react-router-dom'
const Container = styled.div`
    position:sticky;
    top:0;
    background-color:${({theme}) => theme.bgLighter};
    height:56px;
`

const Wrapper =styled.div`
    display:flex;
    align-items:center;
    height:100%;
    padding:10px 20px;
    justify-content:flex-end;
    position:relative;
`

const Input =styled.input`
    border:none;
    background-color:transparent;
    outline:none;
    color:${({theme})=> theme.text};
    padding: 5px 10px;
    width: 100%;
`

const Search =styled.div`
    width:40%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    padding:5px;
    border:1px solid #ccc;
    border-radius:3px;

`

const Button =styled.button`
      padding:5px 15px;
      background-color:transparent;
      border:1px solid #3ea6ff;
      color:#3ea6ff;
      border-radius:3px;
      font-weight:500;
      display:flex;
      align-items:center;
      gap:10px;
      cursor:pointer;
`
const Navbar = () => {

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to='signin' style={{textDecoration:'none'}}>
          <Button ><PersonIcon /> SIGN IN</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar