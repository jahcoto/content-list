import { useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  //http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=starlivev5&output=mpegts
  //http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=m3u_plus&output=mpegts

  const config = {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": "17486938",
      Connection: "keep-alive",
      "Content-Description": "File Transfer",
      Expires: 0,
      "Cache-Control": "must-revalidate",
      Pragma: "public",
      //"Content-Disposition": attachment; filename="channel.jason"
    },
  };
  //https://stackoverflow.com/questions/42474262/cors-issue-with-external-api-works-via-postman-but-not-http-request-with-axios
  const getContent = async () => {
    const res = await axios.get(
      "http://fenixplay.info:8080/get.php?username=johernandez&password=SksrP0YtNW&type=starlivev5&output=mpegts",
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      }
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
