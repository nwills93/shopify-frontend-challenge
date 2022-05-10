import React from "react";
import Response from "./Response";

export default function Responses({ prompts }) {
  return (
    <div>
      {prompts.map((prompt, index) => (
        <Response
          prompt={prompt.prompt}
          response={prompt.response}
          key={index}
        />
      ))}
    </div>
  );
}
