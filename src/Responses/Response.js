import React from "react";

export default function Response({ prompt, response }) {
  return (
    <div
      className="container mb-3 rounded"
      style={{ backgroundColor: "#7FB5B5" }}
    >
      <div className="row">
        <div className="col-4">
          <h5>Prompt:</h5>
        </div>
        <div className="col-8">
          <p>{prompt}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h5>Response:</h5>
        </div>
        <div className="col-8">
          <p className="fst-italic">{response}</p>
        </div>
      </div>
    </div>
  );
}
