import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './Components/Card';
function App() {
  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl mb-4">TailWind Test</h1>
      <Card/>
      <Card/>
    </>
  );
}

export default App;
