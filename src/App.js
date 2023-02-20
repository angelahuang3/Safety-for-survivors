import "./App.css";
import { Router, Route, Link, useNavigate, Routes } from "react-router-dom";
import Login from "./Login";
import Map from "./Map";
import SignUp from "./Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/map" element={<Map />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
