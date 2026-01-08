import { createContext } from "react";
import "./App.css";
import Child from "./Child";

let nameContext = createContext();
let themeContext = createContext();

function App() {
  return (
    <>
      Today we are going to learn the useContext
      {/*
     The steps to create the context 

     => use the createContext method to create the context
     => use the context provider to provide the context to the components
     => add the value
     => export the context to use it in other components


    How to create the context in the other conponents


      => use the useContext() hook and pass the context object to get the context data

     */}
      <nameContext.Provider value={"Qlith"}>
        <themeContext.Provider value={"dark"}>
          <Child />
        </themeContext.Provider>
      </nameContext.Provider>
    </>
  );
}

export { nameContext, themeContext };
export default App;
