import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.jpg'
import channelImage from '../images/avathar.jpg'
import {Link} from 'react-router-dom'
const Container=styled.div`
        width:${props => props.type !=='sm' && '360px'};
        margin-bottom:${(props) => props.type === 'sm' ?'10px':'45px'};
        cursor:pointer;
        display:${(props) => props.type === 'sm' && 'flex'};
        gap: 10px;
       
`

const Img=styled.img`
        width:100%;
        height:${(props) => props.type === 'sm' ?'120px': '202px'};
        background-color:#999;
        flex:1;

`
const Details= styled.div`
    display:flex;
    margin-top:${props => props.type !=='sm' && '16px'};
    gap:12px;
    flex:1
`
const ChannelImg = styled.img`
    width:36px;
    height :36px;
    border-radius:50%;
    background-color:#999;
    display:${props => props.type ==='sm' && 'none'};
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

const Card = ({type}) => {
  return (
    <Container type= {type}>
        <Link to='/video/test'>
            <Img src={thumbnail} type= {type} />
        </Link>
        <Details type= {type}>
            <ChannelImg src={channelImage} type={type} />
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