import React from 'react'
import VideoCard from './VideoCard'
import "../styles/videos.css"
const Videos = ({videos}) => {
  return (
    <div className='videos'>
      {
        videos.map((item,index)=>{
            return <VideoCard index={index} key={item.image} name={item.name} image={item.image}/>
        })
      }
    </div>
  )
}

export default Videos
