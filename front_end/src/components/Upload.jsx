import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {app} from '../firebase.js'
import {Axios} from '../axios/axios'
import {useNavigate} from 'react-router-dom'
const Container=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:#000000a7;
    display:flex;
    justify-content:center;
    align-items:center
`

const Wrapper=styled.div`
    width:600px;
    height:600px;
    background-color:${({theme})=>theme.bgLighter};
    color:${({theme})=>theme.text};
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:20px;
    position:relative
`
const Close=styled.div`
    position:absolute;
    top:20px;
    right:10px;
    cursor:pointer;
`
const Title=styled.h1`
    text-align:center
`
const Input=styled.input`
    border:1px solid ${({theme})=> theme.soft};
    color:${({theme})=>theme.text};
    border-radius:3px;
    padding:10px;
    background-color:transparent;
`
const Desc=styled.textarea`
    border:1px solid ${({theme})=> theme.soft};
    color:${({theme})=>theme.text};
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
    background-color:${({theme}) => theme.soft};
    color:${({theme})=> theme.textSoft}
` 
const Label = styled.label`
    font-size:14px   
` 

const Upload = ({setOpen}) => {
    const [ image,setImage] = useState(null)
    const [ video,setVideo] = useState(null)
    const [ videoDetails,setVideoDetails] = useState(null)
    const [ tags,setTags] = useState([])
    const [ imgperc,setImgperc] = useState(0)
    const [ videoperc,setVideoperc] = useState(0)
    const navigate =useNavigate()
    
const handleChange=(e)=>{
    setVideoDetails({...videoDetails,[e.target.name]: e.target.value})
}
const handleUpload = (file,urlType)=>{
            const storage = getStorage(app);
            const filename= new Date().getTime()+file.name
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType =="imgUrl"? setImgperc(progress): setVideoperc(progress)
                switch (snapshot.state) {
                case 'paused':
                    break;
                case 'running':
                    break;
                default:
                    break
                }
            }, 
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                  case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                  case 'storage/canceled':
                    // User canceled the upload
                    break;
            
                  // ...
            
                  case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
              },
            
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setVideoDetails({...videoDetails,[urlType]:downloadURL})
                });
            }
            );
    }
    const reset = ()=>{
        setVideoDetails({})
        // setOpen(false)
        setTags([])
        setVideo(null)
        setImage(null)
        setVideoperc(0)
        setImgperc(0)
    }
    useEffect(() => {
       video && handleUpload(video,'videoUrl')
    }, [video])

    useEffect(() => {
        image && handleUpload(image,'imgUrl')
     }, [image])
    const handleSumbit =async(e) =>{
        e.preventDefault()
        const res = await Axios.post('videos',{...videoDetails,tag:tags})
        res.status==200 && navigate(`video/${res.data._id}`)
        reset()
    }
  return (
    <Container>
        <Wrapper>
            <Close onClick={()=>setOpen(false) }>X</Close>
            <Title>Upload a New Video</Title>
            <Label>Video:</Label>
            {videoperc>0 ?"Uploading"+ videoperc.toFixed()+"%":<Input type="file" accept="video/*" onChange = {e => setVideo(e.target.files[0])} />}
            <Input type="text" placeholder="Title" name='title' onChange={handleChange} />
            <Desc placeholder="Desciption" name='desc' rows={8}onChange={handleChange} />
            <Input type="text" name="tags" placeholder="Seprate tags with commas" onChange={e=> setTags(e.target.value.split(','))}/>
            <Label>Image:</Label>
            {imgperc>0?"uploading"+ imgperc.toFixed()+"%" :<Input type="file"  accept="image/*" onChange = {e => setImage(e.target.files[0])} />}
            <Button onClick= {handleSumbit}>Upload</Button>

        </Wrapper>
    </Container>
  )
}

export default Upload