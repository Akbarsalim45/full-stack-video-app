import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import avatar from '../images/avathar.jpg'
import {format} from 'timeago.js'
import {Axios} from '../axios/axios'
const Container = styled.div`
    display:flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap: 10px;
`
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color:${({theme}) => theme.text};
`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color:${({theme}) => theme.textSoft};
    margin-left: 5px;   
`
const Text = styled.span`
    font-size: 14px;
    color:${({theme}) => theme.text} ;
`
const Comment = ({comment}) => {

    const [commentUser,setCommentUser] = useState({})

    useEffect(() => {
    
        const fetchData=async()=>{
            const {data} = await Axios.get(`/users/${comment?.userId}`)
            setCommentUser(data)
        }
        fetchData()
    }, [comment])
    
    
  return (
    <Container>
        <Avatar src={avatar} />
        <Details>
            <Name>{commentUser?.name}<Date>{format(comment?.createdAt)}</Date> </Name>
            <Text>{comment.desc}</Text>
        </Details>
    </Container>
  )
}

export default Comment