import React from "react";
import defaultImage from '../default-image.jpeg'

/*
  Add a new feature to this component

  1. Add the character's ancestry in a paragraph below the house.
  2. Add a section for wand below everything and display the wood and core type.

  API schema for consideration http://hp-api.herokuapp.com/api/characters
*/
export default function Challenge1() {
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
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Challenge 1</h2>
        <p className="mb-2">
          This component will show a grid of students from the Harry Potter
          movie franchise. We would like for some new it to be added to
          this page
        </p>
        <ol className="list-inside list-decimal">
          <li>Add the character's patronous, if one exists, in a p tag below the house.</li>
          <li>
            Add a section for wand, if the student has a wand described, with a section heading of 'wand' and display the wood and
            core type.
          </li>
          <li>API Call for reference - https://hp-api.herokuapp.com/api/characters/students</li>
        </ol>
      </div>
      <div>
        {loading ? (
          <div className="mt-10">LOADING</div>
        ) : (
          characters.length > 0 && (
            <div className="grid grid-cols-5 gap-4">
              {characters.map((c, i) => (
                <Character key={`${c.name}-${i}`} character={c} />
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}
function addDefaultSrc(ev) {
  ev.target.src = defaultImage
}

function Character({ character }) {
  const { name, image, house, dateOfBirth } = character;
  return (
    <div className="border border-gray-100 shadow rounded-md overflow-hidden">
      <img src={image} alt={name} className="w-full" onError={addDefaultSrc}/>
      <div className="p-2">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-800">{dateOfBirth}</p>
        <p className="text-gray-800">{house}</p>
      </div>
    </div>
  );
}
