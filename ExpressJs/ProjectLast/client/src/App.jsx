import React, { useEffect } from "react";
import axios from "axios";
const App = () => {
  const [msg, setMsg] = useState("");

  let api = async () => {
    let a = await axios.get("http://localhost:5000");
    await setMsg(a);
  };

  useEffect(() => {
    api();
  }, []);
  return (
    <div>
      <div>{msg}</div>
    </div>
  );
};

export default App;
