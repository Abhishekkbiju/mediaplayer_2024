import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../server/allApis'

function Videos(addStatus) {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState([])

  useEffect(()=>{
    getData()
  },[addStatus,delStatus])

  const getData=async()=>{
    const res=await getVideos()
    console.log(res.data)
    setAllVideos(res.data)
    // console.log(allVideos)
  }
  return (
    <div className='bg-light row border border-5 border-dark p-5 '>
      {
        allVideos?
        allVideos.map(item=>(
          <VideoCard video={item} setDelStatus={setDelStatus}/>
        ))
        :
        <h1>No Videos</h1>
      }
              
    </div> 
  )
}

export default Videos