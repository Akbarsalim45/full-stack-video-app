import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Card } from '../components'
import {Axios} from '../axios/axios'

const Container =styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

    @media only screen and (min-width:320px){
      justify-content:center;
    }
`


const Home = ({type,videos,setVideos}) => {

  
  useEffect(()=>{
    const fetchVideos= async()=>{
      const {data} = await Axios.get(`videos/${type}`)
      setVideos(data)
    }
    fetchVideos()
  },[type])

  return (
   <Container>
    {
      videos.length ?
      videos.map( video => {

        return <Card  key={video?._id} video={video} />
      }) :
        <h2 style={{textAlign:'center'}}>No videos found</h2>
    }
      
   </Container>
  )
}

export default Home