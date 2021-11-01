import React from "react";
import Button from "../Button";

/*
  Find the bug in this component
  
  After the user enters their name clicking the "Log to console" button
  should display a log in the console below greeting the user.
*/
export default function Challenge1() {
  const [name, setName] = React.useState("");

  const onButtonClick = () => {
    console.log(`Hello ${name}`);
  };

  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Challenge 1</h2>
        <p>
          After the user enters their name clicking the "Log to console" button
          should display a log in the console below greeting the user.
        </p>
      </div>
      <div>
        <input
          type="text"
          className="px-8 py-2 rounded shadow border border-gray-400"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={onButtonClick()}>Log to console</Button>
      </div>
    </>
  );
}
