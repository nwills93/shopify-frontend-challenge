import React from "react";

export default function Header() {
  return (
    <header className="jumbotron pb-1" style={{ backgroundColor: "#032d5f" }}>
      <div className="container text-white">
        <h1 className="display-4">Lyrics Randomizer</h1>
        <p className="lead">
          Get AI produced lyrics based on a style or an artist!
        </p>
      </div>
    </header>
  );
}
