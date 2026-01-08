import { useState } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard.jsx";
import Home from "./Component/Home.jsx";
import Navbar from "./Component/Navbar.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    return (
      <>
        <Navbar isLogin={isLogin} />
        <Dashboard />
      </>
    );
  } else {
    return (
      <>
        <Navbar setIsLogin={setIsLogin} />
        <Home />
      </>
    );
  }
}

export default App;
