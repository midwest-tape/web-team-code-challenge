import React from "react";

/*
  Find the bug in this component
  
  After the user enters their name clicking the "Send Alert" button
  should display an alert greeting the user.
*/
export default function Challenge1() {
  const [name, setName] = React.useState("");

  const onButtonClick = () => {
    console.log(`Hello ${name}`);
  };

  return (
    <>
      <div className="challenge-header">
        <h2>Challenge 1</h2>
        <p>
          After the user enters their name clicking the "Send Alert" button
          should display an alert greeting the user.
          {/* Change this to reflect this being logged in the console. */}
        </p>
      </div>
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
