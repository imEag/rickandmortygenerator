import React, { startTransition, useEffect, useState, useTransition } from 'react';
import { useQuery } from "@apollo/client";
import { GET_RANDOM_CHARACTER } from "./queries/getRandomCharacter";

import { History } from './components/History';
import { DefaultMessage } from './components/DefaultMessage';
import { Character } from './components/Character';


export default function App() {
  // qgraphql query, enabled: false to avoid fetching automatically
  const { loading, data, refetch } = useQuery(GET_RANDOM_CHARACTER, { enabled: false });

  // history to store al generated characters
  const [history, setHistory] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const generate = () => {
    // Disables generate button
    setDisabled(true);
    
    // fecthes using query
    refetch();
  };
  
  useEffect(() => {
    if (data) {
      //store character in history
      setHistory([...history, data.randomCharacter]);

      //enables generate button
      setDisabled(false);
    }
  }, [data]);


  return (
    <div>
      <button disabled={disabled} onClick={generate}>Generate!</button>

      {/* checks if history is empty, if not, displays last item and history */}
      {history.length > 0
        ? <>
          <Character data={history.at(-1)} />
          <History history={history} />
        </>
        :
        <DefaultMessage />
      }
    </div>
  );
}