// frontend/src/App.js
import { useEffect, useState } from "react";
import { axiosInstance } from "./config/Axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axiosInstance.get("/test").then((res) => {
      console.log(res.data);
      setMessage(res.data.message)
    });
  }, []);

  return (
    <div>
      <h1>Hi hello</h1>

      {message && <h1>{message}</h1>}
    </div>
  );
}

export default App;
