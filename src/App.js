import "./App.css";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
