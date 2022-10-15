import React,{useState} from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import LogoutIcon from '@mui/icons-material/Logout';
import  {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Upload from './Upload';
import {Axios} from '../axios/axios'
import { logout } from '../redux/userSlice';
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
const Navbar = ({darkMode,videos,setVideos}) => {

    const {currentUser} = useSelector( state=> state.user)
    const dispatch= useDispatch()
    const [open,setOpen] =useState(false)
    const [query,setQuery] =useState('')
    const handleSearch =async(e)=>{
      if(e.key =="Enter"){
        if(query){
         const  {data}= await Axios.get(`videos/search?q=${query}`)
         setVideos(data)
        }
      }
    }
  const handleLogout= ()=>{
    dispatch(logout())
  }
  return (
    <>
    <Container onKeyPress={handleSearch}>
      <Wrapper>
        <Search>
          <Input placeholder="search" onChange = {e => setQuery(e.target.value)} />
          <SearchOutlinedIcon />
        </Search>
        {currentUser?.name
          ? 
          <>
          <VideoCallIcon onClick={()=>setOpen(true)} style={{marginRight:'10px',color:darkMode?'white':"black"}} />
            <Button ><PersonIcon /> {currentUser?.name}</Button>
            <Link to='login'>
              <Button onClick={handleLogout} ><LogoutIcon /></Button>
            </Link>
          </>
          :
          <Link to='login' style={{textDecoration:'none'}}>
             <Button ><PersonIcon />Login</Button>
          </Link>
        }
      </Wrapper>
    </Container>
    {
      open && <Upload  setOpen={setOpen} />
    }
    </>
  )
}

export default Navbar