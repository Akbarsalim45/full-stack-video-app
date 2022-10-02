import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.jpg'
import channelImage from '../images/avathar.jpg'
import {Link} from 'react-router-dom'
const Container=styled.div`
        width:360px;
        margin-bottom:45px;
        cursor:pointer;
       
`

const Img=styled.img`
        width:100%;
        height:202px;
        background-color:#999

`
const Details= styled.div`
    display:flex;
    margin-top:16px;
    gap:12px;
`
const ChannelImg = styled.img`
    width:36px;
    height :36px;
    border-radius:50%;
    background-color:#999;
`
const  Text = styled.div``

const  Title = styled.h1`
     font-size:16px;
     font-weight:500;
     color:${({theme}) => theme.text}   
`
const  ChannelName= styled.h2`
     font-size:14px;
     color:${({theme}) => theme.textSoft} ;
     margin:9px 0; 
`

const  Info = styled.div`

    font-size:14px;
    color:${({theme}) => theme.textSoft} ;
`

const Card = () => {
  return (
    <Container>
        <Link to='/video/test'>
            <Img src={thumbnail} />
        </Link>
        <Details>
            <ChannelImg src={channelImage} />
            <Text>
                <Title>Test video</Title>
                <ChannelName>Akz Media</ChannelName>
                <Info>660,908 views - 1 day ago</Info>
            </Text>
        </Details>
    </Container>
  )
}

export default Card