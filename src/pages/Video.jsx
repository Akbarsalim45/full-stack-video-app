import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import channelImage from '../images/avathar.jpg'
import {Comments,Card}from '../components'
const Container =styled.div`
    display:flex;
    gap:24px;
`
const Content =styled.div`
    
    flex:5;
`

const VideoWrapper = styled.div``

const Title=styled.h1`
    font-size:18px;
    font-weight:400;
    margin-top:20px;
    margin-bottom:10px;
    color:${({theme}) => theme.text}

`

const Details =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

`

const Info=styled.span`
    color:${({theme}) => theme.textSoft}
`

const Buttons=styled.div`
    display:flex;
    gap:20px;
    color:${({theme}) => theme.text}
`

const Button=styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    font-size:12px;
    cursor:pointer;
`
const Hr =styled.hr`
    margin:15px 0;
    border:0.5px solid ${({theme}) => theme.soft }
`
const Recommendation= styled.div`
    flex:2;
`
const Channel =styled.div`
    display:flex;
    justify-content:space-between;
`
const ChannelInfo = styled.div`
    display:flex;
    gap:20px;
`
const ChannelImage = styled.img`
     width:50px;
     height:50px;
     border-radius:50%;   
`
const ChannelDetail = styled.div`
    display:flex;
    flex-direction:column;
    color:${({theme}) => theme.text};
`

const ChannelName = styled.span`
    font-weight:500
`
const ChannelCounter = styled.span`
    margin-top:5px;
    margin-bottom:20px;
    color:${({theme}) => theme.textSoft};
    font-size:12px;
`
const Description = styled.p`
    font-size:14px;
    font-weight:200;
`

const Subscribe = styled.button`
    background-color:#cc1a00;
    font-weight:500;
    color:white;
    border:none;
    border-radius:3px;
    cursor:pointer;
    height:max-content;
    padding:10px 20px;
`

const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
            <iframe width="100%" height="720" src="https://www.youtube.com/embed/FHTbsZEJspU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </VideoWrapper>
            <Title>test video</Title>
            <Details>
                <Info>1224,5454 views - jun 22, 2022</Info>
                <Buttons>
                    <Button><ThumbUpAltOutlinedIcon /> 123</Button>
                    <Button><ThumbDownOutlinedIcon /> Dislike</Button>
                    <Button><ReplyOutlinedIcon /> Share</Button>
                    <Button><BookmarkBorderOutlinedIcon /> Save</Button>
                </Buttons>
            </Details>
            <Hr />
            <Channel>
                <ChannelInfo>
                    <ChannelImage src={channelImage}  />
                    <ChannelDetail>
                        <ChannelName>Akz media</ChannelName>
                        <ChannelCounter>150k subscribers</ChannelCounter>
                        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis autem ex sunt ea enim illum cupiditate ab amet voluptatem quisquam, tenetur delectus pariatur debitis esse nostrum ducimus at quasi labore.</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>Subscribe</Subscribe>
            </Channel>
            <Hr />
            <Comments />
        </Content>
        <Recommendation>
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
            <Card type='sm' />
        </Recommendation>
    </Container>
  )
}

export default Video