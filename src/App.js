import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './App.css';
import Video from './components/Video';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get('/tiktok').then((res) => {
      setData(res.data)
    }).catch(e => console.log(e.message))
  }, [])
  return (
    <div className="app">
      <div className="app__container">
        {
        data.map(author => (
          <Video 
          key={author._id}
          url= {author.url}
          channel={author.channel}
          description={author.description}
          song={author.song}
          likes ={author.likes}
          messages={author.messages} 
          shares={author.shares}
          />
          ))
        }

      </div>

    </div>
  );
}

export default App;
