import React from "react";

/*
  A Challenge where when a button click isn't showing the appropriate action?
*/
export default function Challenge1() {
  const [name, setName] = React.useState("");

  const onButtonClick = () => {
    alert(`Hello ${name}`);
  };

  return (
    <>
      <h2 className="challenge-header">Challenge 1</h2>
      <div className="challenge-content">
        <input
          type="text"
          className="text-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button" onClick={onButtonClick()}>
          Send Alert
        </button>
      </div>
    </>
  );
}
