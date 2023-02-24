import { useState, useEffect } from 'react'
import './App.css'
import { CharacterCard } from './common/CharacterCard/CharacterCard';
import { bringCharacters } from './services/apiCalls';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    if (characters.length === 0) {

      //If there are no characters on the array.... it means they haven't arrived yet

      bringCharacters()
        .then(
          dataapi => {
            setCharacters(dataapi.data.results)
          }

        )
        .catch(error => console.log(error))
    }

  }, [characters]);

  return (
    <div className="App">

      <div className="showcase">
        {characters.length > 0 &&

          characters.map(
            element => {
              return (
                <div
                  key={element.id}
                  onClick={() => console.log(element)}
                >
                  <CharacterCard
                    person={element}
                  />
                </div>
              )
            }
          )

        }
      </div>

    </div>
  )
}

export default App
