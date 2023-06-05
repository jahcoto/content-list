import { useEffect } from 'react';

import axios from 'axios';
import './App.css';

function App() {
  //http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=starlivev5&output=mpegts
  //http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=m3u_plus&output=mpegts
  const getContent = async () => {
    const res = await axios.get(
      'http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=starlivev5&output=mpegts'
    );

    console.log(res);
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div>
        <h1>JAHtv: Lista Contenido</h1>
      </div>
    </>
  );
}

export default App;
