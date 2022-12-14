import React,{useState} from 'react'
import styled from 'styled-components'
import {Axios } from '../axios/axios'
import {useDispatch} from 'react-redux'
import { loginStart,loginSuccess,loginFail } from '../redux/userSlice'
import {useNavigate} from 'react-router-dom'
const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: calc(100vh - 56px) ;
    color:${({theme}) => theme.text}
`
const Wrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    background-color:${({theme}) => theme.bgLighter};
    border:1px solid ${({theme}) => theme.bgLsoftghter};
    padding:20px 50px;
    gap:10px;

`
const Title = styled.h1`
    font-ize:24px;
`
const SubTitle = styled.h2`
    font-size:20px;
    font-weight:300;
`

const Input = styled.input`
    border:1px solid ${({theme}) => theme.soft};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`
const Button = styled.button`
    border-radius:3px;
    border:none;
    padding:10px 20px;
    font-weight:500;
    cursor:pointer;
    background-color:${({theme}) => theme.textSoft};

`
const More = styled.div`
    display:flex;
    font-size:12px;
    color:${({theme}) => theme.textSoft};
    margin-top:5px;

`
const Links = styled.div`
    margin-left:50px;
`
const Link = styled.span`
    margin-left:30px;
`

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignin = async(e) => {
    e.preventDefault()
      dispatch(loginStart())
    try{
      const {data} = await Axios.post('auth/signin',{email,password})
      dispatch(loginSuccess(data))
      localStorage.setItem('access-token',data.token)
      navigate('/')

    }catch(e){
      dispatch(loginFail())
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to akz media</SubTitle>
        <Input placeholder='username' onChange ={e=>setEmail(e.target.value)} value={email} />
        <Input type='password' placeholder='password' onChange ={e=>setPassword(e.target.value)} value={password} />
        <Button onClick= {handleSignin} >Sign in</Button>
        <Title>or</Title>
        <Title>Sign up</Title>
        <Input placeholder='username' />
        <Input placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button>Sign Up</Button>
      </Wrapper>
        <More>
          English
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Support</Link>
          </Links>
        </More>
    </Container>
  )
}

export default Login