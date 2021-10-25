import React from "react";

/*
  Add a new feature to this component
  
  1. Add a comma separated list of alternate names inside a div below the characted name.
  2. Add the character's ancestry in a paragraph below the house.
  3. Add a section for wand below everything and display the wood and core type.

  API schema for consideration http://hp-api.herokuapp.com/api/characters
*/
export default function Challenge4() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    try {
      fetch(`https://hp-api.herokuapp.com/api/characters/students`).then(
        (response) => {
          response.json().then((json) => {
            setCharacters(json);
            setLoading(false);
          });
        }
      );
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="challenge-header">
        <h2>Challenge 4</h2>
        <p>
          This component will show a grid of students from the Harry Potter
          movie franchise. We would like for some new features to be added to
          this page
        </p>
        <ol>
          <li>
            Add a comma separated list of alternate names inside a paragraph
            below the character name.
          </li>
          <li>Add the character's ancestry in a paragraph below the house.</li>
          <li>
            Add a section for wand below everything and display the wood and
            core type.
          </li>
          {/* add schema link */}
        </ol>
      </div>
      <div className="challenge-content">
        {loading ? (
          <div className="loading">LOADING</div>
        ) : (
          characters.length > 0 && (
            <div className="characters">
              {characters.map((c) => (
                <Character key={c.name} character={c} />
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}

function Character({ character }) {
  const { name, image, house, dateOfBirth } = character;
  return (
    <div className="character">
      <img src={image} alt={name} className="thumb" />
      <div className="content">
        <h3>{name}</h3>
        <p>{dateOfBirth}</p>
        <p>{house}</p>
      </div>
    </div>
  );
}
