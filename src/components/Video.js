import React, { useRef, useState } from 'react'
import "./Video.css"

import VideoFooter from "./VideoFooter"

function Video() {

    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
            className="video__player"
            loop
            onClick={ onVideoPress }
            ref={ videoRef }
            src="https://v16m.tiktokcdn.com/6e7efa7319d60762b0b327209bdffc96/5f3e7521/video/tos/useast2a/tos-useast2a-ve-0068c004/db5a213eeeaa467d911dff0713764c04/?a=1233&br=3422&bt=1711&cr=0&cs=0&dr=0&ds=3&er=&l=202008181305360101890370223C0D81D1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2U0dDtzeHM3djMzaDczM0ApNGhpOjU1OTs8Nzo7Nzk7NGdoX2RwaXJkMy5fLS00MTZzczRjYC8yNWFhY2M2MDYwXmA6Yw%3D%3D&vl=&vr=">   
            </video>
            <VideoFooter
            channel="Adao Natalino"
            description="This is a description"
            song="testing song"
            />
        </div>
    )
}

export default Video
