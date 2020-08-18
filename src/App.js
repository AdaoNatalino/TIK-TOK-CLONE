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
        
      </div>
    </div>
  );
}

export default App;
