import React, { useState, useEffect } from "react";
import "./App.css";
import PromptForm from "../FormPage/PromptForm";
import Responses from "../Responses/Responses";
import Header from "./Header";

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const responses = localStorage.getItem("responses");
    if (responses) {
      setPrompts(JSON.parse(responses));
    }
  }, []);

  return (
    <div>
      <Header />
      <PromptForm prompts={prompts} setPrompts={setPrompts} />
      {prompts.length && <Responses prompts={prompts} />}
    </div>
  );
}

export default App;
