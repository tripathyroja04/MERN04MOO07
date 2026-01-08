import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Component/Home";
import About from "./Component/About";
import Dashboard from "./Component/Dashboard";
import WrongPath from "./Component/WrongPath";
import Login from "./Component/Login";
import Service from "./Component/Service";
import Profile from "./Component/Profile";
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<WrongPath />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile/:userid" element={<Profile />}></Route>
          <Route index element={<Cart />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
    </div>
  );
}

export default App;
