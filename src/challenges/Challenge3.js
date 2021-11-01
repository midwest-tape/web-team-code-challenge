import React from "react";
import Button from "../Button";
/*
   Find the bug in this component
  
   When the user selects either the previous or next button
   we should go and fetch a new person and display it to the user.
*/
export default function Challenge3() {
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
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Challenge 3</h2>
        <p>
          Clicking the next and previous buttons should allow the user to
          navigate through various Star Wars characters
        </p>
      </div>
      <div>
        <Button
          onClick={() => setPersonNumber(personNumber - 1)}
          disabled={personNumber === 1}
        >
          Previous
        </Button>

        <Button onClick={() => setPersonNumber(personNumber + 1)}>Next</Button>
        {loading ? (
          <div className="mt-10">LOADING</div>
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
    <div className="mt-10">
      <h3 className="text-xl mb-1">{name}</h3>
      <p>height: {height}cm</p>
      <p>hair color: {hair_color}</p>
      <p>skin color: {skin_color}</p>
      <p>number of films: {films.length}</p>
    </div>
  );
}
