import React, { useRef, useState } from 'react'
import '../Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({url,channel, description, song , likes, messages, shares }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const videoHandler = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className="video">       
            <video className="video__player"  
                onClick={videoHandler} 
                ref={videoRef} 
                loop 
                src={url}
                >
                </video>
                <VideoFooter channel={channel} description={description} song={song} />
                <VideoSidebar likes ={likes} messages={messages} shares={shares} />
        </div>
        
    )
}

export default Video
