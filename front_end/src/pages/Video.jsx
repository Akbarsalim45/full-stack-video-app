import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import channelImage from '../images/avathar.jpg'
import {Comments,Card ,Recommendation}from '../components'
import {useParams} from 'react-router-dom'
import {Axios } from '../axios/axios'
import {useSelector,useDispatch} from 'react-redux'
import { getVideoFail,getVideoSuccess,getVideoStart ,likeVideo,dislikeVideo} from '../redux/videoSlice';
import { subscribe} from '../redux/userSlice';
import { fetchComment} from '../redux/commentSlice';
import {format} from 'timeago.js'
import videoSlice from '../redux/videoSlice';
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
// const Recommendation= styled.div`
//     flex:2;
// `
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
const VideoPlayer=styled.video`
    width:100%;
    height:550px
`
const Video = () => {
    const {id} = useParams()
    const dispatch  =useDispatch()
    const {videoDetails} = useSelector(state =>state.video)
    const {currentUser} = useSelector(state =>state.user)
    const [channel,setChannel] = useState({})

    useEffect(()=>{
        
        dispatch(getVideoStart())
        try{
            const fetchVideo= async()=>{
                const {data} = await Axios.get(`videos/find/${id}`)
                dispatch(getVideoSuccess(data))
                const {data:channelDetail} = await Axios.get(`/users/${data?.userId}`)
                setChannel(channelDetail)
                const {data:comments} = await Axios.get(`/comments/${data?._id}`)
                dispatch(fetchComment(comments))
            }
            fetchVideo()
        }catch(e){
            dispatch(getVideoFail())
        }
        
      },[id])

    const handleLike = async()=>{
        await Axios.put(`users/like/${videoDetails?._id}`)
        dispatch(likeVideo(currentUser?._id))
    }
    const handleDislike = async()=>{
        await Axios.put(`users/dislike/${videoDetails?._id}`)
        dispatch(dislikeVideo(currentUser?._id))
    }

    const handleSubscribe = async()=>{
        try{
            if(!currentUser?.subscribedUsers.includes(channel?._id) ){
    
                await Axios.put(`users/sub/${channel?._id}`)
                dispatch(subscribe({type:'subscribe',id:channel?._id}))
    
            }else{
                
                await Axios.put(`users/unsub/${channel?._id}`)
                dispatch(subscribe({type:'unubscribe',id:channel?._id}))
    
            }
        }
        catch(e){
        }

    }


  return (
    <Container>
        <Content>
            <VideoWrapper>
                <VideoPlayer src={videoDetails.videoUrl} controls />
            </VideoWrapper>
            <Title>{videoDetails?.title}</Title>
            <Details>
                <Info>{videoDetails?.views} views - {format(videoDetails?.createdAt)}</Info>
                <Buttons>
                    <Button onClick={handleLike} >{videoDetails?.likes.includes(currentUser._id) ?<ThumbUpIcon/> :<ThumbUpAltOutlinedIcon />} {videoDetails?.likes?.length}</Button>
                    <Button onClick={handleDislike}>{videoDetails?.dislikes.includes(currentUser._id) ?<ThumbDownIcon/> :<ThumbDownOutlinedIcon />} Dislike</Button>
                    <Button><ReplyOutlinedIcon /> Share</Button>
                    <Button><BookmarkBorderOutlinedIcon /> Save</Button>
                </Buttons>
            </Details>
            <Hr />
            <Channel>
                <ChannelInfo>
                    <ChannelImage src={channel.img}  />
                    <ChannelDetail>
                        <ChannelName>{channel?.name}</ChannelName>
                        <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
                        <Description>{videoDetails?.desc}</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe onClick={handleSubscribe}>{currentUser?.subscribedUsers.includes(channel?._id)? 'Subscribed':"Subscribe"}</Subscribe>
            </Channel>
            <Hr />
            <Comments currentUser={currentUser} videoDetails={videoDetails} />
        </Content>
        <Recommendation videoDetails={videoDetails} />
        {/* <Recommendation>
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
        </Recommendation> */}
    </Container>
  )
}

export default Video