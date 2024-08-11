import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import JsonApi from "./component/JsonApi/JsonApi";
import LandingPage from "./component/LandingPage";
import AdminPortal from "./component/AdminPortal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AdminPortal />} path="/adminportal/*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



