import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Card } from './index'
import {Axios} from '../axios/axios'


const Container = styled.div`
    flex:2
`
const Recommendation = ({videoDetails}) => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const fetchData=async()=>{

           const {data} = await Axios.get(`videos/tags?tags=${videoDetails?.tag}`)  
           setVideos(data)
        }
        fetchData()
    },[videoDetails?.tag])

  return (
    <Container>
        {
            videos.map( video=> <Card key={video._id} video={video} />)
        }
        
    </Container>
  )
}

export default Recommendation