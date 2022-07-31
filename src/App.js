import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import { GET_RANDOM_CHARACTER } from "./queries/getRandomCharacter";

import { Character } from './components/Character';
import { GenerateButton } from './components/GenerateButton';
import { DefaultMessage } from './components/DefaultMessage';


export default function App() {
  // qgraphql query, enabled: false to avoid fetching automatically
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_CHARACTER, { enabled: false });

  // history to store al generated characters
  const [history, setHistory] = useState([])

  const generate = () => {
    // fecthes using query
    refetch()

    // saves data when load is completed
    const characterData = data?.randomCharacter;

    //stores character to data
    setHistory([...history, characterData]);
  };

  return (
    <div>
      <button onClick={generate}>Generate!</button>

      {/* checks if history is empty, if not, displays last item in the array */}
      {history.length > 0 ? <Character data={history.at(-1)} /> : null}

      {/* checks if history has more than 1 item, if yes, displays all items except the last one */}
      {history.length > 1
        ?
        history.slice(0,-1).reverse().map(characterData => <Character key={characterData.id} data={characterData} />) 
        : null}
    </div>
  );
}