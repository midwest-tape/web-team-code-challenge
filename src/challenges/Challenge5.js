import React from "react";
/*
   Find the bug in this component
  
   When the user selects either the previous or next button
   we should go and fetch a new person and display it to the user.
*/
export default function Challenge5() {
  const [personNumber, setPersonNumber] = React.useState(1);
  const [person, setPerson] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    try {
      fetch(`https://swapi.dev/api/people/${personNumber}`).then((response) => {
        response.json().then((json) => {
          setPerson(json);
          setLoading(false);
        });
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="challenge-header">
        <h2>Challenge 5</h2>
        <p>
          Make the logic that returns a loading state, fetches the person out of this component and create a custom hook to return that data.
        </p>
      </div>
      <div className="challenge-content">
        <button
          className="button"
          onClick={() => setPersonNumber(personNumber - 1)}
          disabled={personNumber === 1}
        >
          Previous
        </button>

        <button
          className="button"
          onClick={() => setPersonNumber(personNumber + 1)}
        >
          Next
        </button>
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          person && <Person person={person} />
        )}
      </div>
    </>
  );
}

function Person({ person }) {
  const { name, height, hair_color, skin_color, films } = person;
  return (
    <div className="person">
      <h3>{name}</h3>
      <p>height: {height}cm</p>
      <p>hair color: {hair_color}</p>
      <p>skin color: {skin_color}</p>
      <p>number of films: {films.length}</p>
    </div>
  );
}
