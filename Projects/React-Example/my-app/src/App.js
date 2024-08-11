import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component copy/Home";
import Hello from "./Component copy/Hello";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
};

export default App;
