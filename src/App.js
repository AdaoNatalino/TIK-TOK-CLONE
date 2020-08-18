import React, { useState, useEffect } from 'react';
import './App.css';

import Video from "./components/Video"
import db from "./firebase"

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
      ))
  }, [])

  const renderVideos = () => {
    return videos.map(({ url, channel, description, messages, song, likes, shares }) => (
      <Video
      url={url}
      channel={channel}
      description={description}
      song={song}
      messages={messages}
      likes={likes}
      shares={shares}
      />))
  }

  return (
    <div className="app">
      <div className="app__videos">

        { renderVideos() }

        {/* <Video
        url="https://v16m.tiktokcdn.com/6e7efa7319d60762b0b327209bdffc96/5f3e7521/video/tos/useast2a/tos-useast2a-ve-0068c004/db5a213eeeaa467d911dff0713764c04/?a=1233&br=3422&bt=1711&cr=0&cs=0&dr=0&ds=3&er=&l=202008181305360101890370223C0D81D1&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2U0dDtzeHM3djMzaDczM0ApNGhpOjU1OTs8Nzo7Nzk7NGdoX2RwaXJkMy5fLS00MTZzczRjYC8yNWFhY2M2MDYwXmA6Yw%3D%3D&vl=&vr="
        channel="Adao Natalino"
        description="my description"
        song="wow"
        likes={123}
        messages={10}
        shares={3}
        /> */}
        
      </div>
    </div>
  );
}

export default App;
