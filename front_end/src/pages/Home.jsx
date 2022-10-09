import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Card } from '../components'
import {Axios} from '../axios/axios'

const Container =styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`


const Home = ({type}) => {

  const [videos,setVideos] =useState([])

  useEffect(()=>{
    const fetchVideos= async()=>{
      const {data} = await Axios.get(`videos/${type}`)
      setVideos(data)
      console.log(data)
    }
    fetchVideos()
  },[type])

  return (
   <Container>
    {
      videos.map( video => {

        return <Card  key={video?._id} video={video} />
      })
    }
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
   </Container>
  )
}

export default Home