import React,{useState} from 'react'
import styled from 'styled-components'
import avatar from '../images/avathar.jpg'
import {Comment} from '../components'
import { useSelector,useDispatch} from 'react-redux'
import {Axios} from '../axios/axios'
import { addComment } from '../redux/commentSlice'
const Container = styled.div`

  @media only screen and (min-width:320px){
        min-height:100px;
        overflow: scroll;
    }
`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap:10px
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius:50%;
    @media only screen and (min-width:320px){
      width: 30px;
     height: 30px;
    }
`

const Input = styled.input`
    border: none;
    border-bottom:1px solid ${({theme})=> theme.soft};
    background-color:transparent;
    outline:none;
    padding:5px;
    width:100%;
    color:${({theme})=> theme.text};

`

const Comments = ({currentUser,videoDetails}) => {

  const {comments} = useSelector(state=> state.comment)
  const [comment,setComment] = useState('')
  const dispatch = useDispatch()
  const handleAddComment = async(e)=>{
    if(e.key == "Enter"){
      await Axios.post(`comments`,{userId:currentUser._id , videoId:videoDetails._id,desc:comment})
      dispatch(addComment({userId:currentUser._id , videoId:videoDetails._id,desc:comment}))
      setComment("")
    }
  }
  return (
    <Container>
        {currentUser && <NewComment onKeyDown={handleAddComment}>
            <Avatar src={avatar} />
            <Input placeholder='Add a comment...' onChange={e => setComment(e.target.value)} value={comment}  /> 
        </NewComment>}
        {
          comments.map( com => <Comment key={com._id} comment={com} />)
        }
            
    </Container>
  )
}

export default Comments